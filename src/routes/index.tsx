import { Routes, Route } from 'react-router-dom'
import Brewery from '../pages/Brewery'
import Login from '../pages/Login'

const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/brewery' element={<Brewery />} />
  </Routes>
)

export default AppRoutes
