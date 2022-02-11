import CountrySelector from "../components/countrySelector"
import {useState, useEffect} from 'react';
import Navigation from "../components/Navigation/Navigation";
import Input from "../components/inputComponent"

const New = (props) => {
    const [ email, setEmail ] = useState();
    const [ name, setName ] = useState();
    const [ lastName, setLastName ] = useState();
    const [ country, setCountry ] = useState();
    const [ description, setDescription ] = useState();
    const [ alreadyExists, setAlreadyExists ] = useState(false);

    //const [ profileList, setProfileList ] = useState([]);

    const [ id, setId ] = useState();
    
    const profile = {};
  
    const HandleSubmit = (e) => {
        e.preventDefault();

        var savedName = JSON.parse(localStorage.getItem(email));

        if (localStorage.getItem(email)){
            console.log('email already exists');
            //console.log(JSON.parse(localStorage.getItem(email)).name);
            setAlreadyExists(true);
            return;
        } 
        setAlreadyExists(false);

        const oldData = localStorage.getItem('profile');

        if (localStorage.length === undefined || localStorage.length === null ){
            setId(0);
        } 

        profile = { email, name, lastName, country, description };

        const data = localStorage.setItem(email, JSON.stringify(profile));
        
        setId(localStorage.length + 1);

        location.href = 'http://localhost:3000/profile/view';
     }

    return (
        <div>
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
