import './App.css';
import About from './components/About';
import Header from './components/common/Header';
import EventSchedule from './components/EventSchedule';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <EventSchedule />
    </div>
  );
}

export default App;
