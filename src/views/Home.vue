<template>
  <div class="main">
    <div
      class="month-box"
      :class="{ active: item.isActive }"
      v-for="(item, index) in months"
      :key="index"
    >
      <span class="hover-month">{{item.year}}</span>
      {{item.month}}
    </div>
  </div>
</template>

<script>

  export default {
    name: 'home',
    // eslint-disable-next-line func-names
    data() {
      return {
        months: [],
        startYear: 2019,
      };
    },
    created() {
      const curDate = new Date();
      const curY = curDate.getFullYear(); // 当前年份
      const curM = curDate.getMonth() + 1; // 当前月份
      console.log(curY, curM);
      for (let i = 0; i < 20; i++) {
        const curYear = this.startYear + i;
        for (let j = 1; j < 13; j++) {
          const isActive = (curYear <= curY && j < curM);
          this.months.push({
            year: curYear,
            month: j,
            isActive,
          });
        }
      }
    },
  };
</script>

<style scoped>
  .main {
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    display: -webkit-flex; /* Safari */
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
  }

  .month-box {
    width: 8.333%;
    height: 5%;
    line-height: .15rem;
    background-color: #e3e6eb;
    opacity: .6;
    color: white;
    font-size: .05rem;
    text-align: center;
  }

  .active {
    background-color: #37cb8b;
    opacity: .8;
  }
  .month-box:hover {
    opacity: 1;
  }
  .hover-month{
    display: none;
  }
  .month-box:hover>.hover-month{
    display: inline-block;
  }
</style>
