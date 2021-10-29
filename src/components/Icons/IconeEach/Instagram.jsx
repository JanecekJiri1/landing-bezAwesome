import classes from "./Instagram.module.css";

const Instagram = () => {
  return (
    <a href="https://www.instagram.com/">
      <div className={classes.instagram}>
        <div className={classes.vnitrek}>
          <div className={classes.vnitrniKolecko}>
            <div className={classes.tecka}></div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Instagram;
