import EventItem from './event-item';

function EventList(props) {
  return (
    <ul>
      {props.items.map(event => <EventItem />)}
    </ul>
  );
}
export default EventList;
