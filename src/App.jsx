import { useEffect, useState } from "react";
import Home from "./components/Home";
import Popup from "./components/Popup";
import WhatsAppSVG from "./utils/svgs/WhatsAppSVG";

function App() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 4000);
  }, []);

  return (
    <>
      {isActive && <Popup />}
      <WhatsAppSVG />
      <Home />
    </>
  );
}

export default App;
