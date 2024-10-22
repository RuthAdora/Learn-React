import "./App.css";
// import Gallery from "./Gallery.js";
import { Profile } from "./Profile.js";
import { Happydog } from "./Profile.js";
import Bio from "./Profile.js";
import { TodoList } from "./Profile.js";
import InspirationGenerator from "./inspiration.js";

export default function App() {
  return (
    <div>
      <Bio />
      <Profile />
      <Happydog />
      <TodoList />
      <InspirationGenerator />
    </div>
  );
}
