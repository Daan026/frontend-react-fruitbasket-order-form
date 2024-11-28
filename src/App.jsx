import './App.css';
import { useState } from "react";
import Fruit from "./components/fruit.jsx";
import Input from "./components/input/Input.jsx";
import Select from "./components/select/Select.jsx";
import Textarea from "./components/textarea/Textarea.jsx";
import "./components/textarea/Textarea.css"
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
        { value: "man", label: "Man" },
        { value: "vrouw", label: "Vrouw" },
    ];

    const deliveryOptions = [
        { value: "day", label: "Overdag" },
        { value: "evening", label: "In de avond" },
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

        // Controleer of de voorwaarden zijn geaccepteerd
        if (!formState.conditions) {
            setErrorMessage("Je moet akkoord gaan met de voorwaarden voordat je kunt verzenden.");
            return;
        }

        // Reset foutmelding
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
            <h1>Fruitmand bezorgservice</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <h2>Appels</h2>
                    <Fruit
                        fruitcount={appels}
                        setfruitcount={setappels}
                    />
                </label>
                <label>
                    <h2>Kiwi</h2>
                    <Fruit
                        fruitcount={kiwi}
                        setfruitcount={setkiwi}
                    />
                </label>
                <label>
                    <h2>Aardbeien</h2>
                    <Fruit
                        fruitcount={aardbeien}
                        setfruitcount={setaardbeien}
                    />
                </label>
                <label>
                    <h2>Banaan</h2>
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
                    label="Geslacht:"
                    value={formState.gender}
                    onChange={handleChange}
                    options={genderOptions}
                    placeholder="Geslacht"
                />
                <Select
                    name="deliveryTime"
                    label="Bezorgmoment:"
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
                        type="checkbox"
                        name="conditions"
                        checked={formState.conditions}
                        onChange={handleChange}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>

                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                <button type="submit">Verzend</button>
            </form>
        </>
    );
}

export default App;
