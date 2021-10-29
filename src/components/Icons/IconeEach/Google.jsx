import classes from "./Google.module.css";

const Google = () => {
  return (
    <>
      <a className={classes.googleA} href="https://www.google.cz/?hl=cs">
        <div className={classes.mainGoogleIcon}>
          <span className={classes.googleSpan}>G+</span>
        </div>
      </a>
    </>
  );
};

export default Google;
