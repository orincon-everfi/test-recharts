import "./App.css";
import RechartsArea from "./components/RechartsArea";
import RechartsLine from "./components/RechartsLine";
import StackedBars from "./components/StackedBars";

function App() {
  return (
    <div className="App">
      <h1>Recharts Style Guide</h1>
      <RechartsLine />
      <br></br>
      <br></br>
      <br></br>
      <StackedBars />
      <br></br>
      <br></br>
      <br></br>
      <RechartsArea />
    </div>
  );
}

export default App;
