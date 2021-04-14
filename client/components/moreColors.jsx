import React from 'react';
import styles from '../style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const MoreColors = (props) => {

  const imageUrls = props.images;
  const images = imageUrls.map((url) => <img src={url} className={styles.imageTiles}/>);

  return (<div className={styles.aboutMoreColors}>
    <div className={styles.gridForMore}>
      <div className={styles.aboutMoreColorsTitle}>Color</div>
      <div className={styles.aboutMoreColorsColor}>{props.color.charAt(0).toUpperCase() + props.color.slice(1)}</div>
      <FontAwesomeIcon icon={faGreaterThan} className={styles.aboutArrowButton}/>
    </div>
    {images}
  </div>);
};

export default MoreColors;