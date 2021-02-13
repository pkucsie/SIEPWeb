import Header from './header';
import styles from './index.less';
import Banner from './banner';
import BoxGroup from './boxgroup/index';

export default function IndexPage() {
  return (
    <div className={styles.title}>
      <Header />
      <Banner />
      <BoxGroup />
    </div>
  );
}
