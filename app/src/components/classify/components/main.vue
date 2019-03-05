<template>
  <div class="main">
    <el-tabs :tab-position="tabPosition" type="card" @tab-click="handleClick">
      <!-- 点击变红的样式就上去 -->
      <el-tab-pane label="面部护肤" name="first" v-show="flag">
        <!-- 面部护肤主题内容 -->
        <div class="wrapper" ref="box" style="height:11.3602rem">
          <div class="content bq">
            <div class="contentClassify">
              <div class="content_header" @click.stop="handlePush()">
                <img
                  src="https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3820.jpg"
                >
              </div>
              <Content-com/>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="魅力彩妆" name="second">
        <!-- 魅力彩妆部分 -->
        <div class="wrapper" ref="box" style="height:11.3602rem">
          <div class="content bq">
            <div class="contentClassify">
              <div class="content_header" @click.stop="handlePush()">
                <img
                  src=" https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3726.jpg"
                >
              </div>
              <Content-com/>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="沐浴美体" name="third">
        <!-- 沐浴美体部分 -->
        <div class="wrapper" ref="box" style="height:11.3602rem">
          <div class="content bq">
            <div class="contentClassify">
              <div class="content_header" @click.stop="handlePush()">
                <img
                  src=" https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3734.jpg"
                >
              </div>
              <Content-com/>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="洗护造型" name="fourth">
        <!-- 洗护造型部分 -->
        <div class="wrapper" ref="box" style="height:11.3602rem">
          <div class="content bq">
            <div class="contentClassify">
              <div class="content_header" @click.stop="handlePush()">
                <img
                  src=" https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3811.jpg"
                >
              </div>
              <Content-com/>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="防晒护理" name="fifth">
        <!-- 防晒护理部分 -->
       <div class="wrapper" ref="box" style="height:11.3602rem">
          <div class="content bq">
            <div class="contentClassify">
              <div class="content_header" @click.stop="handlePush()">
                <img
                  src=" https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3788.jpg"
                >
              </div>
              <Content-com/>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="健康营养" name="sixth">
        <!--  健康营养部分 -->
       <div class="wrapper" ref="box" style="height:11.3602rem">
          <div class="content bq">
            <div class="contentClassify">
              <div class="content_header" @click.stop="handlePush()">
                <img
                  src="https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3750.jpg"
                >
              </div>
              <Content-com/>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="男士护理" name="seventh">
        <!--  男士护理部分 -->
         <div class="wrapper" ref="box" style="height:11.3602rem">
          <div class="content bq">
            <div class="contentClassify">
              <div class="content_header" @click.stop="handlePush()">
                <img
                  src="https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3744.jpg"
                >
              </div>
              <Content-com/>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="美容电器" name="eighth">
        <!--  美容电器部分 -->
        <div class="wrapper" ref="box" style="height:11.3602rem">
          <div class="content bq">
            <div class="contentClassify">
              <div class="content_header" @click.stop="handlePush()">
                <img
                  src="https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3861.jpg"
                >
              </div>
              <Content-com/>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="礼品专区" name="ninth">
        <!--  礼品专区部分 -->
         <div class="wrapper" ref="box" style="height:11.3602rem">
          <div class="content bq">
            <div class="contentClassify">
              <div class="content_header" @click.stop="handlePush()">
                <img
                  src="https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3737.jpg"
                >
              </div>
              <Content-com/>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="旅行专区" name="tenth">
        <!--  旅行专区部分 -->
         <div class="wrapper" ref="box" style="height:11.3602rem">
          <div class="content bq">
            <div class="contentClassify">
              <div class="content_header" @click.stop="handlePush()">
                <img
                  src="https://source-feelunique.azoyacdn.com/media/wysiwyg/mb_category/big_image/3858.jpg"
                >
              </div>
              <Content-com/>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
import Content from "./content";
export default {
  components: {
    "Content-com": Content
  },
  data() {
    return {
      tabPosition: "left",
      activeIndex: -1,
      flag: true
    };
  },
  computed: {
    ...Vuex.mapState({
      arrClassify: state => state.classify.arrClassify
    })
  },
  created() {
    this.handleClassifyData();
  },
  methods: {
    ...Vuex.mapActions({
      handleClassifyData: "classify/handleClassifyData"
    }),
    handleClick(tab, event) {
      // this.activeIndex = index;
      // console.log(tab, event);
      // alert("haha")
    },
    handlePush() {
      // console.log(1);
      this.$router.push("/goodList");
    }
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    let scroll = new BScroll(wrapper);
    this.scroll = new BScroll(this.$refs.box, {
      scrollY: true,
      click: true,
      tap: true
    });
    console.log(this.scroll);
  }
};
</script>

<style lang="scss">
.main {
  width: 100%;
  height: 100%;
  .contentClassify {
    width: 100%;
    height: 100%;
    background: #ffffff;
    .content_header {
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