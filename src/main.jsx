import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CreateTrip from './create-trip'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Header from './components/ui/custom/Header'



 const router = createBrowserRouter ([

  
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create-trip',
    element:<CreateTrip/>

  }
 ])


 

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
  <RouterProvider router={router} />

  </StrictMode>,
)
