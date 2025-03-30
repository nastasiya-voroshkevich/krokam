import styles from "./Grid.module.scss";
import { data } from "./data";

export const Grid = () => {
  return (
    <div className={styles.grid}>
      {data.map((el, index) => {
        return (
          <div
            key={index}
            className={[styles.card, styles[`grid_item` + (index + 1)]].join(
              " "
            )}
          >
            <img className={styles.card_img} src={el.img} alt="card" />

            <div className={styles.card_wrapp}>
              <h4 className={styles.card_desc}>{el.desc}</h4>
              <button className={styles.btn_card}></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
