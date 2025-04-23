import React from 'react';

import Link from 'next/link';

export default function LegalNoticesPage() {
	return (
		<div>
			<header>
				<h1>Cantina Mincarone - Menções Legais</h1>
				<h2>Marca Minca</h2>
			</header>
			<nav>
				<ul>
					<li><Link href="/legal/legal-notices/company">Informações da Empresa</Link></li>
					<li><Link href="/legal/legal-notices/licenses">Licenças e Autorizações</Link></li>
				</ul>
			</nav>
			<footer>
				<Link href="/contact">Contato</Link>
			</footer>
		</div>
	);
}
