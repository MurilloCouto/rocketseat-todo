import rocketLogo from '../assets/logoIgnite.svg'

import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
    <img src={rocketLogo} alt="logoFeed" />
      <h1>to<span>do</span></h1>
    </header>
  );
}
