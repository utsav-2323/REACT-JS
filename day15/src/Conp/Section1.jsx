import React from 'react'

 function Section1() {
  
    localStorage.setItem("name1","fenil");
    localStorage.setItem("name2","utsav");
    localStorage.setItem("name3","keval");
    localStorage.setItem("name4","vatsal");
    let user = localStorage.getItem("name")
    console.log(user);

    localStorage.removeItem("name4")            

    // localStorage.clear()

    let obj1 = {
        
        name :"utsav",
        city :"Rajkot",
        subject :"React",
        skill : "Web developer",
        laptop :"Del i5"
    }

    // let obj2 ={
    //     "name" :"Fenil",
    //    " city ":"Rajkot",
    //     "subject" :"React",
    //     "skill ": "Web developer",
    //     "laptop" :"Del i5"
    // }

    localStorage.setItem("student", JSON.stringify(obj1))

    let student = JSON.parse (localStorage.getItem("student"));
    console.log(student);
    

  return (
    <div>Section1</div>
  )
}

export default Section1