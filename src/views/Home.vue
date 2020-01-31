<template>
  <div class="home">
    <header>
      <h1><a href="/">林水溶</a></h1>
      <div>
        <a href="https://www.zhihu.com/people/linShuiRong" target="_blanket"
          >Zhihu</a
        >
        <a href="https://segmentfault.com/u/shuirong1997" target="_blanket"
          >SegmentFault</a
        >
        <a href="https://github.com/shuiRong" target="_blanket">Github</a>
        <a href="./blog/" target="_blanket">Blog</a>
        <a href="http://linshuirong.cn/about.html" target="_blanket">About</a>
        <a href="http://linshuirong.cn/resume.html" target="_blanket">Resume</a>
      </div>
    </header>
    <section>
      <p>
        谎言的代价是什么？<br />
        并非是我们会把谎言误认为真相。<br />
        真正危险的是，<br />
        我们听多了谎言，便不再能分辨出真相。<br />
        <br />
        那时我们能做什么？<br />
        除了放弃对真理的信仰，满足于谎言堆砌的故事。<br />
        我们还剩下什么？<br />
        <br />
        ——《切尔诺贝利》
      </p>
      <hello></hello>
    </section>
    <tabs></tabs>
    <hr />
    <footer>
      <p>
        Powerd by&nbsp;<a
          href="https://github.com/shuiRong/PProfile"
          target="_blanket"
          >PProfile</a
        >
      </p>
      <a href="mailto:shuirong1997@icloud.com" target="_blanket">
        <img src="@/assets/img/envelope.svg" />shuirong1997@icloud.com
      </a>
    </footer>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs";
import Hello from "@/components/Hello";

export default {
  name: "home",
  data: function() {
    return {
      count: 0
    };
  },
  components: { Tabs, Hello }
};
</script>

<style lang="scss" scoped>
.home {
  header {
    top: 0;
    padding: 0 2rem;
    position: fixed;
    height: 80px;
    width: 100vw;
    background-color: #ffffff;
    border-bottom-width: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: #161b3d;
      font-size: 35px;
    }
    a {
      cursor: pointer;
      padding: 0 2.5rem;
      color: inherit;
      text-decoration: none;
      font-weight: 500;
      line-height: 80px;
    }
  }
  section {
    p {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.6;
    }
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(248, 248, 248);
    margin-top: 80px;
    height: 523px;
    // background-image: url('~@/assets/img/wallpaper.jpg');
    // background-size: cover;
    // background-repeat: no-repeat;
  }
  hr {
    margin: auto;
    height: 0;
    width: calc(100% - 4rem);
    border-bottom: 1px solid #dae1e7;
  }
  footer {
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    color: #919296;
    font-size: 0.875;
    p {
      display: flex;
      width: fit-content;
    }
    a {
      cursor: pointer;
      color: #919296;
      text-decoration: none;
      font-size: 0.875;
      display: flex;
      align-items: center;
      img {
        width: 13px;
        height: 13px;
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
