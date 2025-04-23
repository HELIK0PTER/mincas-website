import React from 'react';

import Link from 'next/link';

export default function PrivacyPage() {
	return (
		<div>
			<h1>Política de Privacidade</h1>
			<p>Compromisso da Cantina Mincarone com a proteção de dados pessoais.</p>
			<ul>
				<li><Link href="/legal/privacy/policy">Política Geral de Privacidade</Link></li>
				<li><Link href="/legal/privacy/data-processing">Tratamento de Dados</Link></li>
				<li><Link href="/legal/privacy/cookies">Política de Cookies</Link></li>
				<li><Link href="/legal/privacy/user-rights">Direitos dos Usuários</Link></li>
				<li><Link href="/legal/privacy/security">Segurança dos Dados</Link></li>
			</ul>
		</div>
	);
}
