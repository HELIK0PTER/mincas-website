import React from "react";

import Link from 'next/link';

export default function AlcoholPage() {
	return (
		<div>
			<h1>Informações sobre o Álcool</h1>
			<p>A venda de álcool é proibida para menores de idade.</p>
			<ul>
				<li><Link href="/legal/alcohol/age-verification">Verificação de Idade</Link></li>
				<li><Link href="/legal/alcohol/responsible-drinking">Consumo Responsável</Link></li>
				<li><Link href="/legal/alcohol/warnings">Avisos sobre o Álcool</Link></li>
			</ul>
		</div>
	);
}
