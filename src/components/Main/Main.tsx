import Logo from "./Logo";
import CompanyDescription from "./CompanyDescription";
import ChatButton from "./ChatButton";
import Modal from "../Modal/Modal";
import "./Main.css";

const Main = () => (
  <div className="main">
    <div className="first-section">
      <Logo />
      <CompanyDescription />
    </div>
    <div className="second-section">
      <ChatButton />
      <Modal />
    </div>
  </div>
);

export default Main;
