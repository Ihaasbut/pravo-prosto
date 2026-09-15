import { Outlet, useLocation } from "react-router-dom";
import styles from "./RootLayout.module.css";
import Sidebar from "../sidebar/Sidebar";
import { useLayoutEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ModalForm from "../../components/sections/modalForm/ModalForm";

function RootLayout() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.getElementById("root")?.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />

      <div className={styles.menuAndPage}>
        <Sidebar />

        <div className={styles.page}>
          {Array.from({ length: 4 }, (_, index) => (
            <span key={index} className={styles.backgroundLine} />
          ))}

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
