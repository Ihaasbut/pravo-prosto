import Typography from "../../components/Typography/Typography";
import styles from "./Footer.module.css";
import FooterEmbla from "./FooterEmbla/FooterEmbla";
import cn from "classnames";
import { useEffect, useState } from "react";
import { useLanguage } from "../../hooks/use-language";
import type { FooterI } from "./types/footer.types";
import { Link } from "react-router-dom";

function Footer() {
    const [blockData, setBlockData] = useState<FooterI | null>(null);
    const { language } = useLanguage();
    const yandexMapsUrl =
        "https://yandex.ru/maps/?text=%D0%9F%D1%80%D0%B0%D0%B2%D0%BE%20%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%20%D0%A1%D0%BF%D0%B0%D1%80%D1%82%D0%B0%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C";

    useEffect(() => {
        (async () => {
            const footerModule = await import(
                `./mockData/Footer.mockData.${language}.ts`
            );

            const footerData = footerModule.footerData;
            setBlockData(footerData);
        })();
    }, [language]);

    if (!blockData) {
        return null;
    }

    return (
        <div className={styles["footer"]}>
            <FooterEmbla text={blockData.titleCompany} />
            <div className={cn(styles["wrapper"], "container")}>
                <div className="content">
                    <div className={styles["inner"]}>
                        <Typography
                            variant="h1-footer"
                            as={"a"}
                            className={styles["email"]}
                            href={blockData.links.mail.hrefForHtml}
                        >
                            {blockData.links.mail.mail}
                        </Typography>
                        <div className={styles["telephones"]}>
                            <Typography
                                variant="h1-footer"
                                as={"a"}
                                className={styles["telephone"]}
                                href={blockData.links.tel1.hrefForHtml}
                                aria-label={`Позвонить на ${blockData.links.tel1.telephone}`}
                            >
                                {blockData.links.tel1.telephone}
                            </Typography>

                            {blockData.links.tel2 && (
                                <>
                                    <Typography
                                        variant="h1-footer"
                                        as={"span"}
                                        className={
                                            styles["telephone-separator"]
                                        }
                                    >
                                        ,{" "}
                                    </Typography>
                                    <Typography
                                        variant="h1-footer"
                                        as={"a"}
                                        className={styles["telephone"]}
                                        href={blockData.links.tel2.hrefForHtml}
                                        aria-label={`Позвонить на ${blockData.links.tel2.telephone}`}
                                    >
                                        {blockData.links.tel2.telephone}
                                    </Typography>
                                </>
                            )}
                        </div>
                        <Link
                            to={`/${language}`}
                            className={styles["title-company-link"]}
                        >
                            <Typography
                                variant="footer-title"
                                as={"p"}
                                className={styles["title-company"]}
                            >
                                [ {blockData.titleCompany} ]
                            </Typography>
                        </Link>
                    </div>

                    <div className={styles["copyright"]}>
                        <a
                            href={yandexMapsUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={styles["address"]}
                        >
                            <Typography variant="body-s" as={"p"}>
                                {blockData.address}
                            </Typography>
                        </a>

                        <Link to={blockData.links.privacyPolicy.slug}>
                            <Typography
                                variant="body-s"
                                as={"p"}
                                className={styles["privacyPolicy"]}
                            >
                                {blockData.links.privacyPolicy.title}
                            </Typography>
                        </Link>

                        <Link to={blockData.links.userAgreement.slug}>
                            <Typography
                                variant="body-s"
                                as={"p"}
                                className={styles["userAgreement"]}
                            >
                                {blockData.links.userAgreement.title}
                            </Typography>
                        </Link>

                        <Typography
                            variant="body-s"
                            as={"p"}
                            className={styles["notice"]}
                        >
                            {blockData.notice}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
