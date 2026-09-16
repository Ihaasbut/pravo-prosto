import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import ModalForm from "../../components/sections/modalForm/ModalForm";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

import styles from "./RootLayout.module.css";

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
          {["edge", "near", "center", "far"].map((line) => (
            <span key={line} className={styles.backgroundLine} />
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
