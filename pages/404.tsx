import styles from "../styles/404.module.css";
import Image from "next/image";
import Link from "next/link";

const NoPage = () => {
	return (
		<div className="m-auto w-1/3">
			  <h1 className={styles.bigText}> 404 </h1>
			  <h2 className={styles.smallText}>
			  	You seem to be lost, here Jerry the Cat will take you back{" "}
			  	<Link href="/">
			  		<a className={styles.link}>home!</a>
			  	</Link>
			  </h2>

			  <Link href="/">
			  	<a>
			  		<Image src="/404/jerry the cat.png" alt="" width="200" height="200"></Image>
			  	</a>
			  </Link>

			  <h6 className={styles.hint}>(hint: click the cat)</h6>
		</div>
	);
};

export default NoPage;