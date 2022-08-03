import styles from "../components/MessageCard.module.css";

function MessageCard() {
  return (
    <div className={styles.message_card}>
      <img
        className={styles.message_img}
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        alt="demo"
      />
      <p>Message here</p>
    </div>
  );
}

export default MessageCard;
