import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

const alertMessage = "Whaat An alert An Alert";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleClick = () => {
    console.log("Clicked Me");
    setAlertVisible(true);
  };
  return (
    <>
      <div>
        {alertVisible && (
          <Alert
            children={alertMessage}
            onClose={() => setAlertVisible(false)}
          />
        )}
        <Button children="clickMe" onClick={handleClick} />
      </div>
    </>
  );
}

export default App;
