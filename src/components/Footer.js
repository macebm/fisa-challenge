import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <nav className="footer__nav">
                <Link to="/" className="footer__nav__btn">Home</Link>
                <Link to="/extra" className="footer__nav__btn">Extra</Link>
            </nav>
        </footer>
    )
}