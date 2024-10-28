import "./App.css";
import Gallery from "./gallery";
import Form from "./form";
import Image from "./image";
import Time from "./clocks";
import Message from "./message";
import RequestTracker from "./Requesttracker";

function App() {
  return (
    <>
      <Image />
      <Form />
      <Gallery />
      <Time />
      <Message />
      <RequestTracker />
    </>
  );
}

export default App;
