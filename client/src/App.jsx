import { useEffect, useState } from 'react'
import { Outlet, Navigate, createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'

import './App.scss'

import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Blogs from './pages/Blogs/Blogs'
import Blog from './pages/Blog/Blog'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2500)
  // })

  const Layout = () => {
    return (
      <div>
        <Navbar/>
        <Outlet />
        <ScrollRestoration />
        <Footer/>
      </div>
    )
  }

  // const ProtectedRoute = ({ children }) => {
  //   if(!name) {
  //     // return (<Navigate to={'/login'} />)
  //     return (<Navigate to={'/'} />)
  //   }
  //   return children
  // }
  
  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <Layout/>,
      // element: <ProtectedRoute>
      //   <Layout/>
      // </ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/blogs',
          element: <Blogs/>
        },
        {
          path: '/blogs/:id',
          element: <Blog/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/dashboard',
          element: <Dashboard/>
        },
        {
          path: '/dashboard/login',
          element: <Login/>
        },
        {
          path: '/dashboard/register',
          element: <Register/>
        },
        {
          path: '/*',
          element: <NotFound/>
        }
      ]
    }
  ])

  return (
    <div className='wrapper'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
