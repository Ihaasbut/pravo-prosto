import Typography from "../../../../components/ui/typography/Typography";
import type { ContactBlockI, ContactsInfoPropsI } from "./ContactsInfo.types";

import styles from "./ContactsInfo.module.css";

function ContactsInfo({ data }: ContactsInfoPropsI) {
  const { address, phones, emails } = data;
  const groups: ContactBlockI[] = [
    {
      label: address.label,
      href: address.href,
      items: address.lines.map((value) => ({ value })),
    },
    phones,
    emails,
  ];

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="content">
          <div className={styles.grid}>
            {groups.map((group) => {
              const Stack = group.href ? "a" : "div";

              return (
                <div className={styles.card} key={group.label}>
                  <Typography variant="body-xs" className={styles.label}>
                    {group.label}
                  </Typography>
                  <Stack
                    className={styles.stack}
                    {...(group.href
                      ? {
                          href: group.href,
                          target: "_blank",
                          rel: "noreferrer",
                        }
                      : {})}
                  >
                    {group.items.map((item) => (
                      <Typography
                        variant="body-l"
                        as={item.href ? "a" : "span"}
                        className={styles.line}
                        href={item.href}
                        key={item.value}
                      >
                        {item.value}
                      </Typography>
                    ))}
                  </Stack>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsInfo;
