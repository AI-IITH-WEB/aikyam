import About from './components/About';
import Header from './components/common/Header';
import EventSchedule from './components/EventSchedule';
import Home from './components/Home';
import Venue from './components/Venue';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <EventSchedule />
      <Venue />
    </div>
  );
}

export default App;
