import styles from './index.less';

export default function BoxGroup8() {
    return (
        <div className={styles.box_group}>
            <div className={styles.box}>
                <div className={styles.box}>
                    <div className={styles.main}>
                        <div className={styles.box_slice}>
                            <h2 className={styles.htitle}><span className={styles.title}><b> 联系方式 | CONTACT US</b></span></h2>
                            <div className={styles.box_content}>
                                <div className={styles.box_style}>
                                    <div className={styles.box_contact}>
                                        <h3 className={styles.contact}>
                                            <span className={styles.title}>联系方式</span>
                                            <span className={styles.titlee}>Contact Us</span>
                                        </h3>
                                        <div className={styles.box_plugin}>
                                            <ul className={styles.n4}>
                                                <li className={styles.l1}>
                                                    <div className={styles.title}>报名咨询</div>
                                                    <div className={styles.people}>刘荣荣（中国）</div>
                                                    <div className={styles.tel}>电话：8610 6415 8500 分机 6115</div>
                                                    <div className={styles.email}>邮件：sevenliu@zero2ipo.com.cn</div>
                                                </li>
                                                <li>
                                                    <div className={styles.title}>会议合作</div>
                                                    <div className={styles.people}>焦宁（中国）</div>
                                                    <div className={styles.tel}>电话：8610 6415 8500 分机 6509</div>
                                                    <div className={styles.email}>邮件：jessicajiao@zero2ipo.com.cn</div>
                                                </li>
                                                <li>
                                                    <div className={styles.title}>报名咨询</div>
                                                    <div className={styles.people}>李颖（中国）</div>
                                                    <div className={styles.tel}>电话：8621 6288 9090 分机 8014</div>
                                                    <div className={styles.email}>邮件：amberli@zero2ipo.com.cn</div>
                                                </li>
                                                <li>
                                                    <div className={styles.title}>报名咨询</div>
                                                    <div className={styles.people}>肖璐（中国）</div>
                                                    <div className={styles.tel}>电话：8610 6415 8500 分机 6209</div>
                                                    <div className={styles.email}>邮件：lucyxiao@zero2ipo.com.cn</div>
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
