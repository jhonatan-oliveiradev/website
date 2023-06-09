import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import logo from "../../../public/images/logo.svg";
import styles from "./styles.module.scss";

const Header = () => {
	const router = useRouter();
	const { pathname } = router;

	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<Link href="/">
					<Image src={logo} alt="Sujeito" />
				</Link>

				<nav>
					<Link href="/">
						<p className={pathname === "/" ? "active" : ""}>Home</p>
					</Link>
					<Link href="/posts">
						<p className={pathname === "/posts" ? "active" : ""}>Conteúdos</p>
					</Link>
					<Link href="/about">
						<p className={pathname === "/about" ? "active" : ""}>Quem somos?</p>
					</Link>
				</nav>

				<a
					href="https://www.jhonatanoliveira.com"
					target="_blank"
					className={styles.readyButton}
				>
					COMEÇAR
				</a>
			</div>
		</header>
	);
};

export default Header;
