import NavLink from '../NavLink/NavLink'

const Navigation = ({text}) => {
    return (
        <div>
            <NavLink text={'Home'} href={'/home'} />
            <NavLink text={'Create Profile'} href={'/profile/create'}/>
            <NavLink text={'View Profiles'} href={'/profile/view'}/>
        </div>
    )
}

export default Navigation;