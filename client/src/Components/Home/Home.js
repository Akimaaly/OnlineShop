import { useHistory } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const history = useHistory();
  const toLogin = () => {
    history.push("/auth");
  };
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.typing} onClick={toLogin}>
        Вы в "Akim Express"! WELCOME!!! Зарегистрируйтесь или авторизуйтесь !!! Сиз "жакын Экспресс"болуп саналат!  Катталуу же сатуучу же сатып алуучу катары рахмат!!!
        </div>
      </div>
    </div>
  );
};

export default Home;
