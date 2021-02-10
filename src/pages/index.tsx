import Header from './header';
import styles from './index.less';
import Banner from './banner';

export default function IndexPage() {
  return (
    <div className={styles.title}>
      <Header />
      <Banner />
    </div>
  );
}
