import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Homepage, ProfilePage } from './pages'

function App() {
  return (
    <Router>
      <div className='container mt-2 w-75 shadow-lg p-0'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
