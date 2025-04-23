import React from "react";

import { createClient } from "@/utils/supabase/server";

import {
  Event,
  EventCard,
  MainPageEventCard,
} from "@/components/molecules/EventCard";

export const FutureEvents = async () => {
  const supabase = await createClient();
  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .gte("event_date", new Date().toISOString())
    .order("event_date", { ascending: true });

  if (error) {
    console.error("Error fetching events:", error);
  }

  return events?.map((event: Event) => (
    <EventCard key={event.name} {...event} />
  ));
};

export const PastEvents = async () => {
  const supabase = await createClient();
  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .lt("event_date", new Date().toISOString())
    .order("event_date", { ascending: false });

  if (error) {
    console.error("Error fetching events:", error);
  }

  return events?.map((event: Event) => (
    <EventCard key={event.name} {...event} />
  ));
};

{
  /* list maximum 3 events for the main page (will be display un flex-row */
}
export const MainPageEvents = async () => {
  const supabase = await createClient();
  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: true })
    .limit(3);

  if (error) {
    console.error("Error fetching events:", error);
  }

  return events?.map((event: Event) => (
    <MainPageEventCard key={event.name} {...event} />
  ));
};
