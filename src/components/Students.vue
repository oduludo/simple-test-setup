<template>
  <div>
    <h1>Students</h1>

    <ul v-if="students.length > 0">
      <li v-for="student in students" :key="student.id">
        <router-link :to="{name: `student`, params: {id: student.id}}">
          {{ student.firstName }} {{ student.lastName }}
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
import {StudentService} from "@/student.service";

export default {
  name: "Students",
  data() {
    return {
      students: []
    };
  },
  mounted() {
    this.students = StudentService.allStudents();
  }
};
</script>
