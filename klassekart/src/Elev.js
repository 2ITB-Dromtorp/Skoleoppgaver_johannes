import { useNavigate } from 'react-router-dom';

export default function Elev(props){

    let name = props.name;
    let path = props.name.toLowerCase();

    const navigate = useNavigate();

return (
    
    if (props.name in list_of_srudent) {
        <div className='elev' onClick={() => navigate(path)}> {name} </div>
    } else {
        don't do anything
    }
   
)


}