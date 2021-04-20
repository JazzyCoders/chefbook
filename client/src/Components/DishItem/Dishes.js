import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import NavUser from '../NavUser/NavUser'
import { useParams } from 'react-router-dom';
//import { MyContext } from '../../App';




export default function Dishes() {
      const {userData,
        dishes,
        show, 
        loggedUser,
        setChefUId,
        setShow,
        } = useContext(MyContext)

    const { dishId } = useParams()


  return (
    <div>
      <NavUser/>
      <div className="DshCard" >  
      <div className="DsHead" >
        <h1> Spacial Offer </h1>
        <p>20% OFF</p>
      </div>
        <hr/>
        {dishes.map((dish)=>{

          if (dish._id=== dishId) {
          
          return(
            <div className="DshIt" >
           <img src={dish.img} alt="images" />
           <h2>${dish.price}</h2>
           <div className="sidInfo" >
           <h3> {dish.name} </h3>  
           <button onClick={()=> setShow(!show )} >Ingredients</button>
           {show && <div>{dish.ingredients.map((ing)=>{
             return(
               <ul>
                 <li>{ing} </li>
               </ul>
             )
           })}
           </div> }
           <hr/>
           <div className="btn">
                <Link to={"/user/orders/"}>
                  <button onClick={()=> setChefUId()}> Order </button>
                </Link>
                <Link to={"#"}>
                  <button >Rate</button>
                </Link>
           </div>
           </div>
        </div>
          )
         }
        })}
        
    </div>
    </div>
  )
}
