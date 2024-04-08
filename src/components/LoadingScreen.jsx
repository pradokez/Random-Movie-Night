const LoadingScreen = () => {
  return (
    <>
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
    </>
  );
};

export default LoadingScreen;
