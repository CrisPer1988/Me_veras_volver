import styles from "./home.module.css";

const Popup = () => {
  return (
    <div className={styles.container_pop_up}>
      <div className={styles.pop_up}>
        <h2 style={{ color: "black" }}>Como te gusta el chisme JAJAJA!</h2>
        <h2>
          Bienvenido a <i>Me Verás Volver</i>, la mejor rotisería de San Rafael
        </h2>
        <img className={styles.image} src="/meme.png" alt="" />
      </div>
    </div>
  );
};

export default Popup;
