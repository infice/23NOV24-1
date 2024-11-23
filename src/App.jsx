import React from "react";
import ControlledForm from "./ControlledForm";
import MultiFieldForm from "./MultiFilledForm";

/* function App() {
  return <MultiFieldForm />;
}

export default App; */

function App() {
  return <ControlledForm />;
}

export default App;

/* import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
            <h1>Counter</h1>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          
    </div>
  );
}


function App() {
  return (
    <div>
            <h1>React DevTools Example</h1>
            
      <Counter />
          
    </div>
  );
}

export default App; */
