import React, {useState, useEffect} from 'react';
import AboutMe from './AboutMe/AboutMe';
import ProfilePicture from './ProfilePicture/ProfilePicture';
import Skills from './Skills/Skills'
import Statistics from './Statistics/Statistics'
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
      <div className={styles.gridContainer}>
        
        {chef ? 
        <div>
          <img src={chef.img} alt="" />
          <p>About Me {chef.about}</p>
            <h1>Skills {chef.services}</h1>
            </div>  : ""}
   

        
            {/* <div className={styles.gridProfilePic}>
                               <ProfilePicture imgUrl="/chefDummy.jpeg" chefName="luigi" chefInfo="Korean | Berlin" />
            </div> */}
            
            {/* <div className={styles.gridAboutMe}>
                               <AboutMe chefDescription={chef.about}/>
            </div>
        
            <div className={styles.gridSkills}>
                            <Skills chefSkills={chef.services }/>
            </div > */}
            
        </div>
    )
}
