<template>
  <header
    class="flex flex-col justify-between items-center px-8 py-4 bg-white shadow-md z-50 row-span-5"
  >
    <div className="flex items-center gap-4 text-catalina-blue-950">
      <img
        src="/assets/images/nexus-logo.svg"
        alt="Nexus Logo"
        class="w-10 h-10"
      />
    </div>

    <div class="flex items-center gap-4 ">
      <nuxt-link to="/contacts">
        Contacts
      </nuxt-link>
    </div>

    <div class="relative">
      <img :src="avatar" alt="" class="w-10 h-10 rounded-full  object-cover object-center" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";

/* Interfaces */
import type { IUser } from "@/interfaces/user.interface";

/* Plugins */
import baseUrl from "~/baseurl";

/* Data */
const user = useSanctumUser<IUser>();
const avatar = ref(`${baseUrl}/avatars/${user?.value?.avatar}`);

console.log(avatar);
</script>
