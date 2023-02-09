import { useState, useEffect, PropsWithChildren  } from "react";
import Image from "next/image";
import styles from "styles/egParallax.module.scss";
import StaticallyImportedImage from "public/img/pexels-pixabay-45911.jpg";

type OnlyChildProps = {
	children?: JSX.Element,
}




/*  add tp Parallaxer.main: className={styles['showRender']}
	and turn on React Dev Tool 'Highlight updates when components render.'
	to show rerender is on the wrapper, not the image
	*/
export default function Parallaxer() {
  return (
	<main>
		<ImgWrapper>
			<ImgItem />
		</ImgWrapper>
	</main>
  );
}

/*  You don't need this to be in it's own component. We left this like so in case you have a more complex need.
	We originally did this to make really clear, via the console.log, when each part was rendering while we experimented.
	*/
const ImgItem = () => {
	console.log("The child (image) is rendered!");
	return (
		<Image
			src={StaticallyImportedImage}
			className={styles["image-component"]}
			fill
			alt="Peacock with tail fanned out."
			/>
	);
};

/*  Isolating the re-rendering activity to hopefully speed things up a little.
 */
const ImgWrapper = ({ children }: OnlyChildProps) => {
	const [accelerator, setAccelerator] = useState(0.5);
	const [imgOffset, setImgOffset] = useState(0);
	const handleScroll = () => setImgOffset(window.pageYOffset);
	useEffect(() => {
		console.log("add listener"); // You may want to throttle this. Might not need to though.
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // You can add the style directly. I have the parallax as a client config so it's easy to have conditions here to include or omit it.

	const attrsFixed:any = {
		...(accelerator === 0 && {
			style: { position: "fixed", width: "100%", height: "100vh", top: "0" },
		}),
	};
	const attrsPush:any = {
		...(accelerator === 0 && {
		style: { marginTop: "100vh" }, // push the page content so it sits beow image now that image is removed from flow
		}),
	};
	const attrsFlow:any = {
		...(accelerator !== 0 && {
			style: { transform: `translateY(${imgOffset * accelerator}px)` },
		}),
	};
	return (
		<>
			<div className={styles["image-glued"]} {...attrsFixed}>
				<div className={styles["image-wrap"]} {...attrsFlow}>
					{children}
				</div>
			</div>
			<div className={styles["text-box"]}>
				<h1>Parallax Effect using next/image</h1>
				<h2>Smoother? Version</h2>
				<div>
				<p>
					The principle here is to add the parallax effect on a container div
					and remove the image from the re-rendering cycle.
				</p>
				<p>
					It’s hard to pick if this makes it smoother or I have had too much
					coffee.
				</p>
				<p>
					Currently set to {accelerator > 0 ? "Slower" : "Faster"} :<br />
					Accelerator: {accelerator}
					<br />
					Scrolled: {imgOffset}
					<br />
					<a href="#" style={{ marginRight: "2rem" }} onClick={(e) => { e.preventDefault(); setAccelerator(-0.3); }}>Go Faster</a>
					<a href="#" style={{ marginRight: "2rem" }} onClick={(e) => { e.preventDefault(); setAccelerator(0.5); 	}}>Go Slower</a>
					<a href="#" 								onClick={(e) => { e.preventDefault(); setAccelerator(0); 	}}>Fixed</a>
				</p>
				</div>
			</div>
			<div className={styles["massive"]} {...attrsPush}>
				<p>Srollin’,</p>
				<p>scrollin’,</p>
				<p>scrollin’...</p>
				<p>:)</p>
			</div>
		</>
	);
};
