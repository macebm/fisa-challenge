import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer class="footer">
            <nav class="footer__nav">
                <Link to="/" class="footer__nav__btn">Home</Link>
            </nav>
        </footer>
    )
}