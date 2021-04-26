import React, {useState, useEffect,useContext} from 'react';
import { useParams } from 'react-router';
import { MyContext } from '../../App';
import NavUser from '../NavUser/NavUser';
import styles from './ProfileUser.module.css'


export default function ProfileUser() {

    const {loggedUser} =useContext(MyContext)
    const [customer, setCustomer] = useState({})
    const {userId} =useParams()

   useEffect(() => {
       fetch(`http://localhost:5000/users/${userId}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          setCustomer(result.users);
          console.log(customer)
        } else {
          console.log(result.message);
        }
      })
        .catch((err) => console.log(err));
        }, [])
       


    return (
        <div>
          <NavUser/>
            {customer ?
          <div className={styles.gridContainer}>

          <h2 className={styles.headingAboutMe}></h2>
             <h1> User: {customer.firstName}  {customer.lastName} </h1> 
        <div className={styles.gridProfilePic}>
              <img className={styles.profilePic} src={customer.img} alt="" />
            </div>
            <div className={styles.gridProfileData}>
              <p>Cuisine: {customer.cuisine} | City:{customer.city} |Tel:{customer.phone} </p>
              </div>
            
            <div className={styles.gridAboutMe}>
              <h2 className={styles.headingAboutMe}>About Me</h2>
             <p>{customer.about}</p>
             <hr/>
             <h2 className={styles.headingAboutMe}>Profile</h2>
             <p>{customer.description}</p>
            </div>

            <div className={styles.gridSkills}>
              <h2 className={styles.headingSkills}>Skills</h2>
              <ul>
                <li>{customer.services}</li>
              </ul>
            </div>

          </div> : ""}
        
        </div>
    )
}
