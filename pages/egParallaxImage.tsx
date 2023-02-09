import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/egParallax.module.css";
import StaticallyImportedImage from "../public/img/pexels-pixabay-45911.jpg";

export default function Parallaxer() {
	const [accelerator, setAccelerator] = useState(0.5);
	const [imgOffset, setImgOffset] = useState(0);

	const handleScroll = () => setImgOffset(window.pageYOffset);
	useEffect(() => {
		// You may want to throttle this. Might not need to though.
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// You can add the style directly. I just have the parallax as a client config so it's easy to have conditions here to include or omit it.
	const attrs = {
		style: { transform: `translateY(${imgOffset * accelerator}px)` },
	};

	return (
		<main>
			<div className={styles["image-wrap"]} {...attrs}>
				<Image
					src={StaticallyImportedImage}
					className={styles["image-component"]}
					fill
					alt="Peacock with tail fanned out."
					/>
			</div>
			<div className={styles["text-box"]}>
				<h1>Parallax Effect using next/image</h1>
				<div>
					<p>
						The principle here is to add the parallax effect on a container div.
					</p>
					<p>
						Currently set to {accelerator > 0 ? "Slower" : "Faster"} :<br />
						Accelerator: {accelerator}<br />
						Scrolled: {imgOffset}<br />
						<a href="#" style={{ marginRight: "2rem" }} onClick={(e) => { e.preventDefault(); setAccelerator(-0.3); }}> Go Faster </a>
						<a href="#" 								onClick={(e) => { e.preventDefault(); setAccelerator(0.5); }} > Go Slower </a>
					</p>
				</div>
			</div>
			<div className={styles["massive"]}>
				<p>Srollin’,</p>
				<p>scrollin’,</p>
				<p>scrollin’...</p>
				<p>:)</p>
			</div>
		</main>
	);
}
