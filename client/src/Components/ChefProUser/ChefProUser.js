import React, {useState, useEffect,useContext} from 'react';
import { MyContext } from '../../App';
import NavUser from "../NavUser/NavUser"
import {useParams} from "react-router-dom"


  
  export default function ChefProUser() {
    const { chefId } = useParams();
    const {chefUId} =useContext(MyContext)
    const [chef, setChef] = useState({})

   useEffect(() => {
       fetch(`http://localhost:5000/users/${chefId}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          setChef(result.users);
          console.log(chef)
        } else {
          console.log(result.message);
        }
      })
        .catch((err) => console.log(err));
        }, [])
       

    return (
      <div>
        <NavUser/>
        <div className="chefPr">
          {chef.map((user)=>{
            return(
              <div className="ChefBio">
              <img src={user.img} alt="img"/>
              <h2></h2>
            </div>

            ) 
          })}
        </div>
      
      </div>        
      )
}
