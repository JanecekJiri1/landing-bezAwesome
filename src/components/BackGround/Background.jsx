import classes from "./Background.module.css";
import BackgroundImg from "../../images/background.jpg";

const Background = (props) => {
  return (
    <div>
      <div className={classes.image}>{props.children}</div>
    </div>
  );
};

export default Background;
