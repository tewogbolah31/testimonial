import { useRef } from 'react';
import { Link } from 'react-router-dom';

import styles from './Share.module.css';
import X from '../../asset/x.png';
import Vector from '../../asset/Vector.png';

const Share = (props) => {
	const inputRef1 = useRef();
	const inputRef2 = useRef();

	const submitHandler = () => {

		const input1 = inputRef1.current.value;	
		const input2 = inputRef2.current.value;

		if(input1.length === 0 && input2.length === 0){
			return;
		}
	}


    return (
			<div className={styles.body}>
				<div className={props.right ? styles.share_right : styles.share_left}>
					<form className={styles.share_box}>
						<h1>share your amazing story!</h1>
						<p>upload your picture</p>
						<div className={styles.share_div}>
							<input
								id="input"
								type="file"
								title="choose a file"
								className={styles.file_input}
							/>
							<label htmlFor="input">
								<img src={Vector} className={styles.img} />
							</label>
						</div>
						<div className={styles.label}>
							<label className={styles.label_item}>First Name</label>
							<label className={styles.label_item}>Last Name</label>
						</div>
						<div className={styles.input_box}>
							<input type="text" className={styles.input_right} ref={inputRef1}/>
							<input type="text" className={styles.input_left} ref={inputRef2}/>
						</div>
						<label className={styles.text_label}>Share ur story</label>
						<textarea className={styles.text}></textarea>

						<div className={styles.radio_box}>
							<p>What did you interact with Vasiti as?</p>
							<div className={styles.radio}>
								<div className={styles.radio_div}>
									<input id="customer" type="radio" name="size" className={styles.radio_input}/>
									<label htmlFor="customer" className={styles.radio_label}> <span className={styles.radio_span}></span>customer</label>
								</div>
                                <div className={styles.radio_div}>
									<input type="radio" id="vendor" name="size" className={styles.radio_input}/>
									<label htmlFor="vendor" className={styles.radio_label}> <span className={styles.radio_span}></span>vendor</label>
								</div>
							</div>
						</div>
                        {props.right && <div className={styles.text2_box}>
                            <p>City or Higher Institution (for Students)</p>
                            <input type="text" className={styles.text2}/>
                        </div>}
                        <Link onClick={submitHandler} to="/sharePage" className={styles.btn}>Share your story!</Link>
					</form>
				</div>
			</div>
		);
}

export default Share
