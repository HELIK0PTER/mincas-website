import React from 'react';

import Link from 'next/link';

import Heading from "./heading";

export default function LegalPage() {

	const sections = [
		{
			link : "/legal/legal-notices",
			text : "Menções Legais"
		},
		{
			link : "/legal/privacy",
			text : "Política de Privacidade"
		},
		{
			link : "/legal/terms",
			text : "Termos e Condições de Venda"
		},
		{
			link : "/legal/alcohol",
			text : "Responsabilidade com o Álcool"
		},
		{
			link : "/legal/products",
			text : "Informações sobre Produtos"
		}
	]

	return (
		<div>
			<Heading>Informações Legais :</Heading>
			<div className={`mt-2`}>
				<ul>
					{sections.map((section, index) => (
						<li key={index} className={`mt-1`}>
							<Link href={section.link}
								className={`hover:text-blue-500 hover:underline`}
							> {section.text} </Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
