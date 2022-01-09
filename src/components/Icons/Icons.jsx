import classes from "./Icons.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faCoffee } from "@fortawesome/free-solid-svg-icons"; /* Připomínka pro mě */
// // import { faGooglePlusSquare } from "@fortawesome/free-brands-svg-icons";
// import {
//   faGooglePlusG,
//   faFacebookF,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

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
          <div className={classes.facebook}>{/* <FontAwesomeIcon icon={faFacebookF} /> */}</div>
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
