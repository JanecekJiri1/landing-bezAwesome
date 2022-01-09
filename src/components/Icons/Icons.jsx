import classes from "./Icons.module.css";
import { FaFacebookF } from "react-icons/fa";

const Icons = (props) => {
  return (
    <div className={classes.icons}>
      <div className={classes.icon}>
        <a href="https://www.google.cz/">
          <div className={classes.google}>{/* <FontAwesomeIcon icon={faGooglePlusG} /> */}</div>
        </a>
      </div>
      <div className={classes.icon}>
        <a href="https://www.facebook.com/">
          <div className={classes.facebook}>
            <FaFacebookF />
          </div>
        </a>
      </div>
      <div className={classes.icon}>
        <a href="https://twitter.com/">
          <div className={classes.twitter}>{/* <FontAwesomeIcon icon={faTwitter} /> */}</div>
        </a>
      </div>
      <div className={classes.icon}>
        <a href="https://www.instagram.com/">
          <div className={classes.instagram}>{/* <FontAwesomeIcon icon={faInstagram} /> */}</div>
        </a>
      </div>
    </div>
  );
};

export default Icons;
