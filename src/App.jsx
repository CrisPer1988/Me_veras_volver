import { useEffect, useState } from "react";
import Home from "./components/Home";
import Popup from "./components/Popup";

function App() {
  const [isActive, setIsActive] = useState(true);

  const closeModal = () => {
    setIsActive(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 3500);
  }, []);

  return (
    <>
      {isActive && <Popup close={closeModal} />}
      <Home />
    </>
  );
}

export default App;
