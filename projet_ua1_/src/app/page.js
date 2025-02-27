import Member from "@/components/member/Member";
import "@/app/globals.css"; // Import global styles
const martialArts = [
	{
		name: "Brazilian Jiu-Jitsu",
		description: "Un art martial qui se concentre sur la combat au sol et les soumissions.",
		course: "Débutant à Avancé",
		imageUrl: "/events/bjj.jpeg",
	},
	{
		name: "Muay Thai",
		description: "un sport de combat de Thailande qui utilise des frappes de stand-up avec divers techniques de clinch.",
		course: "Débutant à Avancé",
		imageUrl: "/events/muay_thai.jpg",
	},
	{
		name: "Karate",
		description: " un art martial developpé au Royaume de Ryukyu, connu pour ses techniques de frappe.",
		course: "Débutant à Avancé",
		imageUrl: "/events/karate.jpg",
	},
	{
		name: "Taekwondo",
		description: "un art martial coreen qui se concentre sur les frappes de hauteur de tête, le saut et les rotations.",
		course: "Débutant à Avancé",
		imageUrl: "/events/tkd.jpg",
	},
];

const instructors = [
	{
		name: "Rosni Durand",
		description: " Expert en Jiu-Jitsu Brazilien avec 10 ans d'expérience.",
	},
	{
		name: "Jeufo Tsamo",
		description: " Champion de Muay Thai et entraineur expérimenté.",
	},
	{
		name: "jayson lefebvre",
		description: "ceinture noire de karate et instructeur expérimenté.",
	},
	{
		name: "Emily Davis ",
		description: " maitre de taekwondo avec nombreuses médailles.",
	},
];



export default function Home() {
	return (
		<div>
			<h1 className="page-title">Devoile ton vrai potentiel</h1>
			<p className="page-subtitle">avec les arts martiaux</p>
			<h2 className="section-title">Les Arts Martiaux que nous pratiquons</h2>
			<div className="martial-arts-container">
				{martialArts.map((art, index) => (
					<Member key={index} {...art} />
				))}
			</div>

			<h2 className="section-title">Nos Instructeurs</h2>
			<div className="members-container">
				{instructors.map((instructor, index) => (
					<Member key={index} {...instructor} />
				))}
			</div>
		</div>
	);
}
