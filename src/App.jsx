import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './AuthContext'

const Home = () => {
  <div>
    return <h2>Welcome to the Home Page</h2>
    <p>Please use the menu to navigate through the page</p>
  </div>
}

  const App = () => (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route paths = '/' element={<Home />} />
          <Route paths = '/login' element={<Login />} />
          <Route paths = '/register' element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );


export default App
