import React ,{Fragment , useContext , useState ,useEffect} from 'react';
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import style from './History.module.css'
import HistoryCard from './HistoryCard'

export default function History() {

  const [users,setUsers]=useState([])
  const [dishes,setDishes]=useState([])
  const [lastOrder,setLastOrder]=useState([])


useEffect(()=>{
  fetch('http://localhost:5000/order/getLastOrders')
  .then((res)=>res.json())
  .then((result)=>{
      console.log(result)
      if(result.success){
          setDishes(result.lastOrder)
      }else{
          console.log('History Order',result.message)
      }
  })
  .catch((err)=>console.log(err))
},[])


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

