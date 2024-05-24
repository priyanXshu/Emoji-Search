import "./index.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import LoaderSpinner from "./components/LoaderSpinner";
import Emoji from "./components/Emoji";

function App() {
  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return <>{loading ? <LoaderSpinner /> : <Emoji />}</>;
}

export default App;
