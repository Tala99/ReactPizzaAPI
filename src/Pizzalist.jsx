import React, { useEffect } from 'react'
import style from './Pizzalist.module.css'
import {useState} from "react";
export default function Pizzalist() {
    const [orders,setOrders]=useState([]);
    async function getorder(){
        const response= await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
        const menu=await response.json();
        //console.log(menu);
        const order = menu.recipes;
        //console.log(orders);
        setOrders(order);
        
    }
    useEffect( ()=>{
        getorder();},[]
    );
  return (
    <div className='container'>
        <div className='row g-3 '>
            {
                orders.map(product=>
                    <div className='col-lg-3 '>
                        <div className='card'>
                            <h2>{product.title}</h2>
                            <img className={`${style["pizza-img"]}`} src={product.image_url}/>
                        </div>
                    </div>
                )
            }

        </div>
    </div>
  )
}
