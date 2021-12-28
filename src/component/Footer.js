
import styles from './Footer.module.css';
import subscribe from '../asset/subscribe.png';
import icon1 from '../asset/icon1.png';
import icon2 from '../asset/icon2.png';
import icon3 from '../asset/icon3.png';
import icon4 from '../asset/icon4.png';


const Footer = () => {
    return (
			<footer className={styles.footer}>
				<div className={styles.subscribe}>
					<div className={styles.footer_hero}>
						<img
							src={subscribe}
							alt="footer image"
							className={styles.footer_img}
						/>
					</div>
					<div className={styles.footer_heading}>
						<div className={styles.footer_div}>
							Be a member
							<br /> of our community<span>🎉</span>
						</div>
						<p>
							We’d make sure you’re always first to know what’s happening on
							Vasiti—thus, the world.
						</p>
						<div className={styles.input_box}>
							<input
								type="text"
								className={styles.footer_input}
								placeholder="enter your email address"
							/>
							<button className={styles.footer_btn}>SUBSCRIBE</button>
						</div>
					</div>
				</div>
				<div className={styles.footer_about}>
					<div className={styles.footer_about_div}>
						<div className={styles.balance}>
							<div className={styles.balance__div}>
								<h6 className={styles.footer_h6}>Company</h6>
								<ul className={styles.footer_links}>
									<li className={styles.footer_link}>About us</li>
									<li className={styles.footer_link}>Term of use</li>
									<li className={styles.footer_link}>Privacy policy</li>
									<li className={styles.footer_link}>Press & media</li>
								</ul>
							</div>
							<div className={styles.balance__div}>
								<h6 className={styles.footer_h6}>Product</h6>
								<ul className={styles.footer_links}>
									<li className={styles.footer_link}>Marketplace</li>
									<li className={styles.footer_link}>Magazine</li>
									<li className={styles.footer_link}>Seller</li>
									<li className={styles.footer_link}>Wholesale</li>
									<li className={styles.footer_link}>Services</li>
								</ul>
							</div>
						</div>
					</div>
					<div className={styles.footer_about_div}>
						<div className={styles.balance}>
							<div className={styles.balance__div}>
								<h6 className={styles.footer_h6}>Careers</h6>
								<ul className={styles.footer_links}>
									<li className={styles.footer_link}>Become a Campus Rep</li>
									<li className={styles.footer_link}>
										Become a Vasiti Influencer
									</li>
									<li className={styles.footer_link}>Become a Campus writer</li>
									<li className={styles.footer_link}>Become an Affiliate</li>
								</ul>
							</div>
							<div className={styles.balance__div}>
								<h6 className={styles.footer_h6}>Get in touch</h6>
								<ul className={styles.footer_links}>
									<li className={styles.footer_link}>Contact us</li>
									<li className={styles.footer_link}>Partner with us</li>
									<li className={styles.footer_link}>Advertise with us</li>
									<li className={styles.footer_link}>Help/FAQs</li>
								</ul>
							</div>
						</div>
					</div>
					<div className={styles.footer_about_div}>
						<h6 className={styles.footer_h6}>Join our community</h6>
						<div className={styles.footer_icon_box}>
							<img src={icon1} className={styles.footer_icon}></img>
							<img src={icon2} className={styles.footer_icon}></img>
							<img src={icon3} className={styles.footer_icon}></img>
							<img src={icon4} className={styles.footer_icon}></img>
						</div>
						<p className={styles.footer_link}>Email Newsletter</p>
					</div>
				</div>
			</footer>
		);
}

export default Footer
