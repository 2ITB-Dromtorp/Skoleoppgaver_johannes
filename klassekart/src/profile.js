import { useNavigate, useParams } from 'react-router-dom';
import Json from './profiles';
import { useState } from 'react';

export default function Profile() {
    const navigate = useNavigate();
    const { urlInfo } = useParams();
    const [profile, setProfile] = useState({
        "navn" : null,
        "alder" : null,
        "email": null,
        "Tlf": null,
        "image": null
    })

    Json.elever.map((item, index) => {
        if (item.navn.toLowerCase() == urlInfo.toLowerCase()) {
            console.log(item);
            
        }
    })



    return (
        <div className="profile-container">
            <div className="profile-box">
                <h1>dette er profilen til {urlInfo}</h1>
                <button onClick={() => navigate(-1)}>tilbake til hovedmeny</button>
            </div>
        </div>
    );
}