import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import {
	FiChevronsLeft,
	FiChevronLeft,
	FiChevronsRight,
	FiChevronRight,
} from "react-icons/fi";
import thumbImage from "../../../public/images/thumb.png";

const Posts = () => {
	return (
		<>
			<Head>
				<title>Conteúdos | Sujeito Programador</title>
			</Head>
			<main className={styles.container}>
				<div className={styles.posts}>
					<Link href="/">
						<Image
							src={thumbImage}
							alt="Título do post"
							width={720}
							height={410}
							quality={100}
						/>
						<strong>Criando meu primeiro aplicativo</strong>
						<time>14 JUN 2021</time>
						<p>
							Hoje vamos criar o controle de mostrar a senha no input, uma opção
							para os nossos formulários de cadastro e login. Mas chega de
							conversa e bora pro código junto comigo que o vídeo está show de
							bola!
						</p>
					</Link>

					<div className={styles.buttonNavigate}>
						<div>
							<button>
								<FiChevronsLeft size={25} color="#fff" />
							</button>
							<button>
								<FiChevronLeft size={25} color="#fff" />
							</button>
						</div>

						<div>
							<button>
								<FiChevronRight size={25} color="#fff" />
							</button>
							<button>
								<FiChevronsRight size={25} color="#fff" />
							</button>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Posts;
