import Header from './header';
import styles from './index.less';
import Banner from './banner';
import BoxGroup1 from './boxgroup1/index';
import BoxGroup2 from './boxgroup2/index';
import BoxGroup3 from './boxgroup3/index';
import BoxGroup4 from './boxgroup4/index';
import BoxGroup5 from './boxgroup5/index';
import BoxGroup6 from './boxgroup6/index';
import BoxGroup7 from './boxgroup7/index';
import BoxGroup8 from './boxgroup8/index';
import BoxGroup9 from './boxgroup9/index';

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
      <BoxGroup6 />
      <BoxGroup7 />
      <BoxGroup8 />
      <BoxGroup9 />
    </div>
  );
}
