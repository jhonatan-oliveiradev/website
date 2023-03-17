/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

import techsImage from "../../public/images/techs.svg";

type Content = {
	title: string;
	titleContent: string;
	linkAction: string;
	mobileTitle: string;
	mobileContent: string;
	mobileBanner: string;
	titleWeb: string;
	webContent: string;
	webBanner: string;
};

interface ContentProps {
	content: Content;
}

export default function Home({ content }: ContentProps) {
	return (
		<>
			<Head>
				<title>Sujeito Programador | Apaixonado por tecnologia</title>
			</Head>
			<main className={styles.container}>
				<div className={styles.containerHeader}>
					<section className={styles.ctaText}>
						<h1>{content.title}</h1>
						<span>{content.titleContent}</span>
						<a href={content.linkAction}>
							<button>COMEÇAR AGORA</button>
						</a>
					</section>
					<img
						src="/images/banner-conteudos.png"
						alt={content.title}
						title={content.title}
					/>
				</div>

				<hr className={styles.divisor} />

				<div className={styles.sectionContent}>
					<section>
						<h2>{content.mobileTitle}</h2>
						<span>{content.mobileContent}</span>
					</section>

					<img
						src={content.mobileBanner}
						alt={content.mobileTitle}
						title={content.mobileTitle}
					/>
				</div>

				<hr className={styles.divisor} />
				<div className={styles.sectionContent}>
					<img
						src={content.webBanner}
						alt={content.titleWeb}
						title={content.titleWeb}
					/>
					<section>
						<h2>{content.titleWeb}</h2>
						<span>{content.webContent}</span>
					</section>
				</div>

				<div className={styles.nextLevelContent}>
					<Image src={techsImage} alt="tecnologias" width={300} />
					<h2>
						Mais de <span className={styles.qtd}>15 mil</span> já levaram sua
						carreira ao próximo nivel.
					</h2>
					<span>
						E você vai perder a chance de evoluir de uma vez por todas?
					</span>
					<a href={content.linkAction}>
						<button>ACESSAR TURMA</button>
					</a>
				</div>
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const prismic = getPrismicClient();

	const response = await prismic.query([
		Prismic.Predicates.at("document.type", "home"),
	]);

	const {
		title,
		subtitle,
		link_action,
		mobile,
		mobile_content,
		mobile_banner,
		title_web,
		web_content,
		web_banner,
	} = response.results[0].data;

	const content = {
		title: RichText.asText(title),
		titleContent: RichText.asText(subtitle),
		linkAction: link_action.url,
		mobileTitle: RichText.asText(mobile),
		mobileContent: RichText.asText(mobile_content),
		mobileBanner: mobile_banner.url,
		titleWeb: RichText.asText(title_web),
		webContent: RichText.asText(web_content),
		webBanner: web_banner.url,
	};

	return {
		props: { content },
		revalidate: 60 * 60 * 24, // 24 hours
	};
};
