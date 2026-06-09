import styles from "./PagePreloader.module.css";

type PagePreloaderProps = {
    compact?: boolean;
    label?: string;
};

function PagePreloader({
    compact = false,
    label = "Loading page",
}: PagePreloaderProps) {
    const className = compact
        ? `${styles["preloader"]} ${styles["preloader-compact"]}`
        : styles["preloader"];

    return (
        <div
            className={className}
            role="status"
            aria-live="polite"
            aria-label={label}
        >
            <div className={styles["backdrop"]}></div>
            <div className={styles["inner"]}>
                <div className={styles["loader"]} aria-hidden="true">
                    <span className={styles["ring"]}></span>
                    <span className={styles["ring"]}></span>
                    <span className={styles["core"]}></span>
                </div>
                <span className={styles["label"]}>loading</span>
            </div>
        </div>
    );
}

export default PagePreloader;
