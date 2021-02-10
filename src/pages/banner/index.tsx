import styles from './index.less';

export default function Banner() {
  let liContribute = {
    background:"#24418c url('https://events.pedaily.cn/eventspic/202012/20201204161136810.jpg') no-repeat top center",
    width:"100%",
    height:"400px"
  };
  return (
    <div className={styles.banner}>
      <div className={styles.bannercontent}>
          <ul>
            <li style={liContribute}></li>
          </ul>
      </div>
    </div>
  );
}
