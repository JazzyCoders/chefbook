import React,{Fragment,useContext, useEffect, useState} from 'react'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import style from './order.module.css'
import Card from './Card'
import { MyContext } from '../../../App';



export default function OrderComponent() {
    const {userData}=useContext(MyContext)
    const [users,setUsers]=useState([])
    const [dishes,setDishes]=useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:5000/users')
    //     .then((res)=>res.json())
    //     .then((result)=>{
    //         console.log(result)
    //         if(result.success){
    //             setUsers(result.users)
    //         }else{
    //             console.log(result.message)
    //         }
    //     })
    //     .catch((err)=>console.log(err))
    // },[])

    useEffect(()=>{
        fetch('http://localhost:5000/dishes')
        .then((res)=>res.json())
        .then((result)=>{
            console.log(3453553,result)
            if(result.success){
                setDishes(result.dishes)
            }else{
                console.log(result.message)
            }
        })
        .catch((err)=>console.log(err))
    },[])
     
    return (
        <Fragment>
             <div className={style.orderContainer}>
            <div className={style.header}>
                <p>order</p>
            </div>
            <div className={style.orderContainer}>
            {users.map((user)=>{
                if(user.role==='user'){
                    return(
                        <Card dishname = {dishes.name} name ={user.firstName} img={user.img} />
                    )
                }
            })}
            </div>
            </div> 

            
            
          
        </Fragment>
    )
}

