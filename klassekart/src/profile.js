import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';



export default function Profile(){
    const navigate = useNavigate();

    let profileParams = useParams();

    return (
        <>
        <div className='profile-container'>

        <div className='profile-box'>
        <h1>dette er profilen til eleven</h1>
        <button onClick={() => navigate('/')}> tilbake til hovedmeny</button>
        </div>
        </div>
        </>
    )

}