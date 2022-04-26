import React from "react";
import AllDecks from "../Deck/AllDecks.js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <Link to="/decks/new" className="btn btn-lg btn-secondary">
          Create Deck
        </Link>
      </div>
      <br></br>
      <div>
        <AllDecks />
      </div>
    </div>
  );
}

export default Home;
