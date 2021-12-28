import styles from './ExperienceItem.module.css';
import { Link } from 'react-router-dom';



const ExperienceItem = (props) => {
    return (
			<div
				className={props.right ? styles.content__right : styles.content__left}
			>
				<div
					className={
						props.right ? styles.header__box2__right : styles.header__box2__left
					}
				>
					<div
						className={
							props.right ? styles.header__hero2 : styles.header__hero3
						}
					>
						<img src={props.image} alt='images' className={styles.header__img2} />
					</div>
					<div className={props.right ? styles.headings2 : styles.headings3}>
						<h2>{props.header}</h2>
						<span>{props.status}</span>
						<p>{props.paragraph}</p>
						<Link
							className={props.right ? styles.a_right : styles.a_left}
							to={props.right ? "/share1" : "/share2"}
						>
							Share your own story!
						</Link>
					</div>
				</div>
			</div>
		);
}

export default ExperienceItem;
