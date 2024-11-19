import React, { useEffect, useState } from 'react'
import { auth, firestore } from '../../firebaseConfig';
import { addDoc,collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth/cordova';
import '../App.css'


export default function Home() {
  const [user,setuser]= useState("");
  const [name,setNeme]= useState("");
  const [subject,setSubject]= useState("");
  const [record,setRecord]= useState("")
  const [editIndex, setEditIndex]= useState(null);
  
  useEffect(() =>{
    let unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
      if(currentUser){
        setuser(currentUser.uid);
      }
    })
  },[])
  
  useEffect(()=>{
    fetchUser()
    fetchData()
  },[user])
  
  const fetchUser = async () =>{
    if (user !== "guest") {
      const userDoc = await getDoc(doc(firestore, "users", user));
      console.log("User Data:", userDoc.data());
    }
  };
  
  
  const fetchData = async () => {  
    let data = await getDocs(collection(firestore,"Users"))
    console.log(data);
    let newData = data.docs.map((item)=>({docId: item.id,...item.data()}));
    console.log(newData);
    setRecord(newData);
  }

  const addData = async () => {
    if (editIndex == null) {
      await addData(collection(firestore,"Users"),{
        name,subject
      });
    }else{
      await updateDoc(doc(firestore,"Users",editIndex),{name,subject});
    }
    fetchData()
    setEditIndex(null)
    setNeme("")
    setSubject("")
  }

  const deletData = async (docId) =>{
    await deletData(doc(firestore,"Users",docId));
    let deleteRecord = record.filter((item)=> item.docId != docId);
    setRecord(deleteRecord)
  }

  const editData = (docId) => {
    let singleData = record.find((item)=>item.docId == docId);
    setNeme(singleData.name)
    setSubject(singleData.subject)
    setEditIndex(docId)
  }
  return (
    <>
    <div className="u-main">
      <div className="u1">
      <h1 className='k1'>Stundant Sub</h1>
      </div>
      <div className="u2">
      <input type="text" placeholder='name' value={name} onChange={(e) => setNeme(e.target.value)}/>
      <input type="text" placeholder='subject' value={subject} onChange={(e) => setSubject(e.target.value)}/>  
      </div>
      <div className="u3">
      <button onClick={addData}>{editIndex == null ? "add" : "update"}</button>
      </div>
      

      {
        record &&
        record.map((e,i)=>{
          return <ul className='out' key={i}>
            <li className='ut'>{e.name}</li>
            <li className='ut'>{e.subject}</li>
            <li className='ut'><button className='dltt' onClick={()=> editData(e.docId)}>Edint</button></li>
            <li className='ut'><button className='dltt' onClick={()=> deletData(e.docId)}>Delet</button></li>

          </ul>
        })
      }
    </div>
      
    </>
  )
}













