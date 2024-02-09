import { useState } from 'react'
import './App.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './components/HomePage';
import SkillPage from './components/SkillPage';

const router = createHashRouter([
  {
    path: "/PersonalWebsite",
    element: (
        <HomePage/>
    ),

  },
  {
    path: "PersonalWebsite/skills",
    element: (
        <SkillPage/>
     
    ),
  },
  
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
