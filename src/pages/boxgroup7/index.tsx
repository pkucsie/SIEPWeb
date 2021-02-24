import styles from './index.less';

export default function BoxGroup7() {
    return (
        <div className={styles.box_group}>
            <div className={styles.box}>
                <div className={styles.box}>
                    <div className={styles.main}>
                        <div className={styles.animationViewWrap}>
                            <div className={styles.box_slice}>
                                <h2 className={styles.htitle}>
                                    <span className={styles.title}>
                                        <b>在线购票 | COOPERATION</b>
                                    </span>
                                </h2>
                                <div className={styles.box_content}>
                                    <div className={styles.box_slice}>
                                        <div className={styles.box_plugin}>
                                            <div className={styles.edit_group}>
                                                <div className={styles.ticket_item}>
                                                    <div className={styles.item_hd}>
                                                        <div className={styles.u_name}>参会通道</div>
                                                        <div className={styles.u_price}>参会席位审核后获取</div>
                                                    </div>
                                                    <div className={styles.ticket_txt}>
                                                        <p>
                                                            1、获得峰会参会证1张
          </p><p>
                                                            2、参会者须提交完整信息，携带名片到场签到
          </p><p>
                                                            3、申请经组委会审核通过后，将发送短信/邮件通知
          </p><p>
                                                            4、门票数量有限，发完为止
          </p><p>
                                                            5、峰会官方组委会保留解释权
          </p>
                                                    </div>
                                                    <div className={styles.item_ft}><a href="https://event.3188.la/1961077971/SelectCate">立即报名</a></div>
                                                </div>
                                            </div>
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
