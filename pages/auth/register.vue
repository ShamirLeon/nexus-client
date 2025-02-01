<script lang="ts" setup>
const { login } = useSanctumAuth();
definePageMeta({
  layout: "auth",
  middleware: ['sanctum:guest']
});

const credentials = ref({
  email: "",
  password: "",
});
</script>

<template>
  <div class="flex h-full flex-col justify-center">
    <div class="mb-16 text-center">
      <h2 class="text-4xl font-bold text-catalina-blue-950">Register</h2>
      <p class="mt-2 text-[20px] text-black">
        Enter your valid credential for logging in
      </p>
    </div>
    <form class="flex flex-col gap-6" @submit.prevent="login(credentials)">
      <div>
        <label for="username" class="text-[20px] text-black">
          Enter your email address
        </label>
        <input
          v-model="credentials.email"
          id="username"
          type="text"
          placeholder="name@example.com"
          class="mt-4 w-full rounded-lg border border-gunsmoke-200 border-opacity-30 p-4 placeholder-gray placeholder-opacity-40 placeholder:text-lg focus:border-alice-blue-300 focus:outline-none bg-white"
        />
      </div>
      <div>
        <label for="password" class="text-[20px] text-black">
          Enter your password
        </label>
        <input
          v-model="credentials.password"
          id="password"
          type="password"
          placeholder="Password"
          class="mt-4 w-full rounded-lg border border-gunsmoke-200 border-opacity-30 p-4 placeholder-gray placeholder-opacity-40 placeholder:text-lg focus:border-alice-blue-300 focus:outline-none bg-white"
        />
      </div>
      <button
        @click="login(credentials)"
        type="submit"
        class="max-h-[58px] w-full rounded-lg bg-catalina-blue-950 p-4 text-lg font-semibold text-white transition duration-300 hover:bg-softBlue cursor-pointer"
      >
        Log In
      </button>
    </form>
  </div>
</template>
