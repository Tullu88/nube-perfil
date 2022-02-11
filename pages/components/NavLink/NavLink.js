import Link from 'next/link';


const NavLink = ({href, text, target}) => {
    return (
        <div>
            <Link href={href}>
                <a target={target}>{text}</a>
            </Link>
        </div>
    )
}

export default NavLink;