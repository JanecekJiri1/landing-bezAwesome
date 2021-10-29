import classes from "./Icons.module.css";
import IconSeparate from "./IconSeparate";
import Twitter from "./IconeEach/Twitter";
import Instagram from "./IconeEach/Instagram";
import Facebook from "./IconeEach/Facebook";
import Google from "./IconeEach/Google";

const Icons = (props) => {
  return (
    <div className={classes.iconsLine}>
      <div className={classes.lineAll}>
        <div className={classes.jedna}>
          <Google />
        </div>
        <div className={classes.jedna}>
          <Facebook />
        </div>
        <div className={classes.jedna}>
          <Twitter />
        </div>
        <div className={classes.jedna}>
          <Instagram />
        </div>
      </div>
    </div>
  );
};

export default Icons;
