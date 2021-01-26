export default function SingleCard({picture, name, team, rating}) {
    return (
        <div>
            <h3>{name}</h3>
            <img src={picture} alt={"Photo from " + name} />
            <p>{team}</p>
            <p>{rating}</p>
        </div>
    )
}