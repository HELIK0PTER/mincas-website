import React from "react";

import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

import { Skeleton } from "@/components/ui/skeleton";

export interface Event {
  name: string;
  description: string;
  event_date: string;
  location?: string;
  price?: number;
  link?: string;
}

interface EventCardProps {
  name: string;
  description: string;
  event_date: string;
  location?: string;
}

export const EventCard = ({
  name,
  description,
  event_date,
  location,
}: EventCardProps) => (
  <div className="bg-secondary dark:bg-primary rounded-lg shadow-md p-6 mb-6 hover:cursor-pointer hover:scale-[100.5%] hover:opacity-80 transition-all duration-300 ease-in-out">
    <h3 className="text-primary dark:text-secondary text-xl font-bold mb-2">
      {name}
    </h3>
    <p className="text-neutral dark:text-neutral-foreground italic mb-3 flex items-center">
      <FaCalendarAlt className="w-4 h-4 mr-2" />
      {new Date(event_date).toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </p>
    {location && (
      <p className="flex items-center mb-3">
        <FaLocationDot className="w-4 h-4 mr-2" />
        {location}
      </p>
    )}
    <p className="text-neutral dark:text-neutral-foreground">{description}</p>
  </div>
);

export const EventCardSkeleton: React.FC = () => (
  <div className="bg-secondary dark:bg-primary rounded-lg shadow-md p-6 mb-6">
    <Skeleton className="h-6 w-2/3 mb-2" />
    <Skeleton className="h-4 w-1/2 mb-3" />
    <Skeleton className="h-4 w-1/3 mb-3" />
    <Skeleton className="h-4 w-4/5" />
  </div>
);

export const MainPageEventCard: React.FC<EventCardProps> = ({
  name,
  event_date,
  location,
}) => (
  <div className="bg-secondary dark:bg-primary rounded-lg shadow-md p-6 mb-6 hover:cursor-pointer hover:scale-[100.5%] hover:opacity-80 transition-all duration-300 ease-in-out">
    <h3 className="text-primary dark:text-secondary text-xl font-bold mb-2">
      {name}
    </h3>
    <p className="text-neutral dark:text-neutral-foreground italic mb-3 flex items-center">
      <FaCalendarAlt className="w-4 h-4 mr-2" />
      {new Date(event_date).toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </p>
    {location && (
      <p className="flex items-center mb-3">
        <FaLocationDot className="w-4 h-4 mr-2" />
        {location}
      </p>
    )}
  </div>
);
