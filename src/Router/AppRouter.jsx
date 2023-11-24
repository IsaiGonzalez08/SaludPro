import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../Pages/Login'

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element/>
          <Route path='/login' element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


