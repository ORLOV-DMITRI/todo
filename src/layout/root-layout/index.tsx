import styles from './styles.module.scss'
import {ReactNode} from "react";

interface IMainLayout {
    children: ReactNode;
}

export default function RootLayout({children}: IMainLayout) {
    return (
        <div className={styles.mainLayout}> 
            {children}
        </div>
    );
};

