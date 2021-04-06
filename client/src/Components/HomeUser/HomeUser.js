import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import NavUser from '../NavUser/NavUser'

export default function HomeUser() {
  const { chefCard, setChefCard, userData } = useContext(MyContext)
  const [users, setUsers] = useState([])
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          setUsers(result.users);
        } else {
          console.log(result.message);
        }
      })
      .catch((err) => console.log(err));


      fetch("http://localhost:5000/dishes")
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
        console.log(dishes);

  }, [])

 
  
  return (

    <div className="cards">
      <NavUser />
      <h1> Welcome {users.lastName} </h1>
      <div className="chefCd" style={{display:"inline-flex" ,flexWrap:"wrap"}}>
      {users.map((user) => {
        if (user.role === "Chef") {
          return (
            <div className="chefCard" style={{border:"5px solid rgb(60, 37, 97)",borderRadius:"10px" , margin:"20px",alignContent: "center",width:"400px" }}>
              <img src={user.img} alt="img" width="400" height="450" />
              <h1>Name: {user.firstName}</h1>
              <p>About Chef: {user.description}</p>
              <hr/>
              <div style={{}} >
                <Link to={`/profile/${user.id}`}>
                  <button>Profile</button>
                </Link>
                <Link to={`/user/dishes/${user.id}`}>
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
            <div>
           <img src={dish.img} alt=""/>
           <h3>{dish.price}</h3>
           <h1>cooked by {dish.name} </h1> 
        </div>
          )
        })}
        
      </div>
    </div>
  )
}
