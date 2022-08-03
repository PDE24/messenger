import "./App.css";

import MessageCard from "./components/MessageCard";
import InputForm from "./components/InputForm";


function App() {
  return (
    <div className="App">
      <header className="App-header">MESSENGER APP</header>

      <MessageCard />
      <InputForm />
    </div>
  );
}

export default App;
