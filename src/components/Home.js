import { useEffect, useState } from "react";
import getPlayers from "../services/getPlayers";
import Button from "./Button";
import SingleCard from "./SingleCard";

export default function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const data = getPlayers();
    setPlayers(data);
  }, []);

  return (
    <section className="container">
      {players.map(({id, picture, name, team, rating}) => (
                <SingleCard key={id} picture={picture} name={name} team={team} rating={rating} />
            ))}
      <Button name="next"/>
      <Button name="next"/>
      <Button name="next"/>
      <Button name="next"/>
    </section>
  );
}
