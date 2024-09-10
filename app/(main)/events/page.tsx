import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

interface Event {
  title: string;
  date: string;
  location?: string;
  description: string;
}

interface EventCardProps extends Event {}

const EventCard: React.FC<EventCardProps> = ({ title, date, location,description }) => (
  <div className="bg-secondary dark:bg-primary rounded-lg shadow-md p-6 mb-6 hover:cursor-pointer hover:scale-[100.5%] hover:opacity-80 transition-all duration-300 ease-in-out">
    <h3 className="text-primary dark:text-secondary text-xl font-bold mb-2">{title}</h3>
    <p className="text-neutral dark:text-neutral-foreground italic mb-3 flex items-center">
      <FaCalendarAlt className="w-4 h-4 mr-2" />
      {date}
    </p>
    {location &&
      <p className='flex items-center mb-3'>
        <FaLocationDot className="w-4 h-4 mr-2"  />
        {location}
      </p>
    }
    <p className="text-neutral dark:text-neutral-foreground">{description}</p>
  </div>
);

const EventsPage: React.FC = () => {
  const upcomingEvents: Event[] = [
    {
      title: "Feira de Vinhos Naturais",
      date: "15 de Setembro, 2024",
      location: "Parque da Cidade",
      description: "Junte-se a nós para uma degustação exclusiva de nossos vinhos naturais. Local: Parque da Cidade."
    },
    {
      title: "Workshop de Vinificação Natural",
      date: "22 de Outubro, 2024",
      description: "Aprenda sobre os processos de vinificação natural com nossos especialistas. Vagas limitadas!"
    }
  ];

  const pastEvents: Event[] = [
    {
      title: "Festival de Colheita",
      date: "5 de Março, 2024",
      description: "Celebramos a colheita das uvas com música ao vivo e degustação de vinhos da safra anterior."
    },
    {
      title: "Palestra: Biodiversidade na Viticultura",
      date: "18 de Janeiro, 2024",
      description: "Discutimos a importância da biodiversidade em nossas vinhas e como isso impacta a qualidade dos nossos vinhos."
    }
  ];

  return (
    <div className="min-h-screen text-neutral dark:text-neutral-foreground p-8">
      <h1 className="text-4xl font-bold text-primary dark:text-secondary mb-8">Eventos e feiras</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary dark:text-secondary mb-6 flex items-center">
          <FaCalendarAlt className="w-6 h-6 mr-2" />
          Próximos Eventos
        </h2>
        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold text-primary dark:text-secondary mb-6 flex items-center">
          <FaClock className="w-6 h-6 mr-2" />
          Eventos Passados
        </h2>
        <div className="space-y-6">
          {pastEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;