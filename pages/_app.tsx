import "styles/globals.scss";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	console.log(Component);
	return (
		<>
			{router.pathname && router.pathname !== "/" && (<Link className="homer" href="/">Home</Link>)}
			<Component {...pageProps} />
		</>
	);
}
