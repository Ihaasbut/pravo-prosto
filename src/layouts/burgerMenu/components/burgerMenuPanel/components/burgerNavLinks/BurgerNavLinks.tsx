import { NavLink } from "react-router-dom";

import cn from "classnames";

import Typography from "../../../../../../components/ui/typography/Typography";
import type { BurgerNavLinksPropsI } from "./BurgerNavLinks.types";

import styles from "./BurgerNavLinks.module.css";

function BurgerNavLinks({ navLinks, onLinkClick }: BurgerNavLinksPropsI) {
  return (
    <ul className={styles.navLinks}>
      {navLinks.map((navLink) => (
        <li key={navLink.id}>
          <NavLink
            to={navLink.path}
            end={navLink.path === ""}
            onClick={onLinkClick}
            className={({ isActive }) =>
              cn(styles.navLink, isActive && styles.navLinkActive)
            }
          >
            <Typography variant="body-s">{navLink.title}</Typography>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default BurgerNavLinks;
