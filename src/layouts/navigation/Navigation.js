import styles from './Navigation.module.scss'
import {NavLink} from 'react-router-dom'
import Circle from "../circle/Circle";
import {useState} from 'react';
const Navigation = () => {
    const[isMenuActive, setIsMenuActive] = useState(false)
    const toggleMenu = () => {
        setIsMenuActive(prev => prev ? false : true)
        console.log(isMenuActive);
    }
    return(
        <div className={styles.navigationWrapper}>
            <nav className={styles.navigation}>
                <div className={isMenuActive ? `${styles.hamburgerMenu} ${styles.activeMenu}` : `${styles.hamburgerMenu}`} onClick={toggleMenu}>
                    <span />
                    <span />
                    <span />
                </div>
                <ul className={isMenuActive ? `${styles.listOfLinks} ${styles.activeListOfLink}` : `${styles.listOfLinks}`}>
                    <li className={styles.item}>
                        <NavLink to="/" className={({ isActive }) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)} onClick={() => setIsMenuActive(false)}>Hallux.Clinic</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/oferta" className={({ isActive }) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)} onClick={() => setIsMenuActive(false)}>Oferta</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="o-mnie" className={({ isActive }) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)} onClick={() => setIsMenuActive(false)}>O Mnie</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/cennik" className={({ isActive }) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)} onClick={() => setIsMenuActive(false)}>Cennik</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/kontakt" className={({ isActive }) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)} onClick={() => setIsMenuActive(false)}>Kontakt</NavLink>
                    </li>
                </ul>
            </nav>
            <Circle size="big" left="150px" top="-90px"/>
            <Circle size="small" right="15px" top="50px"/>
            <Circle size="verySmall" left="30%" top="25px"/>
        </div>
    )
}

export default Navigation;