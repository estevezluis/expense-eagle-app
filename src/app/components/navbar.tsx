"use client";
import { useState } from "react";
import Link from "next/link";

const leftNavClass =
	"block mt-4 lg:inline-block lg:mt-0 text-lg dark:text-white text-black mr-4 hover:underline decoration-4 underline-offset-8 decoration-gold";
const rightNavClass =
	"w-24 text-center inline-block text-sm px-4 py-2 leading-none border rounded dark:text-white dark:border-white text-black border-black hover:border-gold mt-4 lg:mt-0";

export default function Navbar() {
	const [showMobileMenu, setShowMobileMenu] = useState(true);

	const navLinks = ["How it Works", "Resources", "Blog"];
	return (
		<nav className="flex items-center justify-between flex-wrap p-6">
			<div className="flex items-center content-center justify-center flex-shrink-0 text-black mr-6">
				<img
					className="w-8 h-8 mr-2"
					src="data:image/png;base64,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"
					alt="Expense Eagle"
				/>
				<span className="font-semibold text-center text-xl tracking-tight dark:text-white text-black">
					Expense Eagle
				</span>
			</div>
			<div className="lg:hidden">
				<button
					onClick={() => {
						setShowMobileMenu((prev) => !prev);
					}}
					className="flex items-center px-3 py-2 border rounded dark:text-white dark:border-white text-black border-black hover:border-gold"
				>
					<svg
						className="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			<div
				className={`w-full flex-grow lg:flex lg:items-center lg:w-auto gap-2 ${
					!!showMobileMenu ? "block" : "hidden"
				}`}
			>
				<div className="text-sm lg:flex-grow">
					{navLinks.map((linkText, i) => {
						return (
							<Link
								key={i}
								href="#responsive-header"
								className={leftNavClass}
							>
								{linkText}
							</Link>
						);
					})}
				</div>
				<div>
					<Link href="#" className={rightNavClass}>
						Sign Up
					</Link>
				</div>
				<div>
					<Link href="#" className={rightNavClass}>
						Login
					</Link>
				</div>
			</div>
		</nav>
	);
}
