import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} /> 
    <Toaster />
    </Provider>
  </StrictMode>,
)
