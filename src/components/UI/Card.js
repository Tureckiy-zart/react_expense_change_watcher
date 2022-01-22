import "../styles/UI/Card.css";

const Card = ({ className = "", children }) => {
  const cls = "card " + className;
  return <div className={cls}> {children} </div>;
};

export default Card;
