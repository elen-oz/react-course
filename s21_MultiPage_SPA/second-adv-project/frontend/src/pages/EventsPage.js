import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData();

  // if (events.isError) {
  //   return <p>{events.message}</p>;
  // }

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Error fetching events' };
    // throw new Error('Error fetching events');
    // throw new Response(JSON.stringify({ message: 'Error fetching events' }), { status: 500 });
    throw json({ message: 'Error fetching events' }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
