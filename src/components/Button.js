export default function Button({name}) {
    return (
        <button className="btn__ + {name}">{name}</button>
    )
}