import "../App.css";
function Skill(props) {
    return (
        <a className="skill_item" onClick={props.link}>
            <div className="skill-image">
                <img src={props.image} alt="" />
            </div>
            <h2 className="title">{props.name}</h2>
        </a>
    );
}

export default Skill;