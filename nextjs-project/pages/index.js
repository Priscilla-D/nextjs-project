import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <p>Features of Events</p>
      <Link href="/events">All events</Link>
    </div>
  );
}
export default HomePage;
