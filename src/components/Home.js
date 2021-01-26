import { useEffect, useState } from "react";
import getPlayers from "../services/getPlayers";
import Button from "./Button";
import SingleCard from "./SingleCard";

export default function Home() {
  // eslint-disable-next-line
  const [players, setPlayers] = useState(getPlayers());
  let [slideIndex, setSlideIndex] = useState([0]);

  useEffect(() => {
    setSlideIndex(0);
  }, []);

  function addSlideNumber() {
    let number = slideIndex;
    if (number < players.length - 1) {
      number += 1;
      setSlideIndex(number);
    } else if (number >= players.length - 1) {
      number = 0;
      setSlideIndex(number);
    }
  }

  function subtractSlideNumber() {
    let number = slideIndex;
    if (number <= players.length - 1 && number > 0) {
      number -= 1;
      setSlideIndex(number);
    } else if (number <= 0) {
      number = players.length - 1;
      setSlideIndex(number);
    }
  }

  return (
    <section className="container">
        {
          <SingleCard
            key={players[slideIndex].id}
            picture={players[slideIndex].picture}
            name={players[slideIndex].name}
            team={players[slideIndex].team}
            rating={players[slideIndex].rating}
          />
        }
        <Button className="btn btn__prev" onClick={subtractSlideNumber}>&#10094;</Button>
        <Button className="btn btn__next" onClick={addSlideNumber}>&#10095;</Button>
    </section>
  );
}
