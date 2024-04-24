import React from 'react'
import Navbar from '../Components/Navbar'
import HomeBanner from '../Components/HomeBanner'
import OurProjectsNprograms from '../Components/OurProjectsNPrograms';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomeBanner/>
      <OurProjectsNprograms/>
    </div>
  )
}
