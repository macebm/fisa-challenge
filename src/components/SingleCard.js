export default function SingleCard({picture, name, team, rating}) {
    return (
        <div className="playercard fade">
            <h3 className="playercard__name">{name}</h3>
            <img className="playercard__picture" src={picture} alt={"Photo from " + name} />
            <p className="playercard__team">{team}</p>
            <p className="playercard__rating">Rating: {rating}</p>
        </div>
    )
}