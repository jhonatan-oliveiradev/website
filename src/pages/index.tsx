/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

import techsImage from "../../public/images/techs.svg";

export default function Home() {
	return (
		<>
			<Head>
				<title>Sujeito Programador | Apaixonado por tecnologia</title>
			</Head>
			<main className={styles.container}>
				<div className={styles.containerHeader}>
					<section className={styles.ctaText}>
						<h1>Levando você ao próximo nível!</h1>
						<span>
							Uma plataforma com cursos que vão do zero até o profissional na
							prática, direto ao ponto aplicando o que usamos no mercado de
							trabalho. 👊
						</span>
						<a>
							<button>COMEÇAR AGORA</button>
						</a>
					</section>
					<img src="/images/banner-conteudos.png" alt="Hero" />
				</div>

				<hr className={styles.divisor} />

				<div className={styles.sectionContent}>
					<section>
						<h2>Aprenda a criar aplicativos para Android e iOS</h2>
						<span>
							Você vai descobrir o jeito mais moderno de desenvolver apps
							nativos para iOS e Android, construindo aplicativos do zero até
							aplicativos.
						</span>
					</section>

					<img
						src="/images/financasApp.png"
						alt="Conteúdos desenvolvimento de apps"
					/>
				</div>

				<hr className={styles.divisor} />
				<div className={styles.sectionContent}>
					<img src="/images/webDev.png" alt="Conteúdos desenvolvimento web" />
					<section>
						<h2>Aprenda criar sistemas web</h2>
						<span>
							Criar sistemas web, sites usando as tecnologias mais modernas e
							requisitadas pelo mercado.
						</span>
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
					<a>
						<button>ACESSAR TURMA</button>
					</a>
				</div>
			</main>
		</>
	);
}
