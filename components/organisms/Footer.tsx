import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<div
			className={`
				flex flex-col justify-between
				w-full min-h-32
				pt-6
				bg-primary
				text-white
			`}>
			<div className={`
				grid grid-cols-1 md:grid-cols-3 px-4
				`}>
				<div>
					<h2>
						Saber mais
					</h2>
					<div className={`mt-3 font-light text-sm text-gray-400 flex flex-col gap-2`}>
						<Link href={`/about`}>Sobre nos</Link>
						<Link href={`/contact`}>Contatos</Link>
						<Link href={`/events`}>Eventos</Link>
						<Link href={`/wines`}>Catalogo</Link>
					</div>
				</div>
				<div>
					<h2>
						Fale Conosco
					</h2>
				</div>
				<div>
					<h2>
						Mençoes Legais
					</h2>
				</div>
			</div>
			<div className={`text-center py-6 font-light text-xs`}>
				<p>
					© 2022 Minca. Todos os direitos reservados.
				</p>
			</div>
		</div>
	);
};

export default Footer;