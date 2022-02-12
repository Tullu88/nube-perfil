import Link from 'next/link';
import Styles from '../../../styles/Navigation.module.css'

const NavLink = ({href, text, target}) => {
    // Here are all the links within the NavBar where from all the info for the page 
    //requested are stored
    return (
        <div className={Styles.link}>
            <Link href={href}>
                <a target={target}>{text}</a>
            </Link>
        </div>
    )
}

export default NavLink;