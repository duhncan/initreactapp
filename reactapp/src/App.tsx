import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <h1>Setting Up A Message Component</h1>
      <Message />
      <br />
      <h1>Setting Up A Dynamic List</h1>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
      <br />
      <h1>Setting Up An Alert</h1>
      <Alert onClose={() => setAlertVisibility(false)}>
        Hello <span>World</span>
      </Alert>
      <br />
      <h1>Setting Up A Button</h1>
      <Button
        onClick={() => {
          console.log("Clicked");
        }}
      >
        My Button
      </Button>
      <br />
      <br />
      <h1>Setting Up An Alert With Button</h1>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Alert from Button Click!
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>

      <br />
    </div>
  );
}

export default App;
