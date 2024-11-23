import styles from "./home.module.css";

const Popup = () => {
  return (
    <div className={styles.container_pop_up}>
      <div className={styles.pop_up}>
        <h2>Como te gusta el chisme JAJAJA!</h2>
        <img className={styles.image} src="/meme.png" alt="" />
      </div>
    </div>
  );
};

export default Popup;
