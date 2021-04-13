import React, {useState, useEffect} from 'react';
import styles from './ChefProfile.module.css'


  
        export default function ChefProfile() {
    
            const [chef, setChef] = useState({})
   useEffect(() => {
       fetch("http://localhost:5000/users/singleUser/6059b4ca378c69235b4f929d")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          setChef(result.users);
          console.log(chef.img)
        } else {
          console.log(result.message);
        }
      })
        .catch((err) => console.log(err));
        }, [])
       

    return (
      <div>
        
        {chef ?
          <div className={styles.gridContainer}>
            
        <div className={styles.gridProfilePic}>
              <img className={styles.profilePic} src={chef.img} alt="" />
            </div>

            <div className={styles.gridProfileData}>
              <p>{chef.cuisine} | {chef.city}</p>
              </div>
            
            <div className={styles.gridAboutMe}>
              <h2 className={styles.headingAboutMe}>About Me</h2>
             <p>{chef.about}</p>
            </div>

            <div className={styles.gridSkills}>
              <h2 className={styles.headingSkills}>Skills</h2>
              <p>{chef.services}</p>
            </div>
            
            
          </div> : ""}
             </div>        
    )
}
