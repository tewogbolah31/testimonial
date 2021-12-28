
import styles from './Navigation.module.css'
import Logo from '../asset/Vasiti-Logo-black 1.png'

const Navigation = () => {
    return (
			<div>
				<div className={styles.nav__box}>
					<div>
						<img src={Logo} className={styles.nav__logo} />
					</div>
					<ul className={styles.nav__list}>
						<li className={styles.nav__link}>About us</li>
						<li className={styles.nav__link}>Stories</li>
						<li className={styles.nav__link}>Contact</li>
						<li className={styles.nav__link}>Log in</li>
						<button className={styles.nav__btn}>Sign up</button>
					</ul>
				</div>
				<div className={styles.nav__content}>
					<ul className={styles.nav__content__box}>
						<li className={styles.nav__content__list}>Market place</li>
						<li className={styles.nav__content__list}>wholesale center</li>
						<li className={styles.nav__content__list}>seller center</li>
						<li className={styles.nav__content__list}>services</li>
						<li className={styles.nav__content__list}>INTERNSHIPS</li>
						<li className={styles.nav__content__list}>Events</li>
					</ul>
				</div>
			</div>
		);
}

export default Navigation;
