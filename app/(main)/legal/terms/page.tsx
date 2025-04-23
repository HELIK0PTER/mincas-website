import React from 'react';

import Link from 'next/link';

export default function TermsPage() {
	return (
		<div>
			<h1>Termos e Condições Gerais de Venda</h1>
			<p>Principais diretrizes para a venda de nossos produtos.</p>
			<ul>
				<li><Link href="/legal/terms/general-conditions">Condições Gerais de Venda</Link></li>
				<li><Link href="/legal/terms/sales-process">Processo de Venda</Link></li>
				<li><Link href="/legal/terms/shipping">Entrega</Link></li>
				<li><Link href="/legal/terms/returns">Política de Retorno</Link></li>
				<li><Link href="/legal/terms/payment">Métodos de Pagamento</Link></li>
				<li><Link href="/legal/terms/responsibilities">Responsabilidades</Link></li>
			</ul>
		</div>
	);
}
