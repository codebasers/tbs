import Link from "next/link";
import styles from "styles/bugLinkSmoothScroll.module.scss";

export default function BugScroll() {
	return (
		<>
		<main className={styles.main}>
			<a id="topAnchor">TOP ANCHOR</a>
			<div className={styles.tops}>
				<span>To Bottom: </span>
				<Link href="#bottomAnchor">NextJS Link</Link>
				<Link href="#bottomAnchor" scroll={false}>NextJS Link Fixed</Link>
				<a href="#bottomAnchor">HTML Link</a>
			</div>

			<div className={styles.massive}>
				<h1>next/link Smooth Scroll</h1>
				<p>Click the links in the magenta box to see the difference in the scroll behaviour between the Next/Link and HTML ‘a’ tag.</p>
				<p>The NextJS Link will jump immediately to the anchor whereas the HTML Link will obey the smooth scroll directive.</p>
				<h2>Workarounds</h2>
				<h3>1. Add scroll={false} to Link</h3>
				<p>
					The documentation (<a target="_out" href="https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page">here</a>) indicates 
					the ability to turn of the Next/Link scrolling behaviour in cases where you don’t want scroll-to-top after navigation. This also seems to allow Next/Link 
					to obey the smooth scroll directive.
				</p>
				<h3>2. Add ‘!important’ to css</h3>
				<p>The correct behaviour of NextJS Link can also be forced by adding ‘!important’ to the css directive.</p>
				<p>In (this example) the file ./global.scss </p>
				<p className="code">body &#123; scroll-behavior: smooth <span style={{ color: "rgb(50, 150, 255)" }}>!important;</span> &#125;</p>
			</div>

			<div className={styles.botty}>
			<span>To Top: </span>
			<Link href="#topAnchor">NextJS Link</Link>
			<Link href="#topAnchor" scroll={false}>
				NextJS Link Fixed
			</Link>
			<a href="#topAnchor">HTML Link</a>
			</div>
			<a id="bottomAnchor">BOTTOM ANCHOR</a>
		</main>
		</>
	);
}
