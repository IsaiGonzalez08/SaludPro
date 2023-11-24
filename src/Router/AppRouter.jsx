import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '../Pages/LandingPage'

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='' element/>
        </Routes>
      </BrowserRouter>
    </>
  )
}


