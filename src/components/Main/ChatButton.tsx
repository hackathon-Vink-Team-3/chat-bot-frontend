import ChatButtonImage from "../../assets/ChatButton.svg";

const ChatButton = () => (
  <button className="chat-button">
    <img src={ChatButtonImage} alt="Изображение кнопки чата" />
  </button>
);

export default ChatButton;
