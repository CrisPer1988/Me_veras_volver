import { menu } from "../utils/menu";
import styles from "./home.module.css";

const Home = () => {
  console.log(styles);

  return (
    <div className={styles.container}>
      <div className={styles.content_name_menu}>
        <h1 className={styles.name}>Me Verás Volver</h1>
        <p className={styles.subtitle}>Una Rotisería diferente</p>
        <h2 className={styles.menu}>Menu</h2>
      </div>
      <img className={styles.logo} src="/ME (2).png" alt="" />
      <div className={styles.content_menu}>
        {menu.map((m) => (
          <div key={m.id}>
            <h1 className={styles.title_type}>{m.type}</h1>
            {m.flavors.map((flavor) => (
              <div key={flavor.id}>
                <div className={styles.container_name_price}>
                  <p className={styles.title_menu}>{flavor.name}</p>
                  <p className={styles.title_menu}>${flavor.price}</p>
                </div>
                <span className={styles.description_menu}>
                  {flavor.description}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
