import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";

import styles from "./post.module.scss";

interface PostProps {
	post: {
		slug: string;
		title: string;
		description: string;
		cover: string;
		updatedAt: string;
	};
}

const Post = ({ post }: PostProps) => {
	console.log(post);

	return (
		<>
			<Head>
				<title>{post.title} | Blog</title>
			</Head>
			<main className={styles.container}>
				<article className={styles.post}>
					<Image
						src={post.cover}
						title={post.title}
						alt={post.title}
						width={720}
						height={410}
						quality={100}
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUYVCvBwABJwC8BknQjAAAAABJRU5ErkJggg=="
					/>
					<h1>{post.title}</h1>
					<time>{post.updatedAt}</time>
					<div
						className={styles.postContent}
						dangerouslySetInnerHTML={{ __html: post.description }}
					></div>
				</article>
			</main>
		</>
	);
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ({
	req,
	params,
}) => {
	const { slug } = params;
	const prismic = getPrismicClient(req);

	const response = await prismic.getByUID("post", String(slug), {});

	if (!response) {
		return {
			redirect: {
				destination: "/posts",
				permanent: false,
			},
		};
	}

	const post = {
		slug,
		title: RichText.asText(response.data.title),
		description: RichText.asHtml(response.data.description),
		cover: response.data.cover.url,
		updatedAt: new Date(response.last_publication_date).toLocaleDateString(
			"pt-BR",
			{
				day: "2-digit",
				month: "long",
				year: "numeric",
			}
		),
	};

	return {
		props: {
			post,
		},
	};
};
