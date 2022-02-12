import Navigation from "./components/Navigation/Navigation";
import Styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <div>
            <Navigation />
            <h1 className={Styles.welcomeMsg}>Welcome Home</h1>
        </div>
    )
}

export default Home;