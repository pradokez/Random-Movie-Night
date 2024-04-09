import { Fragment } from "react";

const LoadingScreen = () => {
  return (
    <Fragment>
      <div className='loader-container'>
        <div className='three col'>
          <div className='loader' id='loader-2'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className='semi-ellipse-top' />
      <div className='semi-ellipse-bottom' />
    </Fragment>
  );
};

export default LoadingScreen;
