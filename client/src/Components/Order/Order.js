import { StylesProvider } from '@material-ui/styles'
import React from 'react'
import styles from "./Order.module.css"

export default function OrderComponent() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridReceivedOrders}>
        <h2 className={styles.headingReceivedOrders}>Received Orders</h2>
      </div>
      <div className={styles.gridTopOrderedMeals}>
        <div>
          <h2 className={styles.headingTopOrderedMeals}>Top Ordered Meals</h2>
        </div>
        <div>
          <h3 className={styles.headingCustomersRequestingMost}>Customers Requesting Most</h3>
          <div className={styles.gridCustomersRequestingMost}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            </div>
        </div>
      </div>
      <div className={styles.gridHistory}>
      <h2 className={styles.headingHistory}>History</h2>
      </div>
    </div>
  )
}