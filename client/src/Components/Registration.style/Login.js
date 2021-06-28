import styles from "./Login.module.css";
console.log(styles);
const Login = () => {
  return (
    <form className={styles.login}>
      <p align="right" style={{ color: "lightsalmon" }}>
        AkimExpress style
      </p>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="Password" />
      <button>Войти</button>
    </form>
  );
};
export default Login;
