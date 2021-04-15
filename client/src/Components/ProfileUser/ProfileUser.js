import React, { useEffect, useState } from 'react';
import styles from './ProfileUser.module.css'


export default function ProfileUser() {

    const [customer, setCustomer] = useState({});

    useEffect(() => {
       fetch("http://localhost:5000/users/singleUser/605c8abb79d9d96174a1e0b3")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          setCustomer(result.users);
          console.log(customer.img)
        } else {
          console.log(result.message);
        }
      })
        .catch((err) => console.log(err));
    }, [])
    
    return (
        <div >
           {customer ?
          <div  className={styles.gridContainer}>
        <div className={styles.gridProfilePic}>
              <img className={styles.profilePic} src={customer.img} alt="" />
               <p className={styles.name}>{customer.firstName} {customer.lastName}</p>
                        <p className={styles.mail}>{customer.email}</p>
                        <p className={styles.phone}>{customer.phone}</p>
                        <p className={styles.city}>{customer.city}</p>
            </div>
            {/* <div className={styles.gridCustomerData}>
                        <p>{customer.firstName} {customer.lastName}</p>
                        <p>{customer.email}</p>
                        <p>{customer.phone}</p>
                        <p>{customer.city}</p>
              </div> */}
            
             <div className={styles.gridOrderHistory}>
              <h2 className={styles.orderHistory}>Order history</h2>
              <p>{customer.orders}</p>
            </div> 
            
            
          </div> : ""}
        </div>
    )
}
