import { CardProps } from "../../types";
import "./styles.css";

const Card = ({ monster }: CardProps) => {
  return (
    <div className="card-container" data-testid="card-container">
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt={monster.name}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
