import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import styles from "./RootLayout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import Header from "../Header/Header";


function RootLayout() {
    const [openedMenu, setOpenedMenu] = useState(false);

    const toggleMenu = () => {
        setOpenedMenu(!openedMenu);
    };


    return (
        <>
            <Header toggleMenu={toggleMenu} openedMenu={openedMenu} />
            <div className={styles["menu-and-page"]}>
                <Sidebar toggleMenu={toggleMenu} openedMenu={openedMenu} />
                <div className={styles["page"]}>
                    <span className={styles["background-line"]}></span>
                    <span className={styles["background-line"]}></span>
                    <span className={styles["background-line"]}></span>
                    <span className={styles["background-line"]}></span>
                    <main>
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default RootLayout;
