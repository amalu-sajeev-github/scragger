import './Footer.css';
const Footer = () =>(
    <footer>
        <div className="col">
            <ul>
                <li>facebook</li>
                <li>twitter</li>
            </ul>
        </div>
        <div className="col">
            <ul>
                <li>instagram</li>
                <li>telegram</li>
            </ul>
        </div>
        <span className="footnote">
            All rights reserved. SCRAGGER MODELLING COMPANY.
        </span>
        <div className="footnote">
            @site-admin (developer) - <a href='https://github.com/amalu-sajeev-me'>Amalu Sajeev</a>
        </div>
    </footer>
);
export default Footer;