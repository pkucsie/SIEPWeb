import styles from './index.less';

export default function BoxGroup1() {
  return (
      <div className={styles.box_group}>
        <div className={styles.plugin_timer}>
        <div className={styles.main}>
            <div className={styles.animationViewWrap}>
                <div className={styles.boxtimer}>
                    <div className={styles.boxtime}>
                        <div className={styles.boxl}>
                            <div className={styles.boxll}>
                                <span className={styles.editt}>
                                    <i className={styles.icontime}></i>
                                    2020年12月10日 - 12日（星期四-星期六）
                                </span>
                                <span className={styles.editta}>
                                    <i className={styles.iconaddr}>
                                        <span className={styles.iconfont}>&#xe609;</span>
                                    </i>
                                    南昌市 / 1000人
                                </span>
                            </div>
                        </div>
                        <div className={styles.boxr}>
                            <div className={styles.timeitem}>
                                <div className={styles.timeend}>大会已结束</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
  );
}
