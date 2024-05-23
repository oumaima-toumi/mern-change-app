import video5 from '../../../assets/video5.mp4'
import DraxHarness1 from '../../../assets/DraxHarness1.webp'
import DraxHarness2 from '../../../assets/DraxHarness2.jpg'
import DraxHarness3 from '../../../assets/DraxHarness3.webp'
import"./Background.css"

const Backgroundd = ({playStatus,heroCount}) => {
    if(playStatus){
      return(
          <video className='background' autoPlay loop muted>
              <source src={video5} type='video/mp4'/>
          </video>
      )}
      else if(heroCount===0){
          return <img src={DraxHarness1} className='background fade-in' alt=""></img>}
     
      else if(heroCount===1){
          return <img src={DraxHarness2} className='background fade-in' alt=""></img>}
      else if(heroCount===2){
            return <img src={DraxHarness3} className='background fade-in' alt=""></img>}
      
  }

export default Backgroundd
