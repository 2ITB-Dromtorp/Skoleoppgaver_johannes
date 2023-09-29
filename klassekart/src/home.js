import { useNavigate } from 'react-router-dom';
import './App.css';
import Elev from './Elev';



export default function Home() {
    
    return (
  

        
    <div className="container">

<div className='leftside'>

    <div className='box'>

      <div className='tositteplasser'> 
        <Elev name='Andreas' />
        <Elev name='Ahmad'/>
      </div>

      <div className='tositteplasser'> 
      <Elev name='Philip'/>
      </div>

      <div className='tositteplasser'> 
      <Elev name='Gabriel'/>
        <Elev name='Teodor'/>
      </div>

    </div>
  </div>
    

<div className='rightside'>

<div className='box'>

    <div className='tresitteplasser'> 
        <Elev name='Mattis'/>
        <Elev name='Alva'/>
        <Elev name='Silas'/>
      </div>

      <div className='tresitteplasser'> 
      <Elev name='Axel'/>
        <Elev name='Vetle'/>
        <Elev name='Keistoffer'/>
      </div>

      <div className='tresitteplasser'> 
      <Elev name='Johannes'/>
        <Elev name='Elias'/>
        <Elev name='Matheo'/>
      </div>
    
  </div>

  </div>


</div>



    );

}