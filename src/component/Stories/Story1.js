
import StoryItem from './StoryItem';

import styles from './Story1.module.css';
import story1 from '../../asset/story1.png';
import story2 from '../../asset/story2.png';
import story3 from '../../asset/story3.png';
import story4 from '../../asset/story4.png';
import story5 from '../../asset/story5.png';
import story6 from '../../asset/story6.png';



const DUMMY_ARRAY1 = [
	{
		image: story1,
		header: "joseph oke",
		location: "In ikeja",
		status: "customer",
		paragraph:
			"Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
	},
	{
		image: story2,
		header: "Adetola Fashina",
		location: "Ibadan",
		status: "customer",
		paragraph: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
        unt ut voluptate aute id deserunt nisi.
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        `,
	},
	{
		image: story3,
		header: "Emmanuel Fayemi",
		location: "In Akoka",
		status: "customer",
		paragraph:
			`Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`,
	},
];

const DUMMY_ARRAY2 = [
	{
		image: story4,
		header: "Chisom Obilor",
		location: "In Magodo",
		status: "vendor",
		paragraph: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.`,
	},
	{
		image: story5,
		header: "Adunoluwa Adeyemi",
		location: "Iwo Road",
		status: "vendor",
		paragraph: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
			unt ut voluptate aute id deserunt nisi.
			Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
			`,
	},
	{
		image: story6,
		header: "Chidi Okeke",
		location: "In Somolu",
		status: "vendor",
		paragraph: `Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`,
	},
];

const Story = () => {
    return (
			<div className={styles.story}>
				<div className={styles.story__box}>
					{DUMMY_ARRAY1.map(cur => <StoryItem image={cur.image} header={cur.header} location={cur.location} paragraph={cur.paragraph} status={cur.status} color={true}/>)}
				</div>
				<div className={styles.story__box}>
					{DUMMY_ARRAY2.map(cur => <StoryItem image={cur.image} header={cur.header} location={cur.location} paragraph={cur.paragraph} status={cur.status}/>)}
				</div>
			</div>
		);
}

export default Story
