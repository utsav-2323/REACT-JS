import React from 'react';
import './Crad.css'

function Crad({ item }) {
    console.log(item); // For debugging

    return (
        <div className='c1'>
            <div className="crt1">
                {Array.isArray(item) && item.length > 0 ? (
                    item.map((val) => (
                        <div key={val.id} className='c2'>
                            <div className="c-img">
                                <img src={val.image} alt={val.title} className='c-img' />
                            </div>
                            <div className="c3">
                                <div className="c-text">
                                    {val.title} <br /> ${val.price}
                                </div>
                                <div className="btn">
                                    <button>Add To Odar</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No items available</div>
                )}
            </div>
        </div>
    );
}

export default Crad;
