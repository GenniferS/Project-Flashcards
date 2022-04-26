import React from "react";
import EditCard from "./EditCards";
import AddCards from "./AddCards";
import { Switch, Route } from "react-router-dom";

function Cards() {
  return (
    <div>
      <Switch>
        <Route path="/decks/:deckId/cards/new">
          <AddCards />
        </Route>
        <Route path="/decks/:deckID/cards/:cardId/edit">
          <EditCard />
        </Route>
      </Switch>
    </div>
  );
}

export default Cards;
