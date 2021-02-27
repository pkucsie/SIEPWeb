import styles from './index.less';

export default function BoxGroup9() {
    return (
        <div className={styles.box_group}>
            <div className={styles.box_plugin}>
                <div className={styles.box_copyright}>
                    <div className={styles.main}>
                        <div className={styles.showlogo}>
                            <img src="https://pic2.pedaily.cn/19/201903/20190312@361443.png"/>
                            <p>2020第二届滕王阁创投峰会</p>
                        </div>
                        <div className={styles.link}>
                            <ul>
                                <li><a href="http://www.zero2ipo.cn/aboutus.shtml">关于清科</a></li>
                                <li><a href="https://www.pedaily.cn/">投资界</a></li>
                                <li><a href="https://www.newseed.cn/">新芽</a></li>
                                <li>参会报名及咨询热线：<span className={styles.num}>400-600-9460</span></li>
                            </ul>
                        </div>
                        <div className={styles.code}>
                            <div className={styles.code_box}><img src="https://events.pedaily.cn/eventspic/weixinbig.jpg"/><p>清科集团微信</p></div>
                            <div className={styles.code_box}><img src="https://pic.pedaily.cn/201211/20121126@14769.jpg"/><p>投资界微信</p></div>
                        </div>
                    </div>
                    <div className={styles.copyright}>
                        <span className={styles.company}>
                            <span>@1999-2021</span>
                            <span>清科创业版权所有</span>
                        </span>
                        <span>
                            <a href="https://beian.miit.gov.cn">京ICP备17028573号-2</a>
                        </span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
