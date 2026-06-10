import { Outlet, useLocation } from "react-router-dom";
import styles from "./RootLayout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Form from "../../components/Form/Form";

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
            <div className={styles["menu-and-page"]}>
                <Sidebar onToggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} />
                <div className={styles["page"]}>
                    <span className={styles["background-line"]}></span>
                    <span className={styles["background-line"]}></span>
                    <span className={styles["background-line"]}></span>
                    <span className={styles["background-line"]}></span>
                    <main className={styles["main"]}>
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
            <Form />
        </>
    );
}

export default RootLayout;
