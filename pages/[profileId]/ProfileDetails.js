import styles from '../../styles/ProfileDetails.module.css'
import {useRouter} from "next/router";
import React, { useEffect, useState } from 'react';
import AvatarGenerator from '../components/Avatar/avatarGenerator';
import Navigation from '../components/Navigation/Navigation';
import Input from '../components/inputComponent';
import CountrySelector from '../components/countrySelector';
var data;
var profile = {};

export default function ProfileDetails() {
    const [ email, setEmail ] = useState();
    const [ name, setName ] = useState();
    const [ lastName, setLastName ] = useState();
    const [ country, setCountry ] = useState();
    const [ description, setDescription ] = useState();
    const [ experience, setExperience ] = useState(0);
    const [ sector, setSector ] = useState();
    const [ skills, setSkills ] = useState();
    const [ currentName, setCurrentName ] = useState();
    
useEffect(() => {
    setTimeout(() => {
        setName(JSON.parse(data).name);
        setLastName(JSON.parse(data).lastName);
        setEmail(JSON.parse(data).email);
        setCountry(JSON.parse(data).country)
        setDescription(JSON.parse(data).description);
        setExperience(JSON.parse(data).experience);
        setSector(JSON.parse(data).sector);
        setSkills(JSON.parse(data).skills);
        
    }, 500)
}, [])
     

    const {
        query: {profileId}
    } = useRouter();

    // Conditional to make sure the page/ component has finished loading first
    if (typeof window !== 'undefined') {
            data = localStorage.getItem(profileId);
            
        }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (typeof window !== 'undefined') {
            profile = { email, name, lastName, country, description, experience, sector, skills };

            
            const data = localStorage.setItem(email, JSON.stringify(profile));
            console.log(email);
        } else {
            handleSubmit;
        }
    }
    

    return (
        <div>
            <Navigation />
            <h2>{name}'s profile</h2>
                {data && <div className={ProfileDetails.infoTabs}>
                    <AvatarGenerator seed={profileId}/>
                    <form onSubmit={handleSubmit}>
                        <Input 
                            htmlFor="name"
                            label="Name "
                            type="text" 
                            id="name" 
                            name="name" 
                            placeHolder={JSON.parse(data).name}
                            value={currentName}
                            onChange={(e) => setName(e)}/>

                        <Input 
                            htmlFor="lastname"
                            label="Last Name "
                            type="text" 
                            id="lastname" 
                            name="lastname"
                            placeHolder={JSON.parse(data).lastName}
                            value={lastName}
                            onChange={(e) => setLastName(e)}/>

                        <Input 
                            htmlFor="email"
                            label="Email "
                            type="email" 
                            id="email" 
                            name="email" 
                            placeHolder={JSON.parse(data).email}
                            value={email}
                            onChange={(e) => setEmail(e)}/>  

                        <CountrySelector country={country}/>  

                        <label htmlFor="description">Description </label>
                        <textarea 
                        value={description}
                        placeholder={JSON.parse(data).description}
                        onChange={(e) => setDescription(e.target.value)}/>
                       
                        <Input 
                            htmlFor="experience"
                            label="Years of Experience "
                            type="number" 
                            id="experience" 
                            name="experience" 
                            placeHolder={JSON.parse(data).experience ? JSON.parse(data).experience : 0}
                            value={experience}
                            onChange={(e) => setExperience(e)}/>   
                        
                        <Input 
                            htmlFor="sector"
                            label="Sector "
                            type="text" 
                            id="sector" 
                            name="sector" 
                            placeHolder={JSON.parse(data).sector ? JSON.parse(data).sector : 'Separate with space'}
                            value={sector}
                            onChange={(e) => setSector(e)}
                            pattern="/^[\w\-\s]+$/"/> 

                        <Input 
                            htmlFor="skills"
                            label="Skills "
                            type="text" 
                            id="skills" 
                            name="skills" 
                            placeHolder={JSON.parse(data).skills ? JSON.parse(data).skills : 'React, Angular'}
                            value={skills}
                            onChange={(e) => setSkills(e)}
                            pattern="[A-Za-z0-9]"/>     
                    
                        <input type="Submit" value="Update" />
                    </form>
                    
                </div>}
        </div>
    )
}