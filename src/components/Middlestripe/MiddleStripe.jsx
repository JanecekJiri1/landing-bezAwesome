import classes from "./MiddleStripe.module.css";

const MiddleStripe = () => {
  return (
    <div className={classes.stripsWrapper}>
      <div className={classes.insideText}>
        Real People. Real result.&nbsp;
        <span className={classes.spanOne}>Real Beasts&trade;.</span>
      </div>
    </div>
  );
};

export default MiddleStripe;
