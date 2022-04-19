import "./App.css";
import Header from "./component/header/Header";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import About from "./component/about/About";
import Resume from "./component/Resume/Resume";
import Quotes from "./component/quotes/Quotes";
import ContactMe from "./component/ContactME/ContactMe";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ..
AOS.init({
  duration: 800,
});

function App() {
  return (
    <>
          <ToastContainer draggable={true} transition={Bounce} autoClose={2000} />

      <Header />
      <About />
      <Resume />
      <Quotes />
      <ContactMe />
    </>
  );
}

export default App;
