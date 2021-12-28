import { Link } from 'react-router-dom';

import styles from './SharedPage.module.css';
import last from '../../asset/last.png';

const SharedPage = () => {
    return (
			<div className={styles.body}>
				<div className={styles.box}>
					<div className={styles.share_box}>
						<img src={last} className={styles.img} />
						<h2>Thank you for sharing your story!</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<Link className={styles.btn2} to="/">close</Link>
					</div>
				</div>
			</div>
		);
}

export default SharedPage
