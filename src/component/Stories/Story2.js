
import styles from './Story2.module.css';
import StoryItem from './StoryItem';
import story7 from '../../asset/story7.png';
import story8 from '../../asset/story8.png';
import story9 from '../../asset/story9.png';
import story10 from '../../asset/story10.png';
import story11 from '../../asset/story11.png';
import story12 from '../../asset/story12.png';



const DUMMY_ARRAY1 = [
    {
		image: story7,
		header: "Temi Obadofin",
		status: "vendor",
		paragraph:
			"Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    }, 
    {
		image: story8,
		header: "Promise Ejiofor",
		status: "vendor",
		paragraph:
			`Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
            unt ut voluptate aute id deserunt nisi.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.            
            `,
    },
    {
		image: story9,
		header: "Feyisola Arinola",
		status: "vendor",
		paragraph:
			`Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            `,
    }
];

const DUMMY_ARRAY2 = [
    {
		image: story10,
		header: "Karen Ibeh",
		status: "vendor",
		paragraph:
			"Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    },
    {
		image: story11,
		header: "Oluchi Uzo",
		status: "vendor",
		paragraph:
			`Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
            unt ut voluptate aute id deserunt nisi.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.            
            `,
    }, 
    {
		image: story12,
		header: "Amos Okafor",
		status: "vendor",
		paragraph:
			`Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`,
    }
];

const Story2 = () => {
    return (
			<div className={styles.story}>
				<div className={styles.story__box}>
					{DUMMY_ARRAY1.map((cur) => (
						<StoryItem
							image={cur.image}
							header={cur.header}
							paragraph={cur.paragraph}
							status={cur.status}
							color={false}
						/>
					))}
				</div>
				<div className={styles.story__box}>
					{DUMMY_ARRAY2.map((cur) => (
						<StoryItem
							image={cur.image}
							header={cur.header}
							paragraph={cur.paragraph}
							status={cur.status}
						/>
					))}
				</div>
			</div>
		);
}

export default Story2
