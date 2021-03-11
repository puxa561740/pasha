import img2 from '../../../assets/2.jpg';
import img3 from '../../../assets/clothes.jpg';
import img1 from '../../../assets/umbrellas.jpg';
import {Carousel} from 'react-bootstrap'

const Slider =(props)=>{
  return (
    <Carousel style={{'width': '100%'}}> 
        <Carousel.Item style={{'height': '400px', 'position': 'relative'}}>
          <img className='d-block w-100' style={{'position': 'absolute', 'bottom': '0'}} 
          src={img2}
          alt='1'
          />
        </Carousel.Item>
        <Carousel.Item style={{'height': '400px', 'position': 'relative'}}>
          <img className='d-block w-100' style={{'position': 'absolute', 'bottom': '0'}} 
          src={img3}
          alt='1'
          />
        </Carousel.Item>
        <Carousel.Item style={{'height': '400px', 'position': 'relative'}}>
          <img className='d-block w-100' style={{'position': 'absolute', 'bottom': '0'}} 
          src={img1}
          alt='1'
          />
        </Carousel.Item>
    </Carousel>
 )
  
};

export default Slider;