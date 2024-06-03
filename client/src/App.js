import './App.css';
import Post from './post.js';
import Header from './header.js';
import {Routes, Route} from "react-router-dom";
import Layout from './Layout.js';
import IndexPage from './pages/indexpage.js'
import LoginPage from './pages/loginpage.js'
import RegisterPage from './pages/registerpage.js'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={
        <IndexPage/>
      }/>
      <Route path={'/login'} element={
        <LoginPage/>
      }/>
      <Route path={'/register'} element={
        <RegisterPage/>
      }/>
      </Route>
    </Routes>
    
  );
}

export default App;
