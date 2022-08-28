import styles from './Title.module.scss';
import cx from 'classnames';

interface TitleProps {
  title: string;
  /// left or right
  direction: string;
}

const Title = ({ title, direction }: TitleProps) => {
  return (
    <div className={styles.container}>
      <div className={cx(styles.space, {[styles.line]: direction === 'left'})} />
      <p className={styles.title}>{title}</p>
      <div className={cx(styles.space, {[styles.line]: direction === 'right'})} />
    </div>
  )
}

export default Title;