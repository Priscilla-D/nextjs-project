import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

i

function FilteredEventsPage() {
  // const router = useRouter();
  // const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  console.log(filterData);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  // le context est nécessaire ici pcq l'on veut les infos pour un id spécifique
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: { selectedEvent: event },
    revalidate: 30
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map(event => ({ params: { eventId: event.id}}))
  return {
    paths: paths,
    fallback: 'blocking'
  }
}
export default FilteredEventsPage;
