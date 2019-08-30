<template>
  <div class="main">
    <div class="month-box">{{year}} {{month}}</div>
    <div
      class="day-box"
      :class="{ active: item.isActive }"
      v-for="(item, index) in days"
      :key="index"
    >
      <span class="hover-day">{{item.year}} {{item.month}}</span>
      {{item.day}}
    </div>
  </div>
</template>

<script>

  export default {
    name: 'month',
    // eslint-disable-next-line func-names
    data() {
      return {
        days: [],
        year: Number(this.$route.params.year ? this.$route.params.year : window.localStorage.year),
        // eslint-disable-next-line max-len
        month: Number(this.$route.params.month ? this.$route.params.month : window.localStorage.month),
      };
    },
    created() {
      const storage = window.localStorage;
      if (this.$route.params.year && this.$route.params.month) {
        storage.setItem('year', this.$route.params.year);
        storage.setItem('month', this.$route.params.month);
      }
      const curDate = new Date();
      const curY = curDate.getFullYear(); // 当前年份
      const curM = curDate.getMonth() + 1; // 当前月份
      const curD = curDate.getDate(); // 当前日期
      const curDay = curDate.getDay(); // 当前星期几
      const lastMonthLength = this.getDaysInOneMonth(this.year, this.month);
      console.log('lastMonthLength', this.year, this.month, lastMonthLength);
      let number = 1;
      for (let i = 0; i < 5; i++) {
        for (let j = 1; j < 8; j++) {
          let day = 0;
          let { month } = this;
          if (i === 0 && j < curDay) {
            day = lastMonthLength - curDay + j + 1;
            month = this.month - 1;
          } else {
            day = number++;
          }
          // eslint-disable-next-line max-len
          const isActive = (this.year <= curY && month < curM) || (this.year === curY && month === curM && day <= curD);
          this.days.push({
            year: this.year,
            month,
            day,
            isActive,
          });
        }
      }
    },
    mounted() {

    },
    methods: {
      getDaysInOneMonth(year, month) {
        const d = new Date(year, month, 0);
        return d.getDate();
      },
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
    align-content: flex-start;
  }
  .month-box {
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    background-color: rgb(20, 20, 33);
    color: white;
    font-size: .1rem;
    padding: 0 .1rem;
  }
  .day-box {
    width: 14.2857%;
    height: .5rem;
    line-height: .5rem;
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

  .day-box:hover {
    opacity: 1;
  }

  .hover-day {
    display: none;
  }

  .day-box:hover > .hover-day {
    display: inline-block;
  }
</style>
