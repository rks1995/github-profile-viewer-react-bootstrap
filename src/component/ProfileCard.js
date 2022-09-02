const ProfileCard = () => {
  return (
    <div className='shadow card mb-3 p-2'>
      <div className='d-flex align-items-center'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png'
          className='me-3'
          alt=''
          width={60}
        />
        <div>
          <h4 className='m-0'>username/reponame</h4>
          <p className='fw-semibold text-secondary'>
            Description about Repository
          </p>
        </div>
      </div>
    </div>
  )
}
export default ProfileCard
