<script setup>
import Header from "~/components/header.vue";
import Sidebar from "~/components/sidebar.vue";
</script>

<template>
  <div class="font-rubik">
    <div class="p-8 bg-alice-blue-950 w-screen h-screen">
      <div class="grid grid-cols-12 grid-rows-5 w-full h-full">
        <Header />
        <Sidebar />
        <div
          class="col-span-8 row-span-5 col-start-4 col-end-13 bg-alice-blue-700"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
