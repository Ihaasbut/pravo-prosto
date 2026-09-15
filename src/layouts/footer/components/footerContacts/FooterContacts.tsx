import { Fragment } from "react";
import Typography from "../../../../components/ui/typography/Typography";
import type { FooterContactsPropsI } from "./FooterContacts.types";
import styles from "./FooterContacts.module.css";

function FooterContacts({ contacts }: FooterContactsPropsI) {
  const { mail, phones } = contacts;

  return (
    <div className={styles.contacts}>
      {mail.map(({ mail, hrefForHtml }) => (
        <Typography
          key={hrefForHtml}
          variant="h1-footer"
          as={"a"}
          className={styles.email}
          href={hrefForHtml}
        >
          {mail}
        </Typography>
      ))}
      <div className={styles.telephones}>
        {phones.map(({ telephone, hrefForHtml }, index) => (
          <Fragment key={hrefForHtml}>
            {index > 0 && (
              <Typography
                variant="h1-footer"
                as={"span"}
                className={styles.telephoneSeparator}
              >
                /
              </Typography>
            )}
            <Typography
              variant="h1-footer"
              as={"a"}
              className={styles.telephone}
              href={hrefForHtml}
            >
              {telephone}
            </Typography>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default FooterContacts;
