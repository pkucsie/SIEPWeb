import Header from './header';
import styles from './index.less';
import Banner from './banner';
import BoxGroup1 from './boxgroup1/index';
import BoxGroup2 from './boxgroup2/index';

export default function IndexPage() {
  return (
    <div className={styles.title}>
      <Header />
      <Banner />
      <BoxGroup1 />
      <BoxGroup2 />
    </div>
  );
}
