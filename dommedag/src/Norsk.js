import './Kurs.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Norsk() {

    const navigate = useNavigate();
    const [Kurs, setKurs] = useState("Meld meg på")
    function confirmSignUp() {
       
    }
    return (
        <div className='B'>
        <div className='L'>
        <h1>
            Norsk
        </h1>
        <p>Dette nyskapende kurset er skreddersydd for å imøtekomme behovene til voksne i alderen 40 til 60 år, og det tar sikte på å berike livet ditt gjennom en unik kombinasjon av språk, kultur, og personlig vekst. Vi har utformet "Livsferdigheter 2.0" for å gi deg en dyp forståelse av norsk språk og kultur samtidig som du utvikler praktiske ferdigheter som vil berike din personlige og profesjonelle reise.
        <br></br><br></br>
Kursbeskrivelse:
Målgruppe:
Dette kurset er skapt med tanke på voksne i alderen 40 til 60 år som ønsker å utforske norsk språk og kultur på en meningsfull og praktisk måte.
<br></br><br></br>
Mål:
<br></br><br></br>
Utvikle solide norskkunnskaper for dagliglivssituasjoner.
Forstå og verdsette norsk kultur og samfunn.
Bygge broer mellom språklige ferdigheter og personlig vekst.
Kursinnhold:
<br></br><br></br>
Språkopplæring:
<br></br><br></br>
Grunnleggende til avanserte norskkunnskaper tilpasset deltakernes nivå.
Praktisk anvendelse av språket i hverdagslige situasjoner.
Kulturell Forståelse:
<br></br><br></br>
Dykk ned i norsk historie, tradisjoner og levesett.
Utforsk samtidskunst, musikk og litteratur.
Praktiske Ferdigheter:
<br></br><br></br>
Mestring av dagligdagse utfordringer på norsk.
Jobbsøknad, intervjuteknikker og forretningskommunikasjon.
Personlig Utvikling:
<br></br><br></br>
Selvrefleksjon og målsetting for personlig vekst.
Kommunikasjon og konflikthåndtering på norsk.
Undervisningsmetoder:
Dette kurset kombinerer tradisjonelle undervisningsmetoder med moderne tilnærminger. Det inkluderer:
<br></br><br></br>
Interaktive norsktimer med erfarne instruktører.
Kulturelle utflukter og arrangementer.
Praktiske øvelser for å styrke språkferdigheter.
Varighet og Tidsplan:
Kurset vil pågå over 2 uker. Undervisningen vil være daggelig med hver økt varer 3 timer.
<br></br><br></br>
Forutsetninger:
Ingen spesifikke forutsetninger er påkrevd. Dette kurset er tilpasset alle nivåer, fra nybegynnere til de med tidligere norskkunnskaper.
<br></br><br></br>
Gjennom "Livsferdigheter 2.0" vil du ikke bare mestre det norske språket, men også bli en del av et fellesskap som dyrker kulturell forståelse og personlig vekst. Vi ser frem til å ledsage deg på denne spennende reisen!</p>
        
<button id="myButton" onClick={(e) => {
                    setKurs("du kan ikke melde deg av")
                }}>{Kurs}</button>
        
        <button class="button" onClick={() => navigate(-1)}>Tilbake til hovedmeny</button>
        </div>
        </div>
    )
}