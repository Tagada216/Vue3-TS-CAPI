<template>
  <div class="home">
    <h1>Fabulous Quizz</h1>
    <button @click="loadUser">Load users</button>
    <div v-for="user in users" :key="user.id">
      <h3>{{ user.name }}</h3>
    </div>

    <button class="btn" @click="newGame">Start game !</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import router from "@/router/index";
import { getUsers } from "@/services/api/placeholder";

let users = ref();

async function loadUser() {
  users.value = await getUsers();
}
function newGame() {
  router.push({ name: "game" });
}
</script>
