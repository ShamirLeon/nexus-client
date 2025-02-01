<template>
    <div class="flex h-screen w-screen font-rubik">
      <div class="relative flex basis-[60%] flex-col items-center justify-center bg-gradient-to-b from-persian-blue-700 to-catalina-blue-950">
        <div class="custom-dots"></div>
        <div class="absolute z-10 h-full w-full bg-gradient-to-b from-transparent to-catalina-blue-950"></div>
        <div class="z-10 max-w-[700px] text-center text-alice-blue-50">
          <h2 class="text-7xl font-bold">Welcome Back</h2>
          <h3 class="mt-4 text-2xl">
            We're glad to see you back. Log in to pick up the conversations,
            catch up, and share great moments with your friends in real time.
          </h3>
        </div>
        <div class="z-50 mt-24">
          <img src="/assets/images/hero-svg.svg" alt="Hero">
        </div>
        <div class="blur-light absolute -left-[300px] top-44"></div>
        <div class="blur-light absolute -right-[300px] bottom-0"></div>
      </div>

      <div class="z-50 basis-[40%] bg-alice-blue-50">
        <div class="relative h-full px-20 py-8">
          <div class="absolute flex items-center gap-4 text-catalina-blue-950">
            <img src="/assets/images/nexus-logo.svg" alt="Nexus Logo">
            <h1 class="text-[40px] font-bold">Nexus</h1>
          </div>
          <NuxtPage />
        </div>
      </div>
    </div>
</template>