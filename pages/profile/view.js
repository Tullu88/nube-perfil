import  { useEffect, useState } from 'react'
import AvatarGenerator from '../components/Avatar/avatarGenerator';
import Styles from '../../styles/Profiles.module.css'
import Navigation from '../components/Navigation/Navigation';

const View = () => {
    var profileInfo = []; // array that will hold profile information

    // Conditional to check that 'window' has loaded first, before calling 'localStorage'
    if (typeof window !== 'undefined') {
       
        // Loop that iterates trough 'localStorage' and saves the value of each element to a new array called 'profileInfo'
        // The array variable is used in the 'return' to output profile information for viewing
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            
            profileInfo.push(JSON.parse(value))
        }
        
    }

    // Function takes user to the page of the clicked profile (using router)
    // replaces [profileId] with the user's email which is saved as the element's id before accessing 'ProfileDetails' component
    // Need a recursive function here because it seems the data takes time to appear in 'localStorage'
    const handleClick = (e) => {
        if (e.target.id) {
            location.href = `http://localhost:3000/${e.target.id}/ProfileDetails`;
        } else {
            handleClick;
        }
    }

   


    return (
        <div className={Styles.viewWindow}>
            <Navigation onChange={(e) => setCountry(e)} isRequired={'required'}/>
            <h1>All Profiles</h1>
            {profileInfo.map(a => 
            <div className={Styles.profile} onClick={handleClick} id={a.email} key={a.email}>
                <AvatarGenerator seed={a.email} key={a.email}/>
                <div className={Styles.name}>{a.name}</div>
                <div className={Styles.tags}>
                    {a.skills && <strong>Skills:</strong>} 
                    <div className={Styles.tagsInner}>{a.skills?.split(' ').map(b => <div key={b} className={Styles.tagText}>{b}</div>)}</div>
                    {a.sector && <strong>Sectors:</strong>} 
                    <div className={Styles.tagsInner}>{a.sector?.split(' ').map(b => <div key={b} className={Styles.tagText}>{b}</div>)}</div>
                    </div>
            </div>)}
            {/* <p>{profiles.email}</p> */}
        </div>
    )
}

export default View;