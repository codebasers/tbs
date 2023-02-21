import { useState, useEffect } from "react";

import styles from "styles/egRedBox.module.scss";

export default function RedBox() {
	const [boxShown, setBoxShown] = useState(false);

	const toggle = () => setBoxShown(prevCheck => !prevCheck)

	useEffect(() => {
		
		
	}, []);


	return (
		<main className={styles['red-box-main']}>
			<div className={styles["text-box"]}>
				<h1>The Amazing Red&nbsp;Box</h1>
				<div>
					<p>
						{boxShown ? "That’s a cool read box." : "You wann see a red box?"}
					</p>
					<p>
						<a href="#" style={{ marginRight: "2rem" }} onClick={(e) => {e.preventDefault(); toggle(); }}>
							{boxShown ? "Hide it, before anyone sees" :  "You Bet!"}
							</a>
					</p>
				</div>
			</div>
			{boxShown && <div onClick={(e) => {toggle()}} className={styles["red-box"]}></div>}
		</main>
	);
}
