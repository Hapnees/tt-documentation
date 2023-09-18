import React from 'react'
import fsdImage from './assets/fsd.jpg'
import styles from './FSDReviewImage.module.scss'

export const FSDReviewImage = () => {
  return <img src={fsdImage} className={styles.image} />
}
