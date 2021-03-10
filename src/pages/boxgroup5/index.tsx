import styles from './index.less';

import React, { Component } from 'react';
import axios from 'axios';
//import '../styles/table.styl'
import logo from '../static/logo2.png';

class BoxGroup5 extends Component {
  state = {
    initView: true,
    viplist: [],
    loading: false,
    errorMsg: '',
  };
  componentDidMount() {
    //this.autoFreshTime()
    axios.defaults.withCredentials = true;

    //const {searchName} = newProps
    const url = `http://127.0.0.1:8011/api/v1/home/vipguest?format=json`;
    this.setState({ initView: false, loading: true });
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
      .get('http://127.0.0.1:8011/api/v1/home/vipguest?format=json')
      .then(function (response) {
        let json = response.data.data;
        _this.setState({ viplist: json });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { initView, loading, viplist, errorMsg } = this.state;

    return (
      <div className={styles.box_group}>
        <div className={styles.box}>
          <div className={styles.main}>
            <div className={styles.animationViewWrap}>
              <div className={styles.box_slice}>
                <h2 className={styles.htitle}>
                  <span className={styles.title}>
                    <b>演讲嘉宾 | GUESTS</b>
                  </span>
                </h2>
                <div className={styles.box_content}>
                  <div className={styles.style}>
                    <div className={styles.box_people}>
                      <h3>
                        <span>
                          （按出席环节及嘉宾姓氏音序排列，最终以现场为准）
                        </span>
                      </h3>
                      <div className={styles.peoplelist}>
                        <ul>
                          {viplist.map((user, index) => (
                            <li key={user.id}>
                              <div className={styles.img}>
                                <img src={user.avatar} />
                              </div>
                              <div className={styles.txt}>
                                <h4 className={styles.name}>{user.name}</h4>
                                <p>{user.introduction}</p>
                              </div>
                              <div></div>
                            </li>
                          ))}
                          {/* <li>
                                                    <div className={styles.img}><img src="https://events.pedaily.cn/eventspic/202012/20201205202301256.png"/></div>
                                                    <div className={styles.txt}><h4 className={styles.name}>刘逖</h4><p>上海证券交易所  副总经理</p></div>
                                                    <div></div>
                                                </li> */}
                        </ul>
                      </div>
                      <div className={styles.clear}></div>
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

  autoFreshTime = () => {};
}

export default BoxGroup5;
