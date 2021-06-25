import styles from "./Login.module.css";
console.log(styles);
const Logup = () => {
  return (
    <form className={styles.login}>
      <p align="right" style={{ color: "lightsalmon" }}>
        AkimExpress style
      </p>
      <input type="text" placeholder="UserName" />
      <input type="email" placeholder="email" />
      <input type="password" placeholder="Password" />
      <button>OK!</button>
    </form>
  );
};
export default Logup;
