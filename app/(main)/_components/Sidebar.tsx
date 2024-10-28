"use client"

import React, {useCallback} from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { Squash as Hamburger } from 'hamburger-react'
import Link from "next/link";
import SearchBar from '@/components/atoms/SearchBar';
import { HorizontalSeparator } from '@/components/atoms/separators';
import {Logo1} from "@/components/atoms/logos";
import {cn} from "@/lib/utils";
import { usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import {Badge} from "@nextui-org/badge";
import {User} from "@supabase/auth-js";

const Sidebar = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleMenu = () => {
		setIsOpen(!isOpen)
	}

	const BUTTON_SIZE = 25;

	return (
		<div className={`relative`}>
			<div className={`fixed top-0 bottom-0 ${isOpen ? `left-0` : `-left-72`} z-[999] transition-all duration-500`}>
				<div className={`absolute z-10 top-4 -right-14 bg-secondary rounded-xl shadow-md`} onClick={handleMenu}>
					<Hamburger toggled={isOpen} toggle={setIsOpen} size={20}/>
				</div>
				<main className={`flex flex-col w-72 py-4 h-screen bg-secondary border-r-2 border-primary`}>
					<Link href={`/public`} onClick={handleMenu} className="px-2"><Logo1/></Link>
					<div className="flex flex-col justify-between mt-2 px-2">
						<HorizontalSeparator/>
						<SearchBar/>
						<HorizontalSeparator/>
					</div>
					<div className={`flex-1 flex flex-col py-2 justify-start overflow-y-auto`}>
						<LinksMenu>
							<LinkButton href={`/`} onClick={handleMenu}>Início</LinkButton>
							<LinkButton href={`/wines`} onClick={handleMenu}>Catálogo</LinkButton>
							<LinkButton href={`/about`} onClick={handleMenu}>Nossa história</LinkButton>
							<LinkButton href={`/contact`} onClick={handleMenu}>Contatos</LinkButton>
							<LinkButton href={`/events`} onClick={handleMenu}>Eventos</LinkButton>
						</LinksMenu>
					</div>
					<div className="flex justify-between px-4">
						<UserButton/>
						{/* todo : rajouter un ping avec le nombre d'objets dans le cart */}
						<Badge content={useCartSize()} className={`${useCartSize() === 0 ? "hidden" : "flex"}`}>
							<Link href={`/cart`}
										className="p-1 rounded-md bg-primary text-white w-16 flex justify-center items-center hover:opacity-75">
								<FaCartShopping className="h-auto w-5"/>
							</Link>
						</Badge>
					</div>
				</main>
			</div>
			<div onClick={handleMenu} className={`${isOpen ? `fixed` : `hidden`} hover:cursor-pointer z-[100] top-0 bottom-0 right-0 bg-red-50/50 w-screen`}/>
		</div>
	);
};
export default Sidebar;

const useUser = () => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	const supabase = createClient();

	useEffect(() => {
		const checkUser = async () => {
			try {
				const {data} = await supabase.auth.getUser();
				const userdata = data.user;
				setUser(userdata);
			} catch (error) {
				console.error('Error fetching user:', error);
			} finally {
				setLoading(false);
			}
		};

		checkUser();
	}, []);

	return {user, loading};
};

const UserButton = () => {
	const {user, loading} = useUser();

	if (loading) {
		return <div>Loading...</div>; // Ou un spinner, ou rien si vous préférez
	}

	return (
		user ?
			<Link href={`/user`} className="p-1 rounded-md border-2 border-primary hover:bg-primary hover:text-white">
				Profile
			</Link>
			:
			<Link href={`/auth/login`} className="p-1 rounded-md border-2 border-primary hover:bg-primary hover:text-white">
				Login
			</Link>
	);
};

const LinkButton = ({
											href,
											children,
											className,
											...props
										}: {
											href: string,
											children: React.ReactNode
											className?: string
											onClick: () => void
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
				p-2
				transition-all duration-100
				${
					href === path ? 'bg-primary text-white hover:opacity-80' : ''
				}
				`,
				className,
				{...props}
				)}
			onClick={props.onClick}
		>
			{children}
		</Link>
	)
}

const useCartSize = () => {
	const supabase = createClient();
	const [cartSize, setCartSize] = useState<number>(0);

	const fetchCartSize = useCallback( async () => {
		const { data : userData } = await supabase.auth.getUser();
		const { data : cartData } = await supabase.from('cart').select('id').eq('user_id', userData.user?.id);
		setCartSize(cartData?.length || 0);
	}, [supabase]);
	
	useEffect(() => {
		fetchCartSize().then(r => r);
	}, [fetchCartSize, supabase]);

	return cartSize;
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
				`flex flex-col justify-between rounded-md relative`
			}
		>
			{children}
		</div>
	)
}