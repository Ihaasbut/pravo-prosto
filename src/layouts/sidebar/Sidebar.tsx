import Logo from "../../components/ui/icons/logo/Logo";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <nav className={styles.wrapper}>
      <Logo className={styles.logo} />
      <BurgerMenu />
    </nav>
  );
}

export default Sidebar;
