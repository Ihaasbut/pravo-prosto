import Typography from "../../../../components/ui/typography/Typography";
import type { ContactsInfoPropsI } from "./ContactsInfo.types";
import styles from "./ContactsInfo.module.css";

function ContactsInfo({ address, phones, emails }: ContactsInfoPropsI) {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="content">
          <div className={styles.grid}>
            <div className={styles.card}>
              <Typography variant="body-xs" as="p" className={styles.label}>
                {address.label}
              </Typography>
              <a
                className={styles.stack}
                href={address.href}
                target="_blank"
                rel="noreferrer"
              >
                {address.lines.map((line) => (
                  <Typography
                    variant="body-l"
                    as="span"
                    className={styles.line}
                    key={line}
                  >
                    {line}
                  </Typography>
                ))}
              </a>
            </div>

            <div className={styles.card}>
              <Typography variant="body-xs" as="p" className={styles.label}>
                {phones.label}
              </Typography>
              <div className={styles.stack}>
                {phones.items.map((phone) => (
                  <Typography
                    variant="body-l"
                    as="a"
                    className={styles.line}
                    href={phone.href}
                    key={phone.href}
                    aria-label={phone.value}
                  >
                    {phone.value}
                  </Typography>
                ))}
              </div>
            </div>

            <div className={styles.card}>
              <Typography variant="body-xs" as="p" className={styles.label}>
                {emails.label}
              </Typography>
              <div className={styles.stack}>
                {emails.items.map((email) => (
                  <Typography
                    variant="body-l"
                    as="a"
                    className={styles.line}
                    href={email.href}
                    key={email.href}
                  >
                    {email.value}
                  </Typography>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsInfo;
