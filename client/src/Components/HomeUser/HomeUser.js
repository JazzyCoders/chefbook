import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import NavUser from '../NavUser/NavUser'

export default function HomeUser() {
  const {userData,
        dishes,
        show, 
        loggedUser,
        setChefUId,
        setShow,
        chefUId} = useContext(MyContext)



    //console.log(chefUId);
  
  return (

    <div >
      <NavUser/>
      <div className="chefCd">
        <h1> Welcome  {loggedUser.firstName} </h1> 
    
      {userData.map((user) => {
        if (user.role === "Chef") {
          return (
            <div className="chefCard" >
              <img src={user.img} alt="img" width="400" height="450" />
              <h2>Name: {user.firstName}</h2>
              <h3>About Chef </h3>
              <p class="overflow-visible">{user.description}</p>
              <hr/>
              <div>
                <Link to={`/ChefProUser/${user._id}`}>
                  <button /* onClick={()=> setChefUId(user._id)} */  >Profile</button>
                </Link>
                <Link to={`/user/offers/${user._id}`}>
                  <button >Offers</button>
                </Link>
              </div>
            </div>
          )
        }
      })}</div>
      <hr/>
      
      <div className="BstDl" >
        <h1>Best Deals</h1>
        <hr/>
        {dishes.map((dish)=>{
          return(
            <div className="BstCd" >
           <img src={dish.img} alt="images" width="300px" height="300px"/>
           <h2>${dish.price}</h2>
           <h3> {dish.name} </h3>
           <hr/>
           <div className="btn">
                <Link to={"#"}>
                  <button onClick={()=> setChefUId()}> Rate </button>
                </Link>
                <Link to={`/dishItem/${dish._id}`}>
                  <button >More</button>
                </Link>
           </div>
        </div>
          )
        })}
        
              
      </div>
    </div>
  )
}
