import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Freebook from "../components/Freebook";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    console.log("Received search query in App:", query); // Log the query received
    setSearchQuery(query); // Update the search query state
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Freebook searchQuery={searchQuery} />
    </>
  );
}

export default App;
