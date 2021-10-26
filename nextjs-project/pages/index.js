import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

function HomePage(props) {
  return (
    <div>
      <ul>
        <EventList items={props.events} />
      </ul>
    </div>
  );
}
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return { 
    props: { events: featuredEvents },
    revalidate: 1800 // en production, la page sera rechargé au moins toutes les demi heures pour refleter les données de la base
    };
}

export default HomePage;
