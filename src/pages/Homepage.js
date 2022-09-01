const Homepage = () => {
  return (
    <div>
      <div className='top bg-light p-5'>
        <h1 className='mb-5'>
          <i class='fa-brands fa-github'></i>
          <span className='ms-2'>Github Profile Viewer</span>
        </h1>
        <div className='input-group mb-3 w-50'>
          <button className='ps-4 btn btn-primary'>
            <i className='fa-solid fa-magnifying-glass'></i>
          </button>
          <input
            className='form-control p-3 bg-primary b-1 border-0'
            placeholder='Search User'
          ></input>
          <button className='pe-4 btn btn-primary'>X</button>
        </div>
      </div>
      <div className='bottom'></div>
    </div>
  )
}
export default Homepage
