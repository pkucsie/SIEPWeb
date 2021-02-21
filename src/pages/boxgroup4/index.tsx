import styles from './index.less';

export default function BoxGroup4() {
    return (
        <div className={styles.box_group}>
            <div className={styles.box}>
                <div className={styles.main}>
                    <div className={styles.animationViewWrap}>
                        <div className={styles.box_slice}>
                            <h2 className={styles.htitle}>
                                <span className={styles.title}>
                                    <b>峰会亮点 | HIGHLIGHTS</b>
                                </span>
                            </h2>
                            <div className={styles.box_content}>
                                <div className={styles.box_slice}>
                                    <div className={styles.box_plugin}>
                                        <div className={styles.fluid_first}>
                                            <ul className={styles.editgroup}>
                                                <li className={styles.editdot}>
                                                    <div className={styles.img}>
                                                        <img src="https://events.pedaily.cn/eventspic/201807/20180730103457999.jpg" />
                                                    </div>
                                                    <div className={styles.mask}>
                                                        <div className={styles.title}>专场路演</div>
                                                    </div>
                                                </li>
                                                <li className={styles.editdot}>
                                                    <div className={styles.img}>
                                                        <img src="https://events.pedaily.cn/eventspic/201807/20180721170115999.jpg" />
                                                    </div>
                                                    <div className={styles.mask}>
                                                        <div className={styles.title}>专场路演</div>
                                                    </div>
                                                </li>
                                                <li className={styles.editdot}>
                                                    <div className={styles.img}>
                                                        <img src="https://events.pedaily.cn/eventspic/201807/20180721170129999.jpg" />
                                                    </div>
                                                    <div className={styles.mask}>
                                                        <div className={styles.title}>闭门座谈会</div>
                                                    </div>
                                                </li>
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
