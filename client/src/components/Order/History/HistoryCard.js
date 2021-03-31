import React,{Fragment} from 'react'
import AddIcon from '@material-ui/icons/Add';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import style from './History.module.css'
import img from './external-content.duckduckgo.com.png'



function HistoryCard() {
    return (
        <div className={style.HistorycardContainer}>
        <img src={img} className={style.img}/>
        <div className={style.Text}>
            <h3>Text</h3>
            <p>Heighlight Text</p>
        </div>
        <div className={style.icons}>
        <i><AddIcon style={{color:"#6c42aeff"}}/></i>  

        </div>
        
    </div>
 )

}

export default HistoryCard
