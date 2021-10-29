import classes from "./Facebook.module.css";

const Facebook = () => {
  return (
    <div className={classes.mainIcon}>
      <a className={classes.odkaz} href="https://www.facebook.com/">
        <span className={classes.pismenoF}> f </span>
      </a>
    </div>
  );
};

export default Facebook;
