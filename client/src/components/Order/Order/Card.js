import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import style from './Card.module.css'

function Card(dishname , name , img) {
    return (
        <div className={style.cardContainer}>
            <img src={img} className={style.img}/>
            <div className={style.CardText}>
                <h3>{dishname}</h3>
                <p>{name}</p>
            </div>
            <div className={style.icons}>
            <i><AddIcon style={{color:"#6c42aeff"}}/></i>  
            <i><DeleteSweepIcon style={{color:"#ff4800ff"}}/></i> 

            </div>
            
        </div>
    )
}

export default Card
