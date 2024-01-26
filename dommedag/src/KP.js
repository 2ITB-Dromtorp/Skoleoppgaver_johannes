import './Kurs.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function KP() {

    const navigate = useNavigate();
    const [Kurs, setKurs] = useState("Meld meg på")
    function confirmSignUp() {
       
    }
    return (
        <div className='B'>
        <div className='L'>
        <h1>
           Kroppsøving
        </h1>

    <p>Velkommen til vårt grundige Kropsøvningskurs, skreddersydd spesielt for voksne i alderen 40 til 60 år. Dette kurset fokuserer på å fremme fysisk aktivitet, økt bevissthet om kroppen og styrket helse gjennom varierte kroppsøvelser og teknikker tilpasset den modenheten og livsstilen til vår målgruppe.<br></br><br></br>

Kursbeskrivelse:
Målgruppe:
Dette kurset er utviklet for voksne i alderen 40 til 60 år som ønsker å investere i sin fysiske helse gjennom varierte kroppsøvelser og bevegelsespraksis.
<br></br><br></br>
Mål:
<br></br><br></br>
Øke bevisstheten om kroppens bevegelighet og styrke.
Forbedre fleksibilitet og balanse.
Fremme generell helse og velvære gjennom fysisk aktivitet.
Kursinnhold:
<br></br><br></br>
Funksjonell Trening:
<br></br><br></br>
Tilpasning av trening til dagliglivets bevegelser.
Styrke og fleksibilitetsøvelser for hele kroppen.
Yoga og Meditasjon:
<br></br><br></br>
Innføring i grunnleggende yogastillinger og pusteøvelser.
Stressmestring og avspenning gjennom meditasjon.
Kardiovaskulær Trening:
<br></br><br></br>
Varierte kardiotreningsteknikker for økt hjerte- og lungehelse.
Tilpasning av trening til individuelle behov og nivåer.
Balansetrening:
<br></br><br></br>
Øvelser for å forbedre balanse og koordinasjon.
Forebygging av fall og skader gjennom styrket balanse.
Ernæring og Fysisk Helse:
<br></br><br></br>
Forståelse av hvordan kosthold påvirker fysisk helse.
Individuell tilpasning av ernæring for økt energi og velvære.
Undervisningsmetoder:
Dette kurset legger vekt på en helhetlig tilnærming til helse. Det vil inkludere:
<br></br><br></br>
Praktiske treningsøkter tilpasset deltakernes nivå.
Veiledning i riktig teknikk og utførelse av øvelser.
Teoretiske forelesninger om kroppens anatomi, helsefordeler og ernæring.
Varighet og Tidsplan:
Kurset vil gå over 1 uke. Treningsøktene vil bli holdt daggelig, og hver økt vil vare 2 timmer.
<br></br><br></br>
Forutsetninger:
Ingen spesifikke fysiske forutsetninger er nødvendige. Dette kurset er tilpasset alle nivåer av fysisk form.
<br></br><br></br>
Vi ser frem til å guide deg gjennom en reise med fysisk bevegelse, bevissthet og helseforbedring i dette Kropsøvningskurset, skapt spesielt for voksne i den livlige alderen mellom 40 og 60 år!</p>
       
<button id="myButton" onClick={(e) => {
                    setKurs("du kan ikke melde deg av")
                }}>{Kurs}</button>

        <button class="button" onClick={() => navigate(-1)}>Tilbake til hovedmeny</button>
        </div>
        </div>
    )
}