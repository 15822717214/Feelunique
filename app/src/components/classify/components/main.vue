<template>
  <div class="main">
    <el-tabs
      :tab-position="tabPosition"
      type="card"
      @tab-click="handleClick"
      :class="index == activeIndex? 'active':''"
    >
      <!-- 点击变红的样式就上去 -->
      <el-tab-pane label="面部护肤" name="first">
        <!-- 面部护肤主题内容 -->
        <div class="wrapper" ref="box" style="height:11.3602rem">
          <div class="content bq">
            <div class="content_one">
              <div class="content_one_header">
                <img
                  src="https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3820.jpg"
                >
              </div>
              <div class="content_one_main">
                <div v-for="(item,index) in goodsList" :key="index">
                  <img :src="item.img">
                  <span>{{item.goodName}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="魅力彩妆" name="second">
        <!-- 魅力彩妆部分 -->
        <div class="content_two">
          <div class="content_two_header">
            <img
              src="https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3726.jpg"
            >
          </div>
          <div class="content_two_main">
            <div v-for="(item,index) in goodsListTwo" :key="index">
              <img :src="item.img">
              <span>{{item.goodName}}</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="沐浴美体" name="third">
        <!-- 沐浴美体部分 -->
        <div class="content_thr">
          <div class="content_thr_header">
            <img
              src="https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3734.jpg"
            >
          </div>
          <div class="content_thr_main">
            <div v-for="(item,index) in goodsList" :key="index">
              <img :src="item.img">
              <span>{{item.goodName}}</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="洗护造型" name="fourth">
        <!-- 洗护造型部分 -->
        <div class="content_four">
          <div class="content_four_header">
            <img
              src="https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3811.jpg"
            >
          </div>
          <div class="content_four_main">
            <div v-for="(item,index) in goodsList" :key="index">
              <img :src="item.img">
              <span>{{item.goodName}}</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="防晒护理" name="fifth">
        <!-- 防晒护理部分 -->
        <div class="content_five">
          <div class="content_five_header">
            <img
              src="https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3788.jpg"
            >
          </div>
          <div class="content_five_main">
            <div v-for="(item,index) in goodsList" :key="index">
              <img :src="item.img">
              <span>{{item.goodName}}</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="健康营养" name="sixth">
        <!--  健康营养部分 -->
        <div class="content_six">
          <div class="content_six_header">
            <img
              src="https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3750.jpg"
            >
          </div>
          <div class="content_six_main">
            <div v-for="(item,index) in goodsList" :key="index">
              <img :src="item.img">
              <span>{{item.goodName}}</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="男士护理" name="seventh">
        <!--  男士护理部分 -->
        <div class="content_sev">
          <div class="content_sev_header">
            <img
              src="https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3744.jpg"
            >
          </div>
          <div class="content_sev_main">
            <div v-for="(item,index) in goodsList" :key="index">
              <img :src="item.img">
              <span>{{item.goodName}}</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="美容电器" name="eighth">
        <!--  美容电器部分 -->
        <div class="content_eig">
          <div class="content_eig_header">
            <img
              src="https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3861.jpg"
            >
          </div>
          <div class="content_eig_main">
            <div v-for="(item,index) in goodsList" :key="index">
              <img :src="item.img">
              <span>{{item.goodName}}</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="礼品专区" name="ninth">
        <!--  礼品专区部分 -->
        <div class="content_nin">
          <div class="content_nin_header">
            <img
              src="https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3737.jpg"
            >
          </div>
          <div class="content_nin_main">
            <div v-for="(item,index) in goodsList" :key="index">
              <img :src="item.img">
              <span>{{item.goodName}}</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="旅行专区" name="tenth">
        <!--  旅行专区部分 -->
        <div class="content_ten">
          <div class="content_ten_header">
            <img
              src="https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3858.jpg"
            >
          </div>
          <div class="content_ten_main">
            <div v-for="(item,index) in goodsList" :key="index">
              <img :src="item.img">
              <span>{{item.goodName}}</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      tabPosition: "left",
      activeIndex: -1,
      goodsList: [
        {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3829.jpg",
          goodName: "保湿面霜"
        },
        {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3856.jpg",
          goodName: "洁面产品"
        },
        {
          img:
            "https://source-feelunique.azoyacdn.com/skin/frontend/PlumTree/fu_mb/images/fu-loading.png",
          goodName: "面膜贴膜"
        },
        {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3934.jpg",
          goodName: "痘痘痔疮"
        },
        {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3821.jpg",
          goodName: "腿部护理"
        },
        {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3826.jpg",
          goodName: "唇部护理"
        },
        {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3824.jpg",
          goodName: "抗老化"
        },
        {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3898.jpg",
          goodName: "面部护理"
        },
        {
          img:
            "https://source-feelunique.azoyacdn.com/skin/frontend/PlumTree/fu_mb/images/fu-loading.png",
          goodName: "韩式护肤"
        },
        {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3910.jpg",
          goodName: "爽肤水"
        },
        {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/4028.jpg",
          goodName: "去角质/磨砂"
        },
        {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3848.jpg",
          goodName: "专业药妆"
        },
        {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/4026.jpg",
          goodName: "有机护肤"
        },
        {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/4176.jpg",
          goodName: "颈部护肤"
        },
        {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/4053.jpg",
          goodName: "美肤营养"
        },
        {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/4153.jpg",
          goodName: "礼品套装"
        }
      ],
      goodsListTwo:[
        {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3727.jpg",
          goodName: "面部底妆"
        },
         {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3790.jpg",
          goodName: "唇部彩妆"
        },
         {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3730.jpg",
          goodName: "眉部彩妆"
        },
         {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3882.jpg",
          goodName: "妆前隔离"
        },
         {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3829.jpg",
          goodName: "保湿面霜"
        },
         {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3829.jpg",
          goodName: "保湿面霜"
        },
         {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3829.jpg",
          goodName: "保湿面霜"
        },
         {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3829.jpg",
          goodName: "保湿面霜"
        },
         {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3829.jpg",
          goodName: "保湿面霜"
        },
         {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3829.jpg",
          goodName: "保湿面霜"
        },
         {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3829.jpg",
          goodName: "保湿面霜"
        },
         {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3829.jpg",
          goodName: "保湿面霜"
        },
         {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3829.jpg",
          goodName: "保湿面霜"
        },
         {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3829.jpg",
          goodName: "保湿面霜"
        },
         {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3829.jpg",
          goodName: "保湿面霜"
        },
         {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3829.jpg",
          goodName: "保湿面霜"
        },
         {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3829.jpg",
          goodName: "保湿面霜"
        },
         {
          img:
            "https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/small_image/3829.jpg",
          goodName: "保湿面霜"
        },
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      // this.activeIndex = index;
      // console.log(tab, event);
      // alert("haha")
    }
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    let scroll = new BScroll(wrapper);
    this.scroll = new BScroll(this.$refs.box, {
      scrollY: true,
      click: true
    });
    console.log(this.scroll);
  }
};
</script>

<style lang="scss">
.main {
  width: 100%;
  height: 100%;
  .active {
    color: red;
  }
  .content_one {
    width: 100%;
    height: 100%;
    background: #ffffff;
    .wrapper{
		  height:11.36rem;
	   }
    .content_one_header {
      width: 5.7rem;
      height: 3.4284rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      img {
        width: 5.3rem;
        height: 3.0284rem;
      }
    }
    .content_one_main {
      width: 5.7rem;
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      div {
        width: 1.56rem;
        height: 2.4298rem;
        background: #fff;
        img {
          width: 1.56rem;
          height: 1.56rem;
        }
        span {
          display: block;
          width: 1.56rem;
          height: 0.27rem;
          text-align: center;
          margin-top: 0.18rem;
          font-family: Helvetica Neue;
        }
      }
    }
  }
  .content_two {
    width: 100%;
    height: 100%;
    background: #ffffff;
    .content_two_header {
      width: 5.7rem;
      height: 3.4284rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      img {
        width: 5.3rem;
        height: 3.0284rem;
      }
    }
    .content_two_main {
      width: 5.7rem;
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      div {
        width: 1.56rem;
        height: 2.4298rem;
        background: #fff;
        img {
          width: 1.56rem;
          height: 1.56rem;
        }
        span {
          display: block;
          width: 1.56rem;
          height: 0.27rem;
          text-align: center;
          margin-top: 0.18rem;
          font-family: Helvetica Neue;
        }
      }
    }
  }
  .content_thr {
    width: 100%;
    height: 100%;
    background: #ffffff;
    .content_thr_header {
      width: 5.7rem;
      height: 3.4284rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      img {
        width: 5.3rem;
        height: 3.0284rem;
      }
    }
    .content_thr_main {
      width: 5.7rem;
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      div {
        width: 1.56rem;
        height: 2.4298rem;
        background: #fff;
        img {
          width: 1.56rem;
          height: 1.56rem;
        }
        span {
          display: block;
          width: 1.56rem;
          height: 0.27rem;
          text-align: center;
          margin-top: 0.18rem;
          font-family: Helvetica Neue;
        }
      }
    }
  }
  .content_four {
    width: 100%;
    height: 100%;
    background: #ffffff;
    .content_four_header {
      width: 5.7rem;
      height: 3.4284rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      img {
        width: 5.3rem;
        height: 3.0284rem;
      }
    }
    .content_four_main {
      width: 5.7rem;
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      div {
        width: 1.56rem;
        height: 2.4298rem;
        background: #fff;
        img {
          width: 1.56rem;
          height: 1.56rem;
        }
        span {
          display: block;
          width: 1.56rem;
          height: 0.27rem;
          text-align: center;
          margin-top: 0.18rem;
          font-family: Helvetica Neue;
        }
      }
    }
  }
  .content_five {
    width: 100%;
    height: 100%;
    background: #ffffff;
    .content_five_header {
      width: 5.7rem;
      height: 3.4284rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      img {
        width: 5.3rem;
        height: 3.0284rem;
      }
    }
    .content_five_main {
      width: 5.7rem;
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      div {
        width: 1.56rem;
        height: 2.4298rem;
        background: #fff;
        img {
          width: 1.56rem;
          height: 1.56rem;
        }
        span {
          display: block;
          width: 1.56rem;
          height: 0.27rem;
          text-align: center;
          margin-top: 0.18rem;
          font-family: Helvetica Neue;
        }
      }
    }
  }
  .content_six {
    width: 100%;
    height: 100%;
    background: #ffffff;
    .content_six_header {
      width: 5.7rem;
      height: 3.4284rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      img {
        width: 5.3rem;
        height: 3.0284rem;
      }
    }
    .content_six_main {
      width: 5.7rem;
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      div {
        width: 1.56rem;
        height: 2.4298rem;
        background: #fff;
        img {
          width: 1.56rem;
          height: 1.56rem;
        }
        span {
          display: block;
          width: 1.56rem;
          height: 0.27rem;
          text-align: center;
          margin-top: 0.18rem;
          font-family: Helvetica Neue;
        }
      }
    }
  }
  .content_sev {
    width: 100%;
    height: 100%;
    background: #ffffff;
    .content_sev_header {
      width: 5.7rem;
      height: 3.4284rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      img {
        width: 5.3rem;
        height: 3.0284rem;
      }
    }
    .content_sev_main {
      width: 5.7rem;
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      div {
        width: 1.56rem;
        height: 2.4298rem;
        background: #fff;
        img {
          width: 1.56rem;
          height: 1.56rem;
        }
        span {
          display: block;
          width: 1.56rem;
          height: 0.27rem;
          text-align: center;
          margin-top: 0.18rem;
          font-family: Helvetica Neue;
        }
      }
    }
  }
  .content_eig {
    width: 100%;
    height: 100%;
    background: #ffffff;
    .content_eig_header {
      width: 5.7rem;
      height: 3.4284rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      img {
        width: 5.3rem;
        height: 3.0284rem;
      }
    }
    .content_eig_main {
      width: 5.7rem;
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      div {
        width: 1.56rem;
        height: 2.4298rem;
        background: #fff;
        img {
          width: 1.56rem;
          height: 1.56rem;
        }
        span {
          display: block;
          width: 1.56rem;
          height: 0.27rem;
          text-align: center;
          margin-top: 0.18rem;
          font-family: Helvetica Neue;
        }
      }
    }
  }
  .content_nin {
    width: 100%;
    height: 100%;
    background: #ffffff;
    .content_nin_header {
      width: 5.7rem;
      height: 3.4284rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      img {
        width: 5.3rem;
        height: 3.0284rem;
      }
    }
    .content_nin_main {
      width: 5.7rem;
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      div {
        width: 1.56rem;
        height: 2.4298rem;
        background: #fff;
        img {
          width: 1.56rem;
          height: 1.56rem;
        }
        span {
          display: block;
          width: 1.56rem;
          height: 0.27rem;
          text-align: center;
          margin-top: 0.18rem;
          font-family: Helvetica Neue;
        }
      }
    }
  }
  .content_ten {
    width: 100%;
    height: 100%;
    background: #ffffff;
    .content_ten_header {
      width: 5.7rem;
      height: 3.4284rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      img {
        width: 5.3rem;
        height: 3.0284rem;
      }
    }
    .content_ten_main {
      width: 5.7rem;
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      div {
        width: 1.56rem;
        height: 2.4298rem;
        background: #fff;
        img {
          width: 1.56rem;
          height: 1.56rem;
        }
        span {
          display: block;
          width: 1.56rem;
          height: 0.27rem;
          text-align: center;
          margin-top: 0.18rem;
          font-family: Helvetica Neue;
        }
      }
    }
  }

  .el-tabs__nav-scroll {
    height: 11.3602rem;
    // border-right: 1px solid #c8c8c8;
    border-bottom: 1px solid #c8c8c8;
    .el-tabs__item {
      width: 1.8rem;
      height: 0.9rem;
      text-align: center;
      line-height: 0.9rem;
      border: 1px solid #e8e8e8;
      font-family: Helvetica Neue;
      font-size: 0.26rem;
      color: #000;
    }
  }
}
</style>