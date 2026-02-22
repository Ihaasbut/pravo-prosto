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
                                href={`tel:${blockData.links.tel1.hrefForHtml}`}
                                aria-label={`Позвонить на ${blockData.links.tel1.telephone}`}
                            >
                                {blockData.links.tel1.telephone},{" "}
                            </Typography>

                            {blockData.links.tel2 && (
                                <Typography
                                    variant="h1-footer"
                                    as={"a"}
                                    className={styles["telephone"]}
                                    href={`tel:${blockData.links.tel2.hrefForHtml}`}
                                    aria-label={`Позвонить на ${blockData.links.tel2.telephone}`}
                                >
                                    {blockData.links.tel2.telephone}
                                </Typography>
                            )}
                        </div>
                        <Link to={""}>
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
                        <Typography
                            variant="body-s"
                            as={"p"}
                            href=""
                            className={styles["address"]}
                        >
                            {blockData.address}
                        </Typography>

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
