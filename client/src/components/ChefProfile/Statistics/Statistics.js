import React from 'react'
import styles from './Statistics.module.css'

export default function Statistics({chefStatistics}) {
    return (
        <div className={styles.headingStatistics}>
            <h2>Statistics</h2>
            <div className={styles.descriptionStatistics}>
                <p>
                   {chefStatistics} 
                </p>
            </div>
        </div>
    )
}
