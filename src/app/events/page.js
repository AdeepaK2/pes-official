import { eventsData } from "@/app/data/eventsData";
import EventCard from "@/components/EventCard";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const EventsPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-12 p-6 max-w-7xl mx-auto">
        {eventsData.map((event, index) => (
          <EventCard key={event.id} {...event} index={index} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
