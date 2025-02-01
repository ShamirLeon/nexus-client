<template>
  <header
    class="flex flex-col justify-between items-center px-8 py-4 bg-white shadow-md z-50 row-span-5"
  >
    <div className="flex items-center gap-4 text-catalina-blue-950">
      <img src="/assets/images/nexus-logo.svg" alt="Nexus Logo" class="w-10 h-10" />
    </div>

    <div class="w-2xl bg-red-400">

    </div>

    <div class="relative">
      <div
        class="profile-wheel w-12 h-12 cursor-pointer relative"
        @click="toggleMenu"
      >
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-[#2d8cf0]"
        >
          JD
        </div>
      </div>

      <div
        id="profileMenu"
        class="absolute top-[60px] right-5 bg-white rounded-lg shadow-xl p-4"
        :class="{ hidden: !menuVisible }"
        v-click-outside="closeMenu"
      >
        <div
          class="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer whitespace-nowrap"
        >
          Perfil
        </div>
        <div class="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
          Configuración
        </div>
        <div
          class="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer text-red-600"
        >
          Cerrar sesión
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuVisible = ref(false);

const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};

const closeMenu = () => {
  menuVisible.value = false;
};

// Directiva personalizada para detectar clics fuera del elemento
const vClickOutside = {
  beforeMount(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted(el) {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};
</script>

<style scoped>
@keyframes profile-wheel-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.profile-wheel::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    #2d8cf0 0% 20%,
    #19be6b 20% 40%,
    #ff9900 40% 60%,
    #ed4014 60% 80%,
    #2d8cf0 80% 100%
  );
  animation: profile-wheel-rotate 3s linear infinite;
}

.profile-wheel:hover::before {
  animation-duration: 1s;
}
</style>
