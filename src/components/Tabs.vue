<template>
  <div class="container">
    <ul>
      <li
        :class="{ active: index === i }"
        @click="onClick(i, type)"
        v-for="(type, i) in typeList"
        :key="type"
      >
        <img
          v-if="type !== 'Flutter'"
          :src="require(`@/assets/img/${type}.svg`)"
        />
        <img v-else :src="require('@/assets/img/Flutter.png')" />
        <span>{{ type }}</span>
      </li>
    </ul>
    <section>
      <div v-for="item in filterData" :key="item.name" class="project">
        <span class="icon" :style="{ 'background-color': randomColor() }">{{
          letter(item.name)
        }}</span>
        <a :href="item.link" target="_blanket">
          <strong>{{ item.name }}</strong>
          {{ item.description }}
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import findType from "@/utils/findType";
const a = ["React", "Vue"];

export default {
  name: "Tabs",
  data() {
    return {
      dataList: require("@/assets/data.js").default,
      index: 0,
      currentType: ""
    };
  },
  computed: {
    filterData() {
      if (this.index === 0) return this.dataList;
      return this.dataList.filter(item => item.type === this.currentType);
    },
    typeList() {
      return findType(this.dataList);
    }
  },
  methods: {
    randomColor() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    },
    letter(name) {
      return name.charAt(0).toUpperCase();
    },
    onClick(index, type) {
      this.index = index;
      this.currentType = type;
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  padding: 0 2rem;
  width: 100%;
  height: 500px;
  ul {
    display: flex;
    list-style-type: none;
    border-bottom: 1px solid #dae1e7;
    margin-bottom: 2.5rem;
    color: #23252c;
    font-weight: 500;
    li {
      cursor: pointer;
      padding: 1rem 0 0.75rem 0;
      margin-right: 2rem;
      border-bottom-width: 3px;
      border-bottom-color: transparent;
      display: flex;
      align-items: center;
      img {
        display: block;
        width: 20px;
        height: 20px;
        margin-right: 0.75rem;
      }
      span {
        cursor: pointer;
      }
      &.active {
        border-bottom: 3px solid #e13f5e;
      }
    }
  }
  section {
    display: flex;
    flex-wrap: wrap;
    .project {
      width: 29vw;
      box-sizing: border-box;
      margin-bottom: 2.5rem;
      margin-right: 2vw;
      display: flex;
      .icon {
        width: 40px;
        height: 40px;
        display: block;
        line-height: 40px;
        text-align: center;
        color: #ffffff;
        font-weight: bold;
        font-size: 1.5rem;
        border-radius: 0.25rem;
        background: rgb(38, 78, 138);
      }
      > a {
        cursor: pointer;
        width: calc(100% - 70px);
        color: inherit;
        text-decoration: none;
        line-height: 1.5;
        margin-left: 20px;
        font-family: AvenirNext, Source Sans Pro, system-ui, BlinkMacSystemFont,
          -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
          Droid Sans, Helvetica Neue, sans-serif;
        strong {
          margin-right: 0.25rem;
        }
      }
    }
  }
}
</style>
