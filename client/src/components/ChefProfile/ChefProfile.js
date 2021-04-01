import React, { useEffect, useState } from 'react';
import AboutMe from './AboutMe/AboutMe';
import ProfilePicture from './ProfilePicture/ProfilePicture';
import Skills from './Skills/Skills'
import Statistics from './Statistics/Statistics'
import styles from './ChefProfile.module.css'

export default function ChefProfile() {

    const [profile, setProfile] = useState({});

    useEffect(() => {

        // componentDidMount
        // this will only run once

        // fetch()

        // when fetch completes
        // save response into local state
        // with setProfile function
     }, [])


// components with props:
    return (
        <div className={styles.gridContainer}>
            <div className={styles.gridProfilePic}>
                {/* profile picture component: */}
                <ProfilePicture imgUrl="/chefDummy.jpeg" chefName={profile.name} chefInfo="Korean | Berlin" />
            </div>
            
            <div className={styles.gridAboutMe}>
                {/* about me component: */}
                <AboutMe chefDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed enim neque. Fusce consectetur luctus libero, nec porttitor tortor fringilla eget. Proin rhoncus quam eu eleifend elementum. In pellentesque ante.'/>
            </div>
        
            <div className={styles.gridSkills}>
                {/* skills component: */}
                <Skills chefSkills='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed enim neque. Fusce consectetur luctus libero, nec porttitor tortor fringilla eget. Proin rhoncus quam eu eleifend elementum. In pellentesque ante.'/>
            </div >
            
            <div className={styles.gridStatistics}>
                {/* statistics component: */}
                <Statistics chefStatistics='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed enim neque. Fusce consectetur luctus libero, nec porttitor tortor fringilla eget. Proin rhoncus quam eu eleifend elementum. In pellentesque ante.'/>
            </div>
        </div>
    )
}
