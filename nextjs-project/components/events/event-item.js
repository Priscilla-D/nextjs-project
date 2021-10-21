import Link from "next/link";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const updatedDate = new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
  });
  const address = location.replace(',', '/n');
  const exploreLink = `/events/${id}`;
  return (
    <li>
      <img src={'/' + image} alt={title}/>
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{updatedDate}</time>
          </div>
          <div>
            <address>{address}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
