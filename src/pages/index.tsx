import Header from './header';
import styles from './index.less';
import Banner from './banner';
import BoxGroup1 from './boxgroup1/index';

export default function IndexPage() {
  return (
    <div className={styles.title}>
      <Header />
      <Banner />
      <BoxGroup1 />
    </div>
  );
}
