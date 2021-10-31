import classes from "./Background.module.css";

const Background = (props) => {
  return <div className={classes.image}>{props.children}</div>;
};

export default Background;
