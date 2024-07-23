"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import Link from "next/link";

import SearchBar from '@/components/atoms/SearchBar';
import { HorizontalSeparator } from '@/components/atoms/separators';
import {Logo1} from "@/components/atoms/logos";

import {cn} from "@/lib/utils";

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
			<div className={`flex-1 flex flex-col p-2 justify-start overflow-y-auto`}>
				<LinksMenu>
					
					<Accordion type="single" collapsible>

						<AccordionItem value="item-1">
							<div className="flex justify-between gap-2">
								<LinkButton href={`/`} className="flex-1">
									Menu
								</LinkButton>
							</div>
						</AccordionItem>

						<AccordionItem value="item-2">
							<div className="flex justify-between gap-2">
								<LinkButton href={`/wines`} className="flex-1">
									Catalogo
								</LinkButton>
								<AccordionTrigger className="flex justify-center items-center border-2 border-primary rounded-md p-0 px-[15px]"></AccordionTrigger>
							</div>
							<AccordionContent>
								<div className="flex flex-col m-0.5 gap-0.5">
									<LinkButton href={`/wines?filter=todos`} className="">
										Todos
									</LinkButton>
									<LinkButton href={`/wines?filter=brancos`} className="">
										Brancos
									</LinkButton>
									<LinkButton href={`/wines?filter=tintos`} className="">
										Tintos
									</LinkButton>
									<LinkButton href={`/wines?filter=espumantes`} className="">
										Espumantes
									</LinkButton>
									<LinkButton href={`/wines?filter=roses`} className="">
										Rosés
									</LinkButton>
								</div>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-3">
							<div className="flex justify-between gap-2">
								<LinkButton href={`/about`} className="flex-1">
									Nossa Historia
								</LinkButton>
								<AccordionTrigger className="flex justify-center items-center border-2 border-primary rounded-md p-0 px-[15px]"></AccordionTrigger>
							</div>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-4">
							<div className="flex justify-between gap-2">
								<LinkButton href={`/contact`} className="flex-1">
									Nosso Contato
								</LinkButton>
								<AccordionTrigger className="flex justify-center items-center border-2 border-primary rounded-md p-0 px-[15px]"></AccordionTrigger>
							</div>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
						
					</Accordion>
				</LinksMenu>
			</div>
			<div>
				Login
			</div>
		</main>
	);
};

export default Sidebar;

const PopoverText = (
	{
		children,
	} : {
		children : React.ReactNode
	}
) => {
	return (
		<p
			className={`hover:underline`}
		>{children}</p>
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