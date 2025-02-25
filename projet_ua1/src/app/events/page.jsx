import styles from "./events.module.css";
import Card from "@/components/card/Card"; // Import du composant Card
import eventData from "@/data/eventData.json"; // Import des données

const pageEvents = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Calendrier des cours</h1>
			<div className={styles.description}>
				Consultez notre calendrier pour découvrir les prochains cours de différents arts martiaux. Trouvez les horaires, les lieux et les descriptions des cours pour planifier votre entraînement.
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
					/>
				))}
			</div>
		</div>
	);
};

export default pageEvents;
