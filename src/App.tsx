import { UserProvider } from './contexts/UserContext'
import Login from './pages/Login'

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <Login />
      </UserProvider>
    </div>
  )
}

export default App
