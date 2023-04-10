import { ReactNode } from "react";
import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: { children?: ReactNode }) {
	return (
		<div className="bg-slate-100 dark:bg-slate-600">
			<Header>
				<Navbar />
			</Header>
			<main>{children}</main>
			<Footer />
		</div>
	);
}
