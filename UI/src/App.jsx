import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import CourseCards from './components/CourseCards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Button from './components/Button'
import HomePages from './Pages/HomePages'
import CoursesPages from './Pages/CoursesPages'

import MainLayout from './Layouts/MainLayout'
import NotfoundPage from './Pages/NotfoundPage'
import ContactPage from './Pages/ContactPage'
import CoursePage, { courseLoader } from './Pages/CoursePage'
import AddCoursePage from './Pages/AddCoursePage'
import EditCoursePage from './Pages/EditCoursePage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import AuthLayout from './Layouts/AuthLayout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
<>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
    </Route>
      
      
      <Route path="/" element={<MainLayout/>}>
        <Route path="/home" element={<HomePages />} />
        <Route path="/courses" element={<CoursesPages />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/course/:id" element={<CoursePage/>} loader={courseLoader} />
        <Route path="/add-course" element={<AddCoursePage />} />
        <Route path="/edit-course/:id" element={<EditCoursePage />} loader={courseLoader}/>
        <Route path="*" element={< NotfoundPage/>} />
      </Route>
</>
    )
  )

  return (
    <>
    {/* {/* <Navbar/> */}

{/* <CourseCards/> */}
   {/* <!-- cards --> */}


      {/* <!-- all courses button --> */}
      {/* <Button/> */}NotfoundPage

      <RouterProvider router={router} />

    </>
  )
}

export default App
