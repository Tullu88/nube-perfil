import  { useEffect, useState } from 'react'
import AvatarGenerator from '../components/Avatar/avatarGenerator';
import Styles from '../../styles/Profiles.module.css'
import Navigation from '../components/Navigation/Navigation';

const View = () => {
    const [ profiles, setProfiles ] = useState();
    var array = [];
    var data;

    if (typeof window !== 'undefined') {
       

        //const profiles = localStorage;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            
            array.push(JSON.parse(value))
            console.log(JSON.parse(value))
        }

        //data = localStorage.getItem(profileId);
        
    }

    const handleClick = (e) => {
        if (e.target.id) {
            location.href = `http://localhost:3000/${e.target.id}/ProfileDetails`;
            console.log('error here')
        } else {
            console.log('error here')
            handleClick;
        }
       
        //console.log(localStorage.getItem(e.target.id))
        //console.log(e.target.id);
        //console.log('Handling click');
    }

   


    return (
        <div>
            <Navigation onChange={(e) => setCountry(e)} isRequired={'required'}/>
            <h1>All Profiles</h1>
            {array.map(e => 
            <div className={Styles.profile} onClick={handleClick} id={e.email} key={e.email}>
                <AvatarGenerator seed={e.email} key={e.email}/>
                <div className={Styles.name}>{e.name}</div>
                <div className={Styles.tags}>
                    {e.skills && <strong>Skills:</strong>} 
                    <div className={Styles.tagsInner}>{e.skills}</div>
                    {e.sector && <strong>Sectors:</strong>} 
                    <div className={Styles.tagsInner}>{e.sector}</div>
                    </div>
            </div>)}
            {/* <p>{profiles.email}</p> */}
        </div>
    )
}

export default View;