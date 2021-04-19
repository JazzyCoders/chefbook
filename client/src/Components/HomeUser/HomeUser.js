import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import NavUser from '../NavUser/NavUser'

export default function HomeUser() {
  const {userData,
        setUserData ,
        dishes, 
        setDishes, 
        setChefUId,
        chefUId} = useContext(MyContext)



    //console.log(chefUId);
  
  return (

    <div className="cards">
      <NavUser />
      <h1> Welcome </h1>
      <div className="chefCd" style={{display:"inline-flex" ,flexWrap:"wrap"}}>
      {userData.map((user) => {
        if (user.role === "Chef") {
          return (
            <div className="chefCard" style={{border:"5px solid rgb(60, 37, 97)",borderRadius:"10px" , margin:"20px",alignContent: "center",width:"400px" }}>
              <img src={user.img} alt="img" width="400" height="450" />
              <h1>Name: {user.firstName}</h1>
              <p>About Chef: {user.description}</p>
              <hr/>
              <div style={{}} >
                <Link to={"/ChefProfile"}>
                  <button onClick={()=> setChefUId(user._id)}  >Profile</button>
                </Link>
                <Link to={"/user/offers"}>
                  <button onClick={()=> setChefUId(user._id)} >Offers</button>
                </Link>
              </div>
            </div>
          )
        }
      })}</div>
      <div>
        <h1>Best Deals</h1>
        {dishes.map((dish)=>{
          return(
            <div style={{display:"inline-flex", flexWrap:"wrap"}}>
           <img src={dish.img} alt="images" width="300px" height="300px"/>
           <h1>${dish.price}</h1>
           <h1> {dish.name} </h1>
           <h1>By Chef {}</h1> 
        </div>
          )
        })}
        
      </div>
    </div>
  )
}
