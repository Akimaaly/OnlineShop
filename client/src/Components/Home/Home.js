import { useHistory } from 'react-router-dom';
import styles from './Home.module.css';
import Banner from '../Banner/Banner';

const Home = () => {
  const history = useHistory();
  const toLogin = () => {
    history.push('/auth');
  };
  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <div className={styles.typing} onClick={toLogin}>
          Вы в "Akim Express"! "Akim Express" - интернет-дукөнунө кош келиңиз!!! Катталсаңыз, кубанычта болобуз!
        </div>
      </div>
    </div>
  );
};

export default Home;
