// import logo from './logo.svg';
import "./App.css";
import Carousal from "./Components/Carousal";
import Head1 from "./Components/Head1";
import Head from "./Components/Head";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Head></Head>
      <Head1></Head1>
      <Navbar></Navbar>
      <Carousal></Carousal>
    </div>
  );
}

export default App;
