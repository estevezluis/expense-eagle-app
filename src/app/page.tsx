import hero from "../../public/images/hero.png";
import Layout from "./components/layout";
import Image from "next/image";
import Link from "next/link";

import forbes from "../../public/images/media/forbes.png";
import abcnews from "../../public/images/media/abc-news.svg";
import cheddarnews from "../../public/images/media/cheddar-news.png";

const slogan = {
	heading: "Soar above your expenses",
	detail: "Manage and share your expenses with your household",
};

const images = [forbes, abcnews, cheddarnews];
export default function Home() {
	return (
		<Layout>
			<div className="max-w-screen-xl mx-auto bg-slate-100 dark:bg-slate-600 py-32 px-10 text-black dark:text-white flex flex-col justify-center items-center lg:flex-row">
				<div>
					<h1 className="text-6xl font-bold mb-4">
						{slogan.heading}
					</h1>
					<p className="text-xl mb-8">{slogan.detail}</p>
					<Link
						href={"#"}
						className="bg-white text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200"
					>
						Learn more
					</Link>
				</div>
				<div>
					<Image src={hero} width={893} height={434} alt="hero" />
				</div>
			</div>
			<div className="bg-gold flex flex-wrap gap-y-8 md:justify-between justify-center py-8 xl:px-64 lg:px-32 md:px-16">
				{images.map((image, i) => {
					return (
						<Image
							key={i}
							src={image}
							loading="lazy"
							alt="logo"
							width={130}
							height={54}
						/>
					);
				})}
			</div>
			<div className="max-w-screen-xl mx-auto py-24 ">
				<div className="flex justify-center">
					<div className="h-16 w-16">
						<svg
							className="fill-black dark:fill-white"
							viewBox="0 0 64 64"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M46.3 28.7h-3v-6.4C43.3 16.1 38.2 11 32 11c-6.2 0-11.3 5.1-11.3 11.3v6.4h-3v-6.4C17.7 14.4 24.1 8 32 8s14.3 6.4 14.3 14.3v6.4" />
							<path d="M44.8 55.9H19.2c-2.6 0-4.8-2.2-4.8-4.8V31.9c0-2.6 2.2-4.8 4.8-4.8h25.6c2.6 0 4.8 2.2 4.8 4.8v19.2c0 2.7-2.2 4.8-4.8 4.8zM19.2 30.3c-.9 0-1.6.7-1.6 1.6v19.2c0 .9.7 1.6 1.6 1.6h25.6c.9 0 1.6-.7 1.6-1.6V31.9c0-.9-.7-1.6-1.6-1.6H19.2z" />
							<path d="M35.2 36.7c0 1.8-1.4 3.2-3.2 3.2s-3.2-1.4-3.2-3.2 1.4-3.2 3.2-3.2 3.2 1.5 3.2 3.2" />
							<path d="M32.8 36.7h-1.6l-1.6 9.6h4.8l-1.6-9.6" />
						</svg>
					</div>
				</div>
				<div className="mt-4 text-center text-black dark:text-white">
					<h3 className="text-xl bold">Finances Eagle protected</h3>
					<p>
						256-bit encryption used to protected financial and login
						data
					</p>
				</div>
			</div>
		</Layout>
	);
}
