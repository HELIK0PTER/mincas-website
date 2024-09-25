"use client"

import { FaCartShopping } from "react-icons/fa6";

import Link from "next/link";

import SearchBar from '@/components/atoms/SearchBar';
import { HorizontalSeparator } from '@/components/atoms/separators';
import {Logo1} from "@/components/atoms/logos";

import {cn} from "@/lib/utils";

import { usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const Sidebar = () => {

	return (
		<main className={`flex flex-col w-72 py-4 h-screen bg-secondary border-r-2 border-primary`}>
			<Link href={`/`} className="px-2"><Logo1/></Link>
			<div className="flex flex-col justify-between mt-2 px-2">
				<HorizontalSeparator/>
				<SearchBar/>
				<HorizontalSeparator/>
			</div>
			<div className={`flex-1 flex flex-col py-2 justify-start overflow-y-auto`}>
				<LinksMenu>
					<LinkButton href={`/`}>Início</LinkButton>
					<LinkButton href={`/wines`}>Catálogo</LinkButton>
					<LinkButton href={`/about`}>Nossa história</LinkButton>
					<LinkButton href={`/contact`}>Contatos</LinkButton>
					<LinkButton href={`/events`}>Eventos</LinkButton>
				</LinksMenu>
			</div>
			<SidebarReductions/>
			<div className="flex justify-between px-2">
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

const supabase = createClient();

const useUser = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();
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

  return { user, loading };
};

import React from 'react';

const SidebarReductions = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-4 my-5 bg-primary text-primary-foreground">
      <h2 className="text-2xl font-bold mb-4">Promoções Especiais</h2>
      <div className="text-center">
        <div className="text-lg mb-2 text-red-500">Descontos de até <span className={`font-bold text-2xl `}>30%</span></div>
        <p className="text-sm mb-4">em vinhos selecionados</p>
        <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
          Ver Ofertas
        </button>
      </div>
    </div>
  );
};

const UserButton = () => {
  const { user, loading } = useUser();

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
				p-2
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
				`flex flex-col justify-between rounded-md relative`
			}
		>
			{children}
		</div>
	)
}