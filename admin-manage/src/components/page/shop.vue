<template>
  <div v-loading.fullscreen.lock="fullscreenLoading">
    <el-row>

      <el-col :lg="4" :md="6" :sm="8" v-for="(item, key) in shopData" :key="key">
        <div class="card">
          <el-card>
            <img :src="item.imgSrc" class="image">
            <div class="detail">
              {{item.detail}}
            </div>
            <div class="content">
              <span class="address">{{item.address}}</span>
              <span class="price">{{ item.price }}</span>
              <div class="bottom clearfix">
                <span class="desc">{{ item.desc }}</span>
                <el-button type="text" class="button">查看详情</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'shop',
        fullscreenLoading: true,
        shopData: [
          {
            imgSrc: '../../static/1.jpg',
            address: '虾皇直营店',
            desc: '2-3人套餐，提供免费WiFi',
            price: '¥186',
            detail: '说起秀玉红茶坊，在武汉无人不知、无人不晓，这家深受年轻群体的喜爱的茶餐厅，分店装修风格较为统一，主打深沉、安静的氛围，既不会太过沉闷，同时也兼备一定的私密性空间。单人前往，可安静的享受专属时光，情侣、朋友携伴前往，可分享心事、趣事，商务人士，亦可前往洽谈业务，气氛不会过于严肃，就餐也不失档次。'
          },
          {
            imgSrc: '../../static/2.jpg',
            address: '鑫滏山自助寿司烤肉海鲜牛排火锅',
            desc: '午餐特价，提供免费WiFi',
            price: '¥39.9',
            detail: '仅售50元！价值100元的宵夜代金券1张，除锅底，台位，酒水饮料，套餐，特价菜外全场通用，可叠加使用，提供免费WiFi。'
          },
          {
            imgSrc: '../../static/3.jpg',
            address: '義码头火锅店',
            desc: '100元宵夜代金券1张，可叠加使用',
            price: '¥50',
            detail: '【8月18日更新】【更换菜品】因商家原因，鸡皇蛋包饭变更为黑胡椒牛柳石锅饭、法式蘑菇肠鸡扒变更为香煎铁板鸡排。给您带来不便，深表歉意。'
          },
          {
            imgSrc: '../../static/4.jpg',
            address: '菲可VICO steak&pizza',
            desc: '特惠双人餐，提供免费WiFi',
            price: '¥98',
            detail: '团购用户不可同时享受商家其他优惠酒水饮料等问题，请致电商家咨询，以商家反馈为准如部分菜品因时令或其他不可抗因素导致无法提供，店内会用等价菜品替换，具体事宜请与店内协商'
          },
          {
            imgSrc: '../../static/1.jpg',
            address: '虾皇直营店',
            desc: '2-3人套餐，提供免费WiFi',
            price: '¥186',
            detail: '1.午餐特价：周一至周五11:00-14:00 2.最多可用餐2小时3.全新推出小火锅，海鲜，新甜品，和黑椒牛排，牛排和海鲜火锅只需分别到店另加十元就可以享用哦！'
          },
          {
            imgSrc: '../../static/2.jpg',
            address: '鑫滏山自助寿司烤肉海鲜牛排火锅',
            desc: '午餐特价，提供免费WiFi',
            price: '¥39.9',
            detail: '团购用户不可同时享受商家其他优惠酒水饮料等问题，请致电商家咨询，以商家反馈为准如部分菜品因时令或其他不可抗因素导致无法提供，店内会用等价菜品替换，具体事宜请与店内协商'
          },
          {
            imgSrc: '../../static/3.jpg',
            address: '義码头火锅店',
            desc: '100元宵夜代金券1张，可叠加使用',
            price: '¥50',
            detail: '1.午餐特价：周一至周五11:00-14:00 2.最多可用餐2小时3.全新推出小火锅，海鲜，新甜品，和黑椒牛排，牛排和海鲜火锅只需分别到店另加十元就可以享用哦！'
          },
          {
            imgSrc: '../../static/4.jpg',
            address: '菲可VICO steak&pizza',
            desc: '特惠双人餐，提供免费WiFi',
            price: '¥98',
            detail: '团购用户不可同时享受商家其他优惠酒水饮料等问题，请致电商家咨询，以商家反馈为准如部分菜品因时令或其他不可抗因素导致无法提供，店内会用等价菜品替换，具体事宜请与店内协商'
          },
          {
            imgSrc: '../../static/3.jpg',
            address: '義码头火锅店',
            desc: '100元宵夜代金券1张，可叠加使用',
            price: '¥50',
            detail: '说起秀玉红茶坊，在武汉无人不知、无人不晓，这家深受年轻群体的喜爱的茶餐厅，分店装修风格较为统一，主打深沉、安静的氛围，既不会太过沉闷，同时也兼备一定的私密性空间。单人前往，可安静的享受专属时光，情侣、朋友携伴前往，可分享心事、趣事，商务人士，亦可前往洽谈业务，气氛不会过于严肃，就餐也不失档次。'
          },
          {
            imgSrc: '../../static/4.jpg',
            address: '菲可VICO steak&pizza',
            desc: '特惠双人餐，提供免费WiFi',
            price: '¥98',
            detail: '1.午餐特价：周一至周五11:00-14:00 2.最多可用餐2小时3.全新推出小火锅，海鲜，新甜品，和黑椒牛排，牛排和海鲜火锅只需分别到店另加十元就可以享用哦！'
          },
          {
            imgSrc: '../../static/3.jpg',
            address: '義码头火锅店',
            desc: '100元宵夜代金券1张，可叠加使用',
            price: '¥50',
            detail: '团购用户不可同时享受商家其他优惠酒水饮料等问题，请致电商家咨询，以商家反馈为准如部分菜品因时令或其他不可抗因素导致无法提供，店内会用等价菜品替换，具体事宜请与店内协商'
          },
          {
            imgSrc: '../../static/4.jpg',
            address: '菲可VICO steak&pizza',
            desc: '特惠双人餐，提供免费WiFi',
            price: '¥98',
            detail: '说起秀玉红茶坊，在武汉无人不知、无人不晓，这家深受年轻群体的喜爱的茶餐厅，分店装修风格较为统一，主打深沉、安静的氛围，既不会太过沉闷，同时也兼备一定的私密性空间。单人前往，可安静的享受专属时光，情侣、朋友携伴前往，可分享心事、趣事，商务人士，亦可前往洽谈业务，气氛不会过于严肃，就餐也不失档次。'
          }
        ]
      }
    },
    created () {
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 1000)
    },
    methods: {
      handleClick: () => {
        alert('111111111')
      }
    }
  }
</script>

<style scoped>
  .card {
    height: 285px;
    position: relative;
    margin: 10px;
  }

  .bottom {
    margin-top: 10px;
    line-height: 12px;
  }

  .detail {
    height: 52%;
    overflow: hidden;
    text-align: left;
    line-height: 25px;
    padding: 20px;
    padding-bottom: 0;
    transform: scaleY(0);
    transform-origin: 0 0;
    transition: all .5s linear;
    position: absolute;
    left: 0;
    top: 0;
  }

  .el-card {
    height: 285px;
  }

  .card:hover {
    transition: all 0.5s;
    transform: scale(1.02, 1.02);
  }

  .card:hover .detail {
    background-color: rgba(255, 255, 255, 0.5);
    transform: scaleY(1);
  }

  .card:hover .image {
    filter: blur(5px);
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .content {
    margin-top: 10px;
    text-align: left;
  }

  .address {
    font-weight: bold;
  }

  .desc {
    font-size: 14px;
  }

  .price {
    color: #f00;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
