import React from "react";
import styles from "./Header.module.scss"

function Header() {
    return (
        <div className={styles.wrapper}>          
          <h1 className={styles.title}>Currency converter</h1>
        </div>
      );

}

export default Header;