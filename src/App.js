import React from "react";
import AddKey from "./components/AddKey";
import GetKeyCompoenet from "./components/GetKeyCompoenet";

function App() {
  return (
    <div className="App min-h-screen flex flex-col items-center justify-center bg-black">
      <h1 className="text-5xl font-extrabold text-gray-100 mb-8 mt-2">
        LRU Cache App
      </h1>
      <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-12">
        <div className="flex-1">
          <AddKey />
        </div>
        <div className="flex-1">
          <GetKeyCompoenet />
        </div>
      </div>
    </div>
  );
}

export default App;
