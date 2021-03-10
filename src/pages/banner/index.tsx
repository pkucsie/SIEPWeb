import styles from './index.less';

// export default function Banner() {
//   let liContribute = {
//     background:"#24418c url('https://events.pedaily.cn/eventspic/202012/20201204161136810.jpg') no-repeat top center",
//     width:"100%",
//     height:"400px"
//   };
//   return (
//     <div className={styles.banner}>
//       <div className={styles.bannercontent}>
//           <ul>
//             <li style={liContribute}></li>
//           </ul>
//       </div>
//     </div>
//   );
// }

import React, { Component } from 'react';
import axios from 'axios';

class Banner extends Component {
  state = {
    initView: true,
    banners: [],
    loading: false,
    errorMsg: '',
  };
  componentDidMount() {
    //this.autoFreshTime()
    axios.defaults.withCredentials = true;

    //   const url = `http://127.0.0.1:8011/api/v1/home/vipguest?format=json`
    //   this.setState({ initView: false, loading: true })

    this.getJsonData();
  }
  getJsonData = () => {
    const _this = this;
    axios
      .get('http://127.0.0.1:8011/api/v1/home/slider?format=json')
      .then(function (response) {
        let json = response.data.data;
        _this.setState({ banners: json });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // src={require("../../assets/images/20121126@14769.jpg")}
  render() {
    const { initView, loading, banners, errorMsg } = this.state;
    let bannerimg = '../../assets/images/banner.png';
    let liContribute = {
      //background:'#24418c url("../../../src/assets/images/banner.png") no-repeat top center',
      background:
        '#24418c url("http://127.0.0.1:8011/media/pic/banner.png") no-repeat top center',
      width: '100%',
      height: '400px',
    };
    // banners.map((user, index) => (
    //   liContribute = {
    //     background:'#24418c url('+{user.img}+') no-repeat top center',
    //     width:"100%",
    //     height:"400px"
    //   };
    //   ));

    return (
      <div className={styles.banner}>
        <div className={styles.bannercontent}>
          <ul>
            <li style={liContribute}></li>
          </ul>
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

export default Banner;
