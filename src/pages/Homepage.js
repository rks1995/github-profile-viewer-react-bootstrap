import UserCard from '../component/UserCard'

const Homepage = () => {
  return (
    <div>
      <div className='top bg-light p-5'>
        <h1 className='mb-5'>
          <i className='fa-brands fa-github'></i>
          <span className='ms-2 text-secondary'>Github Profile Viewer</span>
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
      <div className='bottom p-5 pb-0'>
        <div className='row'>
          <div className='col'>
            <UserCard />
          </div>
          <div className='col'>
            <UserCard />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <UserCard />
          </div>
          <div className='col'>
            <UserCard />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <UserCard />
          </div>
          <div className='col'>
            <UserCard />
          </div>
        </div>
      </div>
      <footer className='p-5 pb-2 pt-3'>
        <p className='text-secondary fs-5'>
          Note: more search user should be lazy loaded as user scroll down.
        </p>
      </footer>
    </div>
  )
}
export default Homepage
