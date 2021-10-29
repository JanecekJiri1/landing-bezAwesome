import classes from "./TopText.module.css";

const TopText = () => {
  return (
    <div className={classes.textWrapper}>
      <div className={classes.topText}>
        #Enter<span>The</span>
      </div>

      <div className={classes.lowerText}>
        <span>Beast</span>Zone <span className={classes.spanTwo}>&trade;</span>
      </div>
    </div>
  );
};

export default TopText;
