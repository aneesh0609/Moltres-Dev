import React, { useRef } from 'react'
import Header from '../components/Header'
import SkillsTimeline from '../components/Timeline'
import PortfolioProjects from '../components/Projects'
import TataCertificate from '../components/Certificates'
import GetInTouch from '../components/Info'


function Home() {

  const projectsRef = useRef(null);

  return (
    <>
     {/* Pass scroll function to Header */}
      <Header scrollToProjects={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })} />
    <SkillsTimeline />
    <div ref={projectsRef}>
  <PortfolioProjects />
   </div>
    <TataCertificate />
    <GetInTouch />
 
    
   
   
    </>
  )
}


export default Home