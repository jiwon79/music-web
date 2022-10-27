import styles from './NotYet.module.scss';

const NotYet = ({ title }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default NotYet;
