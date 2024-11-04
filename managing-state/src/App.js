import './App.css';
import Quiz from './quiz.js'
import Picture from "./picture.js";
import EditProfile from "./name";
import FeedbackForm from "./hotelFeedback";
import Ticket from "./ticketForm";
import Menu from "./snack";
import TravelPlan from "./placesToVisit";
import AppClock from "./clockapp";
import PackList from "./packinglist";
import MailClient from "./mailClient";
import Accordion from "./about";
import FilterableList from "./filtering";
function App() {
  return (
    <>
        <AppClock />
        <MailClient/>
        <EditProfile />
        <Ticket />
        <PackList/>
        <FilterableList/>
        <Menu/>
        <TravelPlan/>
      <Picture />
        <Accordion/>
    <Quiz />
        <FeedbackForm />
      
    </>
  );
}

export default App;
