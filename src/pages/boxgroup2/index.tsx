import styles from './index.less';

export default function BoxGroup2() {
  return (
    <div className={styles.box_group}>
        <div className={styles.box}>
            <div className={styles.main}>
                <div className={styles.animationViewWrap}>
                    <div className={styles.box_slice}>
                        <h2 className={styles.htitle}>
                            <span className={styles.title}><b>大会介绍 | INTRODUCTION</b></span>
                        </h2>
                        <div className={styles.box_content}>
                            <p>&nbsp;&nbsp;&nbsp;<span>&nbsp; 当今世界，国际科技竞争日趋激烈，科技制高点向“深空、深海、深地、深蓝”拓进，知识资源成为科技创新第一要素，前沿科技成为创<span>新竞争主要焦点，推动科技创新已经成为我国实施创新驱动发展战略的核心载体和重要抓手。</span></span></p>
                        </div>
                        <div className={styles.box_content}>
                            <p>&nbsp;&nbsp;&nbsp;<span>&nbsp; 江西，正值建成江西特色区域创新体系的关键时期。顺应新一轮信息技术和科技革命发展浪潮，深入实施创新驱动发展战略，优化产业结构，推动创新要素聚集，<span>大力推进"2+6+N"产业高质量跨越式发展，推进以人工智能、5G、VR等为代表的新技术与制造产业融合发展，推进以自动化、信息化、智能化为主要代表的工业物联网</span><span>产业发展，通过创投要素聚集实现江西“作示范、勇争先”高质量发展目标，加快构建“物联江西”、“智联江西"。</span></span></p>
                        </div>
                        <div className={styles.box_content}>
                            <p>&nbsp;&nbsp;&nbsp;<span>&nbsp; 在此背景下，延续去年首届滕王阁创投峰会取得的显著效果，由江西省人民政府指导，江西省科学技术厅、江西省地方金融监督管理局、南昌市人民政府主办，青<span>云谱区人民政府、南昌市科学技术局、中科心客、梅花创投、清科集团、猎户星空联合承办的2020第二届滕王阁创投峰会将于2020年12月10-12日在江西前湖迎宾馆召</span><span>开。本次大会以“预见独角兽，智能新江西”为主题，盛邀国内知名学者、投资机构、上市公司、创业企业齐聚江西，激活江西投融资氛围，构建“科技+创新创业+创</span><span>投”协同互动发展新格局。滕阁之畔，赣江之滨，大咖云集，齐话赣鄱崛起！</span></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
