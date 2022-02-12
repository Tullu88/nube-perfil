import CountrySelector from "../components/countrySelector"
import {useState, useEffect} from 'react';
import Navigation from "../components/Navigation/Navigation";
import Input from "../components/inputComponent"
import Styles from '../../styles/Home.module.css'

// This component is for the creation of new profiles
const New = () => {
    const [ email, setEmail ] = useState();
    const [ name, setName ] = useState();
    const [ lastName, setLastName ] = useState();
    const [ country, setCountry ] = useState();
    const [ description, setDescription ] = useState();
    const [ alreadyExists, setAlreadyExists ] = useState(false);
    
    const profile = {};
  
    const HandleSubmit = (e) => {
        e.preventDefault();

        // Before saving to storage, check if email already exists to avoid overlap
        if (localStorage.getItem(email)){
            // State that activates to notify if the email exists 
            setAlreadyExists(true);
            return;
        }

        setAlreadyExists(false);

        // Save all the state values acquired from the inputs and save them to 'profile' variable
        profile = { email, name, lastName, country, description };

        // Then use the 'profile' to save the new profile to 'localStorage'
        localStorage.setItem(email, JSON.stringify(profile));

        // Redirects the user to page displaying created profile(s)
        setTimeout(() => {
            location.href = 'http://localhost:3000/profile/view';
        }, 500)
        
     }

    return (
        <div className={Styles.createWindow}>
            <Navigation />
            <strong>Please enter your details</strong>
                <form onSubmit={HandleSubmit}>

                <Input 
                htmlFor="email"
                label="Email "
                type="email" 
                id="email" 
                name="email" 
                placeHolder="email" 
                value={email}
                onChange={(e) => setEmail(e)}
                isRequired={'required'}/>

                <br></br>

                <Input 
                htmlFor="name"
                label="Name "
                type="text" 
                id="name" 
                name="name" 
                placeHolder="Name" 
                value={name}
                onChange={(e) => setName(e)}
                isRequired={'required'}/>

                <Input 
                htmlFor="lastname"
                label="Last Name "
                type="text" 
                id="lastname" 
                name="lastname" 
                placeHolder="Last Name" 
                value={lastName}
                onChange={(e) => setLastName(e)}
                isRequired={'required'}/>

                <br></br>

                <label htmlFor="description">Description </label>
                <textarea 
                onChange={(e) => setDescription(e.target.value)}/>

                <br></br>

                <CountrySelector onChange={(e) => setCountry(e)} isRequired={'required'}/>

                <input type="Submit" value="Confirm" />
            </form>
            {alreadyExists && <p>A user with the same email already exists señor.</p>}
        </div>
    )
}

export default New;
