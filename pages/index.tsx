import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="home">
        <h1>Next.js 13 Experiments</h1>
        <p>Click a link below to view that experiment.</p>
        <Link href="/bugLinkSmoothScroll">
          BUG | next/link ignores smooth scroll directive.
        </Link>
        <Link
          href="/egParallaxImage"
          style={{ textDecorationLine: "line-through" }}
        >
          EG | Parallax with next/image.
        </Link>
        <Link href="/egParallaxSmoother">
          EG | Parallax with next/image. Smoother?
        </Link>
        <Link href="/egRedBox">
          EG | Show a Red Box
        </Link>
      </main>
    </>
  );
}
