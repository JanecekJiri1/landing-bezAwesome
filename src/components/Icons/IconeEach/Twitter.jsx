import classes from "./Twitter.module.css";
import img from "./doProjektu.png";

const Twitter = () => {
  return (
    <div className={classes.iconStyle}>
      <div className={classes.twitter}>
        <a href="https://twitter.com/?lang=cs">
          <img src={img} alt="asd" />
        </a>
      </div>
    </div>
  );
};

export default Twitter;
