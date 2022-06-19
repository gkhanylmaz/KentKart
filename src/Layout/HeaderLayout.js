import React from "react";

//styles
import styles from "./HeaderLayout.module.scss";

// icons

import { FiBell, FiUser } from "react-icons/fi";

const HeaderLayout = () => {
  return (
    <>
      <header>
        <div className={styles.container}>
          <div className={styles.Navbar}>
            <a href="/">
              {" "}
              <img
                src="https://www.kentkart.com/wp-content/uploads/2021/01/logo.png"
                alt="logo"
              />
            </a>

            <div className={styles.NavIcons}>
              <FiBell className={styles.Icons} />{" "}
              <FiUser className={styles.Icons} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderLayout;
