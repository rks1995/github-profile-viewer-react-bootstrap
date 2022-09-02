const UserCard = () => {
  return (
    <div className='shadow card mb-3 p-3'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png'
            className='w-75 pe-0'
            alt=''
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>User name</h5>
            <p className='card-text text-secondary'>
              @handle, work at description bio to be wrapped and not than 3
              lines
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserCard
