import React from 'react';

import style from './LoadingOverlay.module.css';

const LoadingOverlay = ({ isFullPage }) => {
  return (
    <div className={`${style.overlay_container} ${isFullPage ? style.fullPage : ''}`}>
      <span className={style.loader}></span>
    </div>
  )
}

export default LoadingOverlay