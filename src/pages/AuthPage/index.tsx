import styles from './AuthPage.module.scss'
// import LogoIcon from "../../assets/svg/ToDoDo.svg"
import { ReactComponent as LogoIcon } from "../../assets/svg/ToDoDo.svg";

interface IAuthPage {

}

export default function AuthPage({}: IAuthPage) {
    return (
        <div className={styles.authPage}>
            Авторизация
            <LogoIcon/>
        </div>
    );
};

