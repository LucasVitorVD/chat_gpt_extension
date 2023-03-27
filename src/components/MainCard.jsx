import "./styles/MainCard.css";
import chatLogo from "../assets/openai-logo.png";
import CardContent from "./Card/CardContent";

const MainCard = () => {
  return (
    <div className="card_container h-full w-1/4 shadow-sm pt-4">
      <figure className="card_header">
        <img src={chatLogo} alt="OpenAI logo" className="rotate" />
        <figcaption hidden>OpenAI Logo</figcaption>
      </figure>
      <CardContent />
    </div>
  );
};

export default MainCard;
