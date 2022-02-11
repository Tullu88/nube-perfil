import { createAvatar } from '@dicebear/avatars';
//import * as style from '@dicebear/avatars-identicon-sprites';
import Styles from '../../../styles/Avatar.module.css'

const AvatarGenerator = (props) => {
    //let svg = createAvatar();

    return (
        <div>
           <img className={Styles.avatar} src={`https://avatars.dicebear.com/api/identicon/${props.seed}.svg`}/>
        </div>
    )
}

export default AvatarGenerator;