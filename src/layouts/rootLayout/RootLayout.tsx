import { Outlet, useLocation } from "react-router-dom";
import styles from "./RootLayout.module.css";
import Sidebar from "../sidebar/Sidebar";
import { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ModalForm from "../../components/sections/modalForm/ModalForm";

function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.getElementById("root")?.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.dataset.menuOpen = String(isMenuOpen);

    return () => {
      delete document.documentElement.dataset.menuOpen;
    };
  }, [isMenuOpen]);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header onToggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} />

      <div className={styles.menuAndPage}>
        <Sidebar onToggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} />

        <div className={styles.page}>
          <span className={styles.backgroundLine}></span>
          <span className={styles.backgroundLine}></span>
          <span className={styles.backgroundLine}></span>
          <span className={styles.backgroundLine}></span>
          <main className={styles.main}>
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>

      <ModalForm />
    </>
  );
}

export default RootLayout;
