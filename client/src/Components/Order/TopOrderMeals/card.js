import React,{useState} from 'react'
import style from './TopOrderMeal.module.css'
import image from './image.png'

function Card(img) {

    return (
        <div className={style.circle}>
            <img src={img} alt="" className={style.img}/>
        </div>
    )
}

export default Card
