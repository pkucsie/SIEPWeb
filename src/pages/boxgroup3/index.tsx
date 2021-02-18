import styles from './index.less';

export default function BoxGroup3() {
  return (
    <div className={styles.box_group}>
        <div className={styles.box}>
            <div className={styles.main}>
                <div className={styles.animationViewWrap}>
                    <div className={styles.box_slice}>
                        <h2 className={styles.htitle}>
                            <span className={styles.title}>
                                <b>大会议程 | AGENDA</b>
                            </span>
                        </h2>
                        <div className={styles.box_content}>
                            <div className={styles.box_plugin}>
                                <div className={styles.box_tabs}>
                                    <ul className={styles.tab_nav}>
                                        <li className={styles.on}><span>2020年12月10日(星期四)</span></li>
                                        <li><span>2020年12月11日(星期五)</span></li>
                                        <li><span>2020年12月12日(星期六)</span></li>
                                    </ul>
                                </div>
                                <div className={styles.tab_content}>
                                    <div className={styles.agenda_topic}>
                                        <ul>
                                            <li><div className={styles.time}>09:30-22:00</div><div className={styles.info}><div className={styles.title}>嘉宾报到</div></div></li>
                                            <li className={styles.topic}><div className={styles.time}></div><div className={styles.info}><div className={styles.title}>特色活动</div></div></li>
                                            <li><div className={styles.time}>18:30-20:00</div><div className={styles.info}><div className={styles.title}>招待晚宴（定向邀约）</div></div></li>
                                        </ul>
                                    </div>
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
