import styles from "./Member.module.css";



const Member = ({ name, description, imageUrl }) => {
	

	return (
		<div className={styles.card} style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
			<div className={styles.overlay}>
				<h3 className={styles.name}>{name}</h3>
				<p className={styles.description}>{description}</p>
				<button className={styles.button}>voir plus</button>
			</div>
		</div>
	);
};

export default Member;
