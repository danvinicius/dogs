import {Routes, Route} from 'react-router-dom'
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LostPassword from './LostPassword';
import ResetPassword from './ResetPassword';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm></LoginForm>}></Route>
        <Route path='criar' element={<LoginCreate></LoginCreate>}></Route>
        <Route path='perdeu' element={<LostPassword></LostPassword>}></Route>
        <Route path='resetar' element={<ResetPassword></ResetPassword>}></Route>
      </Routes>
    </div>
  )
}

export default Login