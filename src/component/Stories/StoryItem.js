
import styles from './StoryItem.module.css';


const StoryItem = (props) => {
    return (
			<div className={styles.story__box}>
				<img src={props.image} alt='images' className={styles.story__img} />
				<h3>{props.header}</h3>
				<div className={styles.story__span}>
					<span className={styles.story__span1}>{props.location}</span>
					<span
						className={
							props.color
								? styles.story__span2__blue
								: styles.story__span2__green
						}
					>
						{props.status}
					</span>
				</div>
				<p>{props.paragraph}</p>
			</div>
		);
}

export default StoryItem;
