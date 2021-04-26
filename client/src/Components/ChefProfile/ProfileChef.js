import React, {useState, useEffect,useContext} from 'react';
import { MyContext } from '../../App';
import Nav from '../Nav/Nav';
import styles from './ChefProfile.module.css'


  
  export default function ChefProfile() {

    const {loggedUser} =useContext(MyContext)
    const [chef, setChef] = useState({})

   useEffect(() => {
       fetch(`http://localhost:5000/users/${loggedUser._id}`)
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
        <Nav/>
        {chef ?
          <div className={styles.gridContainer}>

          <h2 className={styles.headingAboutMe}></h2>
             <h1>Chef: {chef.firstName}  {chef.lastName} </h1> 
        <div className={styles.gridProfilePic}>
              <img className={styles.profilePic} src={chef.img} alt="image" />
            </div>
            <div className={styles.gridProfileData}>
              <p>Cuisine: {chef.cuisine} | City:{chef.city} |Tel:{chef.phone} </p>
              </div>
            
            <div className={styles.gridAboutMe}>
              <h2 className={styles.headingAboutMe}>About Me</h2>
             <p>{chef.about}</p>
             <hr/>
             <h2 className={styles.headingAboutMe}>Profile</h2>
             <p>{chef.description}</p>
            </div>

            <div className={styles.gridSkills}>
              <h2 className={styles.headingSkills}>Skills</h2>
              <ul>
                <li>{chef.services}</li>
              </ul>
            </div>

          </div> : ""}
             </div>        
    )
}
