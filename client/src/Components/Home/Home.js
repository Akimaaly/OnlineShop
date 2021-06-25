import { useHistory } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const history = useHistory();
  const toLogin = () => {
    history.push("/login");
  };
  return (
    <div className="container">
      <div className={styles.wrapper}>
        {/* {!isAuth ? */}
        <div className={styles.typing} onClick={toLogin}>
          Вы в "Akim Express"! WELCOME!!! Зарегистрируйтесь или авторизуйтесь,
          как продавец или покупатель!!!
        </div>
        {/* :
        <div className={[styles.typing, styles.typing1].join(' ')}>
          Для выхода кликни "LogOut"
        </div>  */}
        {/* } */}
      </div>
    </div>
  );
};

export default Home;
