import React, { Suspense } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

import { FutureEvents, PastEvents } from "@/components/molecules/EventsList";
import { EventCardSkeleton } from "@/components/molecules/EventCard";

const EventsPage: React.FC = () => {
  return (
    <div className="min-h-screen text-neutral dark:text-neutral-foreground p-8">
      <h1 className="text-4xl font-bold text-primary dark:text-secondary mb-8">
        Eventos e feiras
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary dark:text-secondary mb-6 flex items-center">
          <FaCalendarAlt className="w-6 h-6 mr-2" />
          Próximos Eventos
        </h2>
        <div className="space-y-6">
          <Suspense fallback={<EventCardSkeleton />}>
            <FutureEvents />
          </Suspense>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-primary dark:text-secondary mb-6 flex items-center">
          <FaClock className="w-6 h-6 mr-2" />
          Eventos Passados
        </h2>
        <div className="space-y-6">
          <Suspense fallback={<EventCardSkeleton />}>
            <PastEvents />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
