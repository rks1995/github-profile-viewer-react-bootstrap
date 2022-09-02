import ProfileCard from '../component/ProfileCard'

const ProfilePage = () => {
  return (
    <div>
      <div className='top bg-light p-5 pt-3'>
        <p className='back d-flex align-items-center mb-5'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/2099/2099238.png'
            alt=''
            width={15}
          />
          <span className='ms-2 text-secondary'>Back</span>
        </p>
        <div className='d-flex align-items-center'>
          <img
            src='http://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg'
            alt=''
            width={120}
            className='border border-3 border-secondary rounded me-4'
          />
          <div>
            <h2 className='mb-0 text-secondary'>User Name</h2>
            <p className='text-secondary fw-semibold'>@handle</p>
          </div>
        </div>
      </div>
      <div className='bottom p-5 pb-3'>
        <div className='fw-semibold'>
          <p className='text-secondary'>Bio</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            blanditiis hic, tenetur, aut voluptates nemo dolore ut quasi
            corrupti quisquam eaque, quos autem! In ea ab quae eos maiores
            accusantium ipsum, temporibus laudantium sapiente cumque, blanditiis
            quis error quasi totam.
          </p>
        </div>
        <div className='mt-4 mb-4 fw-semibold'>
          <p className='text-secondary'>Works At</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className='d-flex justify-content-between w-75 mb-4 fw-semibold'>
          <div>
            <p className='text-secondary'>Repository</p>
            <p>52</p>
          </div>
          <div className='fw-semibold'>
            <p className='text-secondary '>Followers</p>
            <p>259</p>
          </div>
        </div>
        <div>
          <p className='text-secondary mb-3 fw-semibold'>Pinned Repositories</p>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </div>
  )
}
export default ProfilePage
