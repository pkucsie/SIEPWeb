import styles from './index.less';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.main}>
            <div className={styles.navbarheader}>
                <a href="#"></a>
            </div>
            <div className={styles.mainmenu}>
                <ul className={styles.menulist}>
                    <li className={styles.li}><a href="././">首页</a></li>
                    <li className={styles.li}><a href="./#box_group_1686">大会议程</a></li>
                    <li className={styles.li}><a href="./#box_group_1699">特色亮点</a></li>
                    <li className={styles.li}><a href="./#box_group_1700">演讲嘉宾</a></li>
                    <li className={styles.li}><a href="./#box_group_1701">组织机构</a></li>
                    <li className={styles.li}><a href="./#box_group_1705">参会指南</a></li>
                    <li className={styles.li}><a href="./#box_group_1703">会议地址</a></li>
                    <li className={styles.li}><a href="./#box_group_1704">联系方式</a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
