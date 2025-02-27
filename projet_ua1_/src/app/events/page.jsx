import styles from "./events.module.css";
import Card from "@/components/card/Card"; // Import du composant Card
import eventData from "@/data/eventData.json"; // Import des données

const pageEvents = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Calendrier des cours</h1>
			<div className={styles.description}>
			</div>
			<div className={styles.cardContainer}>
				{eventData.map((event) => (
					<Card
						key={event.id} // Clé unique pour React
						id={event.id}
						date={event.date}
						title={event.title}
						location={event.location}
						imageUrl={event.imageUrl}
						instructor={event.instructor}
					/>
				))}
			</div>
		</div>
	);
};

export default pageEvents;
