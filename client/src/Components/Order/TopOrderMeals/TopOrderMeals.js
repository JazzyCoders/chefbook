import React,{Fragment,useState,useEffect} from 'react'
import style from './TopOrderMeal.module.css'
import Card from './card'
import axios from 'axios'

function TopOrderMeals() {

    const [order , setOrder]=useState({
        category:"",
        Date:"",
        chefId:"",
        name:"",
        img:"",
        price:"",
        ingredients:"",
        portions:"",
        orderCount:"",
        isChef:"",
    })



   const [orderResult, setOrderResult] = useState([])
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/dishes/loadDishes/`)
        .then((res) => {
           console.log(res.data.dishes);
            setOrderResult(res.data.dishes)
        })
        .catch((err) => {
            /* console.log(err) */
        })
    },[])

   /*  const onload =(e)=>{
        e.preventDefault();
        const TopOrderMealData = {
            role:isChef ? 'chef' :'user',
            category:category ,
            Date:Date ,
            chefId:chefId ,
            name:name ,
            img:img,
            price:price,
            ingredients:ingredients,
            portions:portions,
            orderCount:orderCount,

        };
        console.log(TopOrderMealData)

       
    } */

        

    


    return (
        <Fragment>
            <div className={style.header}>
                <p>Top Order Module</p>
            </div>
            
            <div className={style.orderContainer}>
               {orderResult.map((result)=>{
                   return(
                       <>
                         <Card img={result.img}/>
                       </>
                   )
               }) }
            </div>

            
            
          
        </Fragment>
    )
}

export default TopOrderMeals
