<script setup>
import {ref} from 'vue';

  const name = ref('john Doe');
  const status = ref('active');
  const task = ref(["task one", "task two"]);

  const toggleStatus = () => {
      if(status.value === 'active') {
        status.value = 'pending';
      } else if (status.value === 'pending') {
        status.value = 'inactive'
      }  else {
        status.value = 'active';
      } 
  }
</script>

<template>
 <h1>{{ name }}</h1>
 <p v-if="status === 'active'"> User is active </p>
 <p v-else-if="status === 'pending'">User is pending</p>
 <p v-else> User is inavtive</p>


 <h3>Tasks</h3>
 <ul>
  <li v-for="task in task" :key="task"> {{ task }}</li>
 </ul>
 <a :href="link">Link here!</a>


 <button v-on:click="toggleStatus">Change Status</button>
 <button @:click="toggleStatus">Change Status</button>
 <p>{{ status }}</p>
</template>



