import React ,{Fragment} from 'react';
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import style from './History.module.css'
import HistoryCard from './HistoryCard'

export default function History() {
    return (
        <Fragment>
        <div className={style.HistoryContainer}>
       <div className={style.header}>
           <p>History</p>
       </div>
       <div className={style.HistoryContainer}>
       <HistoryCard/>
       <HistoryCard/>

       </div>
       </div> 

       
       
     
   </Fragment>
    )
}

