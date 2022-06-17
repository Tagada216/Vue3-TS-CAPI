<template>
  <div><h2>New Quizz</h2></div>
</template>

<script setup lang="ts">
import { getMarvelQuizz } from "@/services/api/quizzapi";
import { onMounted, ref } from "vue";
let quizz = ref();
onMounted(async () => {
  quizz.value = await getMarvelQuizz();
});
</script>

<style scoped></style>
