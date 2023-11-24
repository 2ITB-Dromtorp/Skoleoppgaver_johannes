import './Kurs.css';
import { useNavigate } from 'react-router-dom';


export default function Norsk() {

    const navigate = useNavigate();
    
    return (
        <div className='B'>
        <div className='L'>
        <h1>
            Du er logget in
        </h1>
        <button class="button" onClick={() => navigate(-1)}>Tilbake til hovedmeny</button>
        </div>
        </div>
    )
}