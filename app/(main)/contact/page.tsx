// app/contatos/page.tsx
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

interface ContactData {
  type: string;
  title: string;
  content: string;
}

async function getContactInfo(): Promise<ContactData[]> {
  // Simuler une requête API asynchrone
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { type: "email", title: "Email", content: "info@example.com" },
    { type: "phone", title: "Telefone", content: "+55 11 1234-5678" },
    { type: "address", title: "Endereço", content: "Av. Paulista, 1000 - São Paulo, SP" },
  ];
}

export default async function ContatosPage() {
  const contactInfo = await getContactInfo();

  return (
    <div className="min-h-screen text-neutral dark:text-neutral-foreground p-8">
      <h1 className="text-4xl font-bold text-primary dark:text-secondary mb-8 text-center">Contatos</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-8 text-center">
          Entre em contato conosco para mais informações ou suporte. Estamos aqui para ajudar!
        </p>
        <ContactInfo contactData={contactInfo} />
        <ContactForm />
      </div>
    </div>
  );
}