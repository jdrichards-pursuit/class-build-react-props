import "./App.css";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";

const todaysDate = new Date().toDateString();
const dayCareName = "Bark and Bowl Doggy Day Care";
const dogs = [
  {
    name: "Mitsy",
    present: true,
    grade: "60",
    notes: "Stole Prince's toys repeatedly.",
    id: "jkdflsj;kla;f",
  },
  {
    name: "Misty",
    present: false,
    grade: "90",
    notes: "We missed Misty today. We hope we see her tomorrow",
    id: "jkdflsj;kla;e",
  },
  {
    name: "Bingo",
    present: true,
    grade: "65",
    notes: "Had 3 baths today. He kept rolling in the mud.",
    id: "jkdflsj;kla;a",
  },
  {
    name: "Prince",
    present: true,
    grade: "80",
    notes: "It was his first day and he hid under a chair for most of it.",
    id: "jkdflsj;kla;fr",
  },
];

function App() {
  return (
    <div className="App">
      <Header todaysDate={todaysDate} name={dayCareName} />
      <Aside dogs={dogs} />
      <Main dogs={dogs} />
    </div>
  );
}

export default App;
