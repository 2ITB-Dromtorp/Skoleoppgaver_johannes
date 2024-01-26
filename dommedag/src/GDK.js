import './Kurs.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function GDK() {

    const navigate = useNavigate()
    const [Kurs, setKurs] = useState("Meld meg på")
 function confirmSignUp() {
    
 }
    return (
        <div className='B'>
        <div className='L'>
        <h1>
            Du er logget in
        </h1>
        <p>Velkommen til vårt grunnleggende datakunnskapskurs designet spesielt for en moden målgruppe i alderen 40 til 60 år. Dette kurset er skapt med hensyn til dine behov og erfaringer, og det tar sikte på å gjøre deg komfortabel med grunnleggende datateknologi og digitale verktøy. <br></br><br></br>

Kursbeskrivelse:
Målgruppe:
Dette kurset er utviklet for voksne i alderen 40 til 60 år som ønsker å bygge grunnleggende datatferdigheter for personlig og profesjonell bruk. <br></br>

Mål:<br></br><br></br>

Gi deltakerne en grundig forståelse av datamaskinens grunnleggende begreper.
Utvikle ferdigheter i bruk av vanlige dataverktøy og programvare.
Bygge tillit og trygghet i bruk av digitale ressurser og Internett.
Kursinnhold:<br></br><br></br>

Introduksjon til Datamaskiner:<br></br>

Grunnleggende om maskinvare og programvare.
Tastatur- og museferdigheter.
Grunnleggende feilsøking.
Operativsystemet:<br></br><br></br>

Utforske Windows eller MacOS-grensesnittet.
Filadministrasjon og organisering.
Tekstbehandling:<br></br><br></br>

Grunnleggende i Microsoft Word eller tilsvarende programvare.
Opprette, redigere og formatere dokumenter.
Regneark:<br></br><br></br>

Innføring i Microsoft Excel eller tilsvarende programvare.
Grunnleggende regnearkfunksjoner for budsjettering og organisering.
Internett og E-post:<br></br><br></br>

Navigere på nettet trygt og effektivt.
Opprette og administrere e-postkontoer.
Sikkerhet og personvern:<br></br><br></br>

Grunnleggende om datasikkerhet og hvordan du beskytter deg online.
Bevissthet om digitale trusler og hvordan du unngår dem.
Kommunikasjon og Sosiale Medier:<br></br><br></br>

Innføring i populære sosiale medieplattformer.
Sikker bruk av sosiale medier for personlig og profesjonell kommunikasjon.
Undervisningsmetoder:
Dette kurset tilbyr en balanse mellom teori og praksis. Det vil inneholde:<br></br><br></br>

Interaktive forelesninger.
Praktiske øvelser for å styrke ferdighetene.
Mulighet for spørsmål og diskusjon.
Varighet og Tidsplan:
Kurset vil gå over en periode på 1 uke. Klasser vil bli holdt en gang, og hver økt vil være 2 timmer lang.<br></br><br></br>

Forutsetninger:
Ingen spesifikke forutsetninger kreves. Dette kurset er åpent for alle med en grunnleggende forståelse av hvordan man bruker en datamaskin.<br></br><br></br>

Vi ser frem til å hjelpe deg med å utforske den digitale verdenen og bygge selvtillit i din bruk av datateknologi!





</p>

<button id="myButton" onClick={(e) => {
                    setKurs("du kan ikke melde deg av")
                }}>{Kurs}</button>

        <button class="button" onClick={() => navigate(-1)}>Tilbake til hovedmeny</button>
        </div>
        </div>
    )
}