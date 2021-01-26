import { useEffect, useState } from "react";
import getPlayers from "../services/getPlayers";
import SingleCard from "./SingleCard";

export default function Home() {
  //const players = allPlayers;

  const [players, setPlayers] = useState([]);
  console.log(players);

  useEffect(() => {
    const data = getPlayers();
    console.log(data);
    setPlayers(data);
  }, []);

  return (
    <section class="container">
      {players.map(({id, picture, name, team, rating}) => (
                <SingleCard key={id} picture={picture} name={name} team={team} rating={rating} />
            ))}
    </section>
  );
}
