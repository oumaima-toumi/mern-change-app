import React ,{useState,useEffect}from 'react'
import Backgroundd from './background/Backgroundd.jsx'
import Hero from './Hero/Hero.jsx'
const Home = () => {
    let heroData=[{text1:"Welcome to ",text2:"Draxlmaier"},
  {text1:"Dive into",text2:"the world of automobile"},
  {text1:"Explore",text2:"its components"}]
  const [heroCount,setHeroCount]=useState(2);
  const[playStatus,setPlayStatus]=useState(true);
  
  useEffect(()=>{
    setInterval(()=> { 
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000);
  },[])
  return (
    <div>
      <Backgroundd playStatus={playStatus} heroCount={heroCount} />
      <Hero
      setPlayStatus={setPlayStatus} heroData={heroData} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus} />

    </div>
  )
}

export default Home
