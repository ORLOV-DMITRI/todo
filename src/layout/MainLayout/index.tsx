import styles from './MainLayout.module.scss'
import {ReactNode} from "react";

interface IMainLayout {
    children: ReactNode;
}

export default function MainLayout({children}: IMainLayout) {
    return (
        <div className={styles.mainLayout}> 
            {children}
        </div>
    );
};

