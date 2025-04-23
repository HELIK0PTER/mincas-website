import React from 'react';

import Link from 'next/link';

export default function ProductsPage() {
	return (
		<div>
			<h1>Informações sobre Produtos</h1>
			<p>Compromisso com a qualidade dos produtos da Cantina Mincarone.</p>
			<ul>
				<li><Link href="/legal/products/labeling">Etiquetagem de Produtos</Link></li>
				<li><Link href="/legal/products/allergens">Informações sobre Alérgenos</Link></li>
				<li><Link href="/legal/products/pricing">Política de Preços</Link></li>
			</ul>
		</div>
	);
}
