
import styles from './Header.module.css';
import Navigation from './Navigation';
import image1 from '../asset/header.png';

const Header = () => {
    return (
			<>
				<Navigation />
				<div className={styles.header__box}>
					<div className={styles.headings}>
						<h1>
							Amazing <br /> Experiences from Our Wonderful Customers
						</h1>
						<p>
							Here is what customers and vendors are saying about us, you can
							share your stories with us too.
						</p>
					</div>
					<div className={styles.header__hero}>
						<img src={image1} alt="images" className={styles.header__img} />
					</div>
				</div>
			</>
		);
}

export default Header;
