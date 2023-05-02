import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EspecialidadesPage from './Pages/Especialidades.tsx';
import EspecialidadesDetails from './Pages/EspecialidadeDetails.tsx';
import AboutUsPage from './Pages/AboutUs.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/especialidades",
    element: <EspecialidadesPage/>
  },
  {
    path: "/especialidadesDetail",
    element: <EspecialidadesDetails/>
  },
  {
    path: "/sobreNós",
    element: <AboutUsPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
