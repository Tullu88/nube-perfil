import { createAvatar } from '@dicebear/avatars';
//import * as style from '@dicebear/avatars-identicon-sprites';
import Styles from '../../../styles/Avatar.module.css'

const AvatarGenerator = (props) => {
    // This uses the dice bear npm package to generate avatars for each user
    // The seed being passed through the props to be used here is the email
    //which is unique to each user

    return (
        <div>
           <img className={Styles.avatar} src={`https://avatars.dicebear.com/api/identicon/${props.seed}.svg`}/>
        </div>
    )
}

export default AvatarGenerator;