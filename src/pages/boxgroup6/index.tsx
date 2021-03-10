import styles from './index.less';
import React, { Component } from 'react';
import axios from 'axios';

class BoxGroup6 extends Component {
  state = {
    initView: true,
    orglist: [],
    loading: false,
    errorMsg: '',
  };
  componentDidMount() {
    //this.autoFreshTime()
    axios.defaults.withCredentials = true;

    //const {searchName} = newProps
    //   const url = `http://127.0.0.1:8011/api/v1/home/vipguest?format=json`
    //   this.setState({ initView: false, loading: true })
    // try {
    //   let res = axios.get(url);
    //   console.log(res);
    //   this.setState({ viplist:res.data.data })
    // } catch(e) {
    //   this.setState({ loading: false, errorMsg: e.message })
    //   console.log("Oops, error", e);
    // }
    this.getJsonData();
  }
  getJsonData = () => {
    const _this = this;
    axios
      .get('http://127.0.0.1:8011/api/v1/home/org?format=json')
      .then(function (response) {
        let json = response.data.data;
        _this.setState({ orglist: json });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { initView, loading, orglist, errorMsg } = this.state;

    return (
      <div className={styles.box_group}>
        <div className={styles.box}>
          <div className={styles.main}>
            <div className={styles.animationViewWrap}>
              <div className={styles.box_slice}>
                <h2 className={styles.htitle}>
                  <span className={styles.title}>
                    <b>组织机构 | ORGANIZATION</b>
                  </span>
                </h2>
                <div className={styles.box_content}>
                  <div className={styles.box_slice}>
                    <div className={styles.box_media}>
                      <h3>
                        <span className={styles.htitle}>指导单位</span>
                      </h3>
                      <div className={styles.plugin_media}>
                        <ul>
                          <li>
                            <img src="https://events.pedaily.cn/eventspic/201903/20190318165800713.png" />
                          </li>
                          <div className={styles.clear}></div>
                        </ul>
                      </div>
                    </div>
                    <div className={styles.box_media}>
                      <h3>
                        <span className={styles.htitle}>主办单位</span>
                      </h3>
                      <div className={styles.plugin_media}>
                        <ul>
                          {orglist.map((org, index) => (
                            <li>
                              <img key={org.id} src={org.avatar} />
                            </li>
                          ))}
                          <div className={styles.clear}></div>
                        </ul>
                      </div>
                    </div>
                    <div className={styles.box_media}>
                      <h3>
                        <span className={styles.htitle}>承办单位</span>
                      </h3>
                      <div className={styles.plugin_media}>
                        <ul>
                          <li>
                            <img src="https://events.pedaily.cn/eventspic/202011/20201112144847800.png" />
                          </li>
                          <li>
                            <img src="https://events.pedaily.cn/eventspic/202011/20201130154944174.png" />
                          </li>
                          <li>
                            <img src="https://events.pedaily.cn/eventspic/201905/20190531193342567.png" />
                          </li>
                          <li>
                            <img src="https://events.pedaily.cn/eventspic/201910/20191028150046587.jpg" />
                          </li>
                          <li>
                            <img src="https://events.pedaily.cn/eventspic/202007/20200701182444124.jpg" />
                          </li>
                          <li>
                            <img src="https://events.pedaily.cn/eventspic/202012/20201204133633511.png" />
                          </li>
                          <div className={styles.clear}></div>
                        </ul>
                      </div>
                    </div>
                    <div className={styles.box_media}>
                      <h3>
                        <span className={styles.htitle}>支持单位</span>
                      </h3>
                      <div className={styles.plugin_media}>
                        <ul>
                          <li>
                            <img src="https://events.pedaily.cn/eventspic/202012/20201205200152832.png" />
                          </li>
                          <li>
                            <a href="http://www.ganshang.org.cn/">
                              <img src="https://events.pedaily.cn/eventspic/202012/20201209125237195.png" />
                            </a>
                          </li>
                          <li>
                            <img src="https://events.pedaily.cn/eventspic/202012/20201209150934592.png" />
                          </li>
                          <div className={styles.clear}></div>
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
  change = () => {
    this.setState({
      scroll: true,
    });
  };
}

export default BoxGroup6;
