import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import Nav from '../Nav/Nav';
import NavUser from '../NavUser/NavUser'

export default function HomeUser() {
  const { chefCard, setChefCard, userData } = useContext(MyContext)
  const [users, setUsers] = useState([])
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    fetch("http://localhost:5001/users")
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
  }, [])

  const bestDeal = () => {
    fetch("http://localhost:5001/dishes")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          //setDishes(result.dishes.sort((a,b)=> a.orderCount -b.orderCount).splice(0,5)) ;
          setDishes(result.dishes)
        } else {
          console.log(result.message);
        }
      });

  }
  console.log(dishes);
  return (

    <div>
      <NavUser />
      <h1> Welcome { } </h1>
      {users.map((user) => {
        if (user.role === "Chef") {
          return (
            <div className="chefCard" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
              <img src={user.img} alt="" />
              <h2>Name:{user.firstName}</h2>
              <p>About Chef:{user.description}</p>
              <div className="cardBtn">
                <Link to={`/profile/${user.id}`}>
                  <button>Profile</button>
                </Link>
                <Link to={`/user/order/${user.id}`}>
                  <button>Offers</button>
                </Link>
              </div>
            </div>
          )
        }
      })}
      <div>

      </div>
    </div>
  )
}
