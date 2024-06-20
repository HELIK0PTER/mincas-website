"use client"

import React, {useEffect, useState} from 'react';
import Link from "next/link";

import {Logo1} from "@/components/atoms/logos";
import SearchBar from '@/components/atoms/SearchBar';
import { HorizontalSeparator } from '@/components/atoms/separators';
import {cn} from "@/lib/utils";

const Sidebar = () => {

	const [currentSection, setCurrentSection] = useState('presentation')

	const [scrollPercentage, setScrollPercentage] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const scroll = window.scrollY
			const height = document.documentElement.scrollHeight - window.innerHeight
			const scrolled = (scroll / height) * 100
			setScrollPercentage(scrolled)
		}

		const handleSection = () => {
			const sections = document.querySelectorAll('section')
			const scroll = window.scrollY
			const scrollHeight = document.documentElement.scrollHeight
			const scrolled = (scroll / scrollHeight) * 100
			setScrollPercentage(scrolled)
			sections.forEach(section => {
				const sectionTop = section.offsetTop
				const sectionHeight = section.clientHeight
				if (scroll >= (sectionTop-250) && scroll < (sectionTop-250) + sectionHeight) {
					setCurrentSection(section.id)
				}
			})
		}

		window.addEventListener('scroll', handleScroll)
		window.addEventListener('scroll', handleSection)

		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('scroll', handleSection)
		}
	}, []);

	return (
		<main className={`fixed flex flex-col w-72 p-4 h-screen bg-secondary border-r-2 border-primary`}>
			<Logo1/>
			<HorizontalSeparator/>
			<SearchBar/>
			<div className={`flex-1 flex flex-col p-2 justify-start overflow-y-auto`}>
				<InnerSection>
					<p className={`w-full text-center`}>Navegação</p>
					<LinksPageMenu>
						<LinkButton className={cn('bg-secondary text-primary',`${currentSection === "presentation" && `bg-primary text-white`} hover:text-black`)} href={`#presentation`}>
							Presentação
						</LinkButton>
						<LinkButton className={cn('bg-secondary text-primary',`${currentSection === "wines" && `bg-primary text-white`} hover:text-black`)} href={`#wines`}>
							Vinhos
						</LinkButton>
						<LinkButton className={cn('bg-secondary text-primary',`${currentSection === "about" && `bg-primary text-white`} hover:text-black`)} href={`#about`}>
							Sobre Nós
						</LinkButton>
					</LinksPageMenu>
				</InnerSection>
				<InnerSection>
					<p className={`w-full text-center`}>Ver Mais</p>
					<LinksMenu>
						<LinkButton href={`#presentation`} className={`border-primary border-2 text-primary hover:text-white`}>
							Mincarone, à Historia
						</LinkButton>
						<LinkButton href={`#wines`} className={`border-primary border-2 text-primary hover:text-white`}>
							Catalogo de Vinhos
						</LinkButton>
						<LinkButton href={`#contact`} className={`border-primary border-2 text-primary hover:text-white`}>
							Nosso Contato
						</LinkButton>
					</LinksMenu>
				</InnerSection>
			</div>
			<div>
				Login
			</div>
		</main>
	);
};

/*
*
				<div
					className={`
						flex-1
						flex flex-col gap-2
						pt-4 px-2
					`}
				>
					Login
				</div>
* */

export default Sidebar;

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
	// compare the href with the clientIdRef
	// if they are the same, add a bg color

	return (
		<Link
			href={href}
			className={cn(`
				text-white
				hover:bg-primary
				bg-secondary			
				rounded-sm p-2
				transition-all duration-100
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

const LinksPageMenu = (
	{
		children,
	} : {
		children : React.ReactNode,
	}
) => {
	return (
		<div
			className={
				`flex flex-col justify-between p-1 gap-1 bg-primary rounded-md relative text-sm`
			}
		>
			{children}
		</div>
	)
}

const InnerSection = (
	{
		children,
	} :
		{
			children : React.ReactNode
		}
) => {
	return (
		<div>
			<HorizontalSeparator/>
			{children}
		</div>
	)
}