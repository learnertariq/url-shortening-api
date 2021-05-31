import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import ShortenerHome from "./components/ShortenerHome";
import Features from "./components/Features";
import Call2Action from "./components/Call2Action";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  /* TODO: feature connection line */
  return (
    <div>
      <Navbar />
      <Intro />
      <ShortenerHome />
      <Features />
      <Call2Action />
      <Footer />
    </div>
  );
}

export default App;
