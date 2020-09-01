<template>
  <div>
    <h1>Student #{{ $route.params.id }}</h1>

    <div v-if="student !== null">
      <ul>
        <li>First name: {{ student.firstName }}</li>
        <li>Last name: {{ student.lastName }}</li>
        <li>Year: {{ student.year }}</li>
      </ul>

      <button id="btn_yearMinus" v-on:click="yearMinus" :disabled="disableYearMinus">Year -1</button>
      <button id="btn_yearPlus" v-on:click="yearPlus" :disabled="disableYearPlus">Year +1</button>
    </div>

  </div>
</template>

<script>
import {StudentService} from "@/student.service";

export default {
  name: "Student",
  data() {
    return {
      yearMin: 1,
      yearMax: 6,
      student: null
    };
  },
  mounted() {
    this.student = StudentService.getStudent(Number(this.$route.params.id));
  },
  methods: {
    updateYear(mode) {
      if (mode === "+") {
        this.student.year++;
      } else if (mode === "-") {
        this.student.year--;
      }
    },
    yearPlus() {
      this.updateYear("+");
    },
    yearMinus() {
      this.updateYear("-");
    }
  },
  computed: {
    disableYearMinus() {
      return this.student.year <= this.yearMin;
    },
    disableYearPlus() {
      return this.student.year >= this.yearMax;
    }
  }
};
</script>
