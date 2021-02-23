import Header from './header';
import styles from './index.less';
import Banner from './banner';
import BoxGroup1 from './boxgroup1/index';
import BoxGroup2 from './boxgroup2/index';
import BoxGroup3 from './boxgroup3/index';
import BoxGroup4 from './boxgroup4/index';
import BoxGroup5 from './boxgroup5/index';

export default function IndexPage() {
  return (
    <div className={styles.title}>
      <Header />
      <Banner />
      <BoxGroup1 />
      <BoxGroup2 />
      <BoxGroup3 />
      <BoxGroup4 />
      <BoxGroup5 />
    </div>
  );
}
