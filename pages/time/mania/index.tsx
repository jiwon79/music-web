import MainLayout from "layout/MainLayout/MainLayout";
import LinkItem from "components/common/LinkItem/LinkItem";
import styles from './mania.module.scss';

const ManiaPage = () => {
  return (
    <MainLayout title={'매니아 발굴기'}>
      <div className={styles.container}>
        <LinkItem
          title={'매니아 발굴기 1 (최신 업데이트)'}
          className={styles.last}
          url={'/time/mania/1'}
          style={{ width: '100%', height: '100px' }}
        />
        <LinkItem
          title={'매니아 발굴기 1'}
          url={'/time/mania/1'}
          style={{ width: '100%', height: '148px' }}
        />
        <LinkItem
          title={'매니아 발굴기 1'}
          url={'/time/mania/1'}
          style={{ width: '100%', height: '148px' }}
        />
        <LinkItem
          title={'매니아 발굴기 1'}
          url={'/time/mania/1'}
          style={{ width: '148px' }}
        />
        <LinkItem
          title={'매니아 발굴기 1'}
          url={'/time/mania/1'}
          style={{ width: '148px' }}
        />
      </div>
    </MainLayout>
  );
}

export default ManiaPage;
