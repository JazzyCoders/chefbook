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
    
           <div className="chefBio">
              <img src={chef.img} alt="img"/>
              <h1>{chef.firstName}{chef.lastName}</h1>
              <div className="chefAdr">
                <h2>Cuisine: {chef.cuisine}</h2>
                <h2>City: {chef.city}</h2>
                <h2>Tel: {chef.phone}</h2>
              </div>
            </div>
            <div className="position">
               <div className="chefInfo">
                <div className="chefAbt">
                <h1>About Me</h1>
                <p>{chef.about} </p>
                </div>
               <div className="chef">
                <h1>Summary</h1>
                <p>{chef.description} </p>
                </div>
                </div>
                <div className="chefSkills">
                  <h1>Skills</h1>
                {chef.services}
                </div>
              </div>
        </div>
      
      </div>        
      )
}
