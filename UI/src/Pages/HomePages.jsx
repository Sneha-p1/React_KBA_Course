import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CourseCards from '../components/CourseCards'
import Button from '../components/Button'

const HomePages = () => {
  return (
    <>

    <Hero/>
    <CourseCards isHome={true}/>
    <Button/>
    </>
  )
}

export default HomePages