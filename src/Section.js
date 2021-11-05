import './Section.css';

const Section = props => (
    <section>
        <h3>{props.head}</h3>
        <div>
            {props.children}
        </div>
        <span className="auther">{props.auther}</span>
    </section>
);
export default Section;