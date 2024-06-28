'use client'

import { SessionProvider } from "next-auth/react";
import { FC } from "react";

interface LayoutProps {
	children: React.ReactNode;
}

const Providers: FC<LayoutProps> = ({ children }) => {
	return (<SessionProvider>{children}</SessionProvider>)
}


export default Providers;
