"use client"

import { FaCartShopping } from "react-icons/fa6";

import Link from "next/link";

import SearchBar from '@/components/atoms/SearchBar';
import { HorizontalSeparator } from '@/components/atoms/separators';
import {Logo1} from "@/components/atoms/logos";

import {cn} from "@/lib/utils";
import { getConnection } from "@/utils/supabase/utils";

import { usePathname } from "next/navigation";

const Sidebar = () => {

	return (
		<main className={`flex flex-col w-72 p-4 h-screen bg-secondary border-r-2 border-primary`}>
			<Link href={`/`}><Logo1/></Link>
			<div className="flex flex-col justify-between mt-2">
				<HorizontalSeparator/>
				<SearchBar/>
				<HorizontalSeparator/>
			</div>
			<div className={`flex-1 flex flex-col py-2 justify-start overflow-y-auto`}>
				<LinksMenu>
					<LinkButton href={`/`}>Home</LinkButton>
					<LinkButton href={`/wines`}>Catalogo</LinkButton>
					<LinkButton href={`/about`}>Nossa historia</LinkButton>
					<LinkButton href={`/contact`}>Contact</LinkButton>
				</LinksMenu>
			</div>
			<div className="flex justify-between">
				<UserButton/>
				{/* todo : rajouter un ping avec le nombre d'objets dans le cart */}
				<Link href={`/cart`} className="p-1 rounded-md bg-primary text-white w-16 flex justify-center items-center hover:opacity-75">
					<FaCartShopping className="h-auto w-5" />
				</Link>
			</div>
		</main>
	);
};
export default Sidebar;

const UserButton = async () => {

	return (
		await getConnection()	?			
		<Link href={`/auth/login`} className="p-1 rounded-md border-2 border-primary hover:bg-primary hover:text-white">
			Login
		</Link>
		:
		<Link href={`/user`} className="p-1 rounded-md border-2 border-primary hover:bg-primary hover:text-white">
			Profile
		</Link>
	)
}

const LinkButton = (
	{
		href,
		children,
		className,
		...props
	}: {
		href : string,
		children : React.ReactNode
		className? : string
	}
) => {
	
	const path = usePathname();

	return (
		<Link
			href={href}
			className={cn(`
				text-primary
				hover:text-white
				bg-secondary
				hover:bg-primary			
				rounded-sm p-1
				border-2 border-primary
				transition-all duration-100
				${
					href === path ? 'bg-primary text-white hover:opacity-80' : ''
				}
				`,
				className,
				{...props}
				)}
		>
			{children}
		</Link>
	)
}

const LinksMenu = (
	{
		children,
	} : {
		children : React.ReactNode,
	}
) => {
	return (
		<div
			className={
				`flex flex-col justify-between p-1 gap-1 rounded-md relative`
			}
		>
			{children}
		</div>
	)
}