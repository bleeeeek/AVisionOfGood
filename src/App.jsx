import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header';
import DonationChart from './components/DonationChart';
import EventsList from './components/EventsList';
import EventDetails from './components/EventDetails';
import { eventsData } from './data/eventsData';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      
      <main className="container mx-auto px-4 py-6 md:py-12">
        <section className="mb-12 md:mb-24">
          <DonationChart events={eventsData} />
        </section>

        <section className="mb-12 md:mb-24">
          <EventsList events={eventsData} />
        </section>

        <section>
          {eventsData.map((event) => (
            <Element name={event.id} key={event.id}>
              <EventDetails event={event} />
            </Element>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;