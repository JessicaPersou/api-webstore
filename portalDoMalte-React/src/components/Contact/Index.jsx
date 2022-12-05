import styles from "./contact.module.css";

export function Contact() {
  return (
    <div className={styles.container}>
    <div className={styles.boxForm}>
      {/* AQUI VAI A MENSAGEM */}
      {/* AQUI VAI O CONTATO DO LOCAL COM MAPA */}
      <div className={styles.form}>
        <div className={styles.boxTxt}>
          <div className={styles.infoContact}>
            <label htmlFor="">NOME</label>
            <input className={styles.input} type="text" name="name" id="" />
          </div>
          <div className={styles.infoContact}>
            <label htmlFor="">DOCUMENTO</label>
            <input className={styles.input} type="text" name="name" id="" />
          </div>
          <div className={styles.infoContact}>
            <label htmlFor="">E-MAIL</label>
            <input className={styles.input} type="text" name="name" id="" />
          </div>
          <div className={styles.infoContact}>
            <label htmlFor="">NÚMERO DO PEDIDO</label>
            <input className={styles.input} type="text" name="name" id="" />
          </div>
        </div>

        <div className={styles.txtArea}>
          <label htmlFor="">MENSAGEM</label>
          <textarea name="" id="" cols="70" rows="17" />
        </div>
      </div>
      
      <div className={styles.btn}>
        <button  className={styles.btnPortal} type="submit">ENVIAR</button>
      </div>
    </div>
    </div>
  );
}
