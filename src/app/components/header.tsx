import { ReactNode } from "react";

export default function Header({ children }: { children: ReactNode }) {
	return <header className="max-w-screen-xl mx-auto">{children}</header>;
}
