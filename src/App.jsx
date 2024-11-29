import './App.css';
import {useState} from "react";
import Fruit from "./components/fruit/Fruit.jsx";
import Input from "./components/input/Input.jsx";
import Select from "./components/select/Select.jsx";
import Textarea from "./components/textarea/Textarea.jsx";
import "./components/textarea/Textarea.css";
import storeLogo from './assets/screenshot-logo.png';
import './App.css';
import strawberry from './assets/aardbei.jpg';
import bananas from './assets/banaan.jpg';
import kiwis from './assets/kiwi.jpg';
import appel from './assets/Appel.jpg';

console.log(storeLogo)

function App() {
    const [bananen, setbananen] = useState(0);
    const [aardbeien, setaardbeien] = useState(0);
    const [kiwi, setkiwi] = useState(0);
    const [appels, setappels] = useState(0);

    const [formState, setFormState] = useState({
        Voornaam: '',
        Achternaam: '',
        Leeftijd: '',
        Postcode: '',
        gender: '',
        deliveryTime: '',
        textarea: '',
        conditions: false, // Akkoord checkbox toegevoegd
    });

    const [errorMessage, setErrorMessage] = useState(''); // Voor foutmeldingen

    const genderOptions = [
        {value: "man", label: "Man"},
        {value: "vrouw", label: "Vrouw"},
    ];

    const deliveryOptions = [
        {value: "day", label: "Overdag"},
        {value: "evening", label: "In de avond"},
    ];

    function handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!formState.conditions) {
            setErrorMessage("Je moet akkoord gaan met de voorwaarden voordat je kunt verzenden.");
            return;
        }


        setErrorMessage('');

        console.log("Formuliergegevens:", formState);
        console.log("Bestelling:", {
            Appels: appels,
            Kiwi: kiwi,
            Aardbeien: aardbeien,
            Bananen: bananen,
        });
    };

    function resetfruit() {
        setbananen(0);
        setappels(0);
        setaardbeien(0);
        setkiwi(0);
    }

    return (
        <>
            <img className='hoofdplaatje' src={storeLogo} alt="Winkel logo"/>


            <h1>Fruitmand bezorgservice</h1>
            <form onSubmit={handleSubmit}>

                <label className='fruitstyling'>
                    <h2><img src={appel} alt='Appel'/>Appels</h2>
                    <Fruit
                        fruitcount={appels}
                        setfruitcount={setappels}
                    />
                </label>
                <label className='fruitstyling'>
                    <h2><img src={kiwis} alt='Kiwi'/>Kiwi</h2>
                    <Fruit
                        fruitcount={kiwi}
                        setfruitcount={setkiwi}
                    />
                </label>
                <label className='fruitstyling'>
                    <h2><img src={strawberry} alt='Aardbei'/>Aardbeien</h2>
                    <Fruit
                        fruitcount={aardbeien}
                        setfruitcount={setaardbeien}
                    />
                </label>
                <label className='fruitstyling'>
                    <h2><img src={bananas} alt='Banaan'/>Banaan</h2>
                    <Fruit
                        fruitcount={bananen}
                        setfruitcount={setbananen}
                    />
                </label>
                <button type="button" onClick={resetfruit}>Reset</button>

                <Input
                    name="Voornaam"
                    type="text"
                    value={formState.Voornaam}
                    onChange={handleChange}
                />
                <Input
                    name="Achternaam"
                    type="text"
                    value={formState.Achternaam}
                    onChange={handleChange}
                />
                <Input
                    name="Leeftijd"
                    type="text"
                    value={formState.Leeftijd}
                    onChange={handleChange}
                />
                <Input
                    name="Postcode"
                    type="text"
                    value={formState.Postcode}
                    onChange={handleChange}
                />
                <Select
                    name="gender"

                    value={formState.gender}
                    onChange={handleChange}
                    options={genderOptions}
                    placeholder="Geslacht"
                />
                <Select
                    name="deliveryTime"

                    value={formState.deliveryTime}
                    onChange={handleChange}
                    options={deliveryOptions}
                    placeholder="Selecteer een bezorgmoment"
                />
                <Textarea
                    name="textarea"
                    value={formState.textarea}
                    onChange={handleChange}
                    placeholder="Eventuele opmerkingen"
                />

                <label>
                    <input
                        className="voorwaarden"
                        type="checkbox"
                        name="conditions"
                        checked={formState.conditions}
                        onChange={handleChange}

                    />
                    Ik ga akkoord met de voorwaarden

                </label>

                {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}

                <button type="submit">Verzend</button>
            </form>
        </>
    );
}

export default App;
