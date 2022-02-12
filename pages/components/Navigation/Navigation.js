import NavLink from '../NavLink/NavLink'
import Styles from '../../../styles/Navigation.module.css'

const Navigation = () => {
    // This is the NavBar at the top of all pages to practically navigate the site
    return (
        <div className={Styles.navBar}>
            <NavLink text={'Home'} href={'/home'} />
            <NavLink text={'Create Profile'} href={'/profile/create'}/>
            <NavLink text={'View Profiles'} href={'/profile/view'}/>
        </div>
    )
}

export default Navigation;