import Htag from '../../components/ui/Htag/Htag';
import styles from './Headere.module.css'

const Header = () => {
    return <header className={styles.header}>
      <Htag tag='h2'>Star Wars SWAPI</Htag>
    </header>;
  };
  
  export default Header;