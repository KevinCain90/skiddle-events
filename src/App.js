import { useParams } from 'react-router-dom';
import SearchPage from "./pages/events/SearchPage";
import EventPage from "./pages/events/EventPage";
import ArtistPage from "./pages/events/ArtistPage";

const App = () => {
  const { eventId, artistId } = useParams();

  const renderPage = (eventId, artistId) => {
    if (eventId) {
      return <EventPage id={eventId} />;
    } else if (artistId) {
      return <ArtistPage id={artistId} />;
    } else {
      return <SearchPage />;
    }
  }

  return (
    <div>{renderPage(eventId, artistId)}</div>
  );
}

export default App;
