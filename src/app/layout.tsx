import "./globals.css";

export const metadata = {
	title: "Expense Eagle",
	description: "Soar above your expenses",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
