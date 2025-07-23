import cx from "classnames";
import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { routes } from "./routes";
import {
  navMobile,
  navMobileMenu,
  navMobileList,
  navMobileListItem,
  navMobileLink,
  navMobileLinkTitle,
  navMobileLinkIcon,
} from "./styles.css";

const NavMobile = ({ className = "" }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className={cx(navMobile, className)}>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className={navMobileMenu}
          >
            <ul className={navMobileList}>
              {routes.map((route, idx) => {
                const { Icon } = route;
                return (
                  <motion.li
                    key={route.title}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      duration: 0.01,
                      stiffness: 160,
                      damping: 20,
                      delay: 0.1,
                    }}
                    className={navMobileListItem}
                  >
                    {route.to ? (
                    <Link
                      key={route.title}
                      onClick={() => setOpen((prev) => !prev)}
                      className={navMobileLink}
                      to={route.to}
                    >
                      <span className={navMobileLinkTitle}>{route.title}</span>
                      <Icon className={navMobileLinkIcon} />
                    </Link>
                    ) : (
                    <a
                      key={route.title}
                      onClick={() => setOpen((prev) => !prev)}
                      className={navMobileLink}
                      href={route.href}
                    >
                      <span className={navMobileLinkTitle}>{route.title}</span>
                      <Icon className={navMobileLinkIcon} />
                    </a>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
