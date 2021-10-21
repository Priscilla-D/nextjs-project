import Link from "next/link";

function EventsPage() {
  const events = [
    { id: "one", name: "first" },
    { id: "two", name: "second" },
  ];
  return (
    <div>
      <h1>Events Page</h1>
      <p>All Events</p>
      <ul>
        {events.map((event) => (
          <li>
            <Link href={`/events/${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsPage;
