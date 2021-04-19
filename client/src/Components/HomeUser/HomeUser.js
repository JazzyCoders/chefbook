import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import NavUser from '../NavUser/NavUser'

export default function HomeUser() {
  const { chefCard, setChefCard,loggedUser, userData,setUserData } = useContext(MyContext)
  //const [users, setUsers] = useState([])
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/users/allUsers")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          setUserData(result.users);
        } else {
          console.log(result.message);
        }
      })
      .catch((err) => console.log(err));


      fetch("http://localhost:5000/dishes/allDishes")
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              if (result.success) {
                //setDishes(result.dishes.sort((a,b)=> a.orderCount -b.orderCount).splice(0,5)) ;
                setDishes(result.dishes)
              } else {
                console.log(result.message);
              }
            })

      .catch((err) => console.log(err));
        //console.log(dishes);

  }, [])
  
  return (

    <div className="cards">
      <NavUser />
      <h1> Welcome {loggedUser.firstName}  </h1>
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
                <Link to={"/profile"}>
                  <button>Profile</button>
                </Link>
                <Link to={`/user/dish/${user._id}`}>
                  <button>Offers</button>
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
