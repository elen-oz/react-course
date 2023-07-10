import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // ...
    throw new Error('Error fetching events');
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

function EventsPage() {
  const events = useLoaderData();

  return <EventsList events={events} />;
}

export default EventsPage;
