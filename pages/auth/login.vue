<script setup>
const { login } = useSanctumAuth()

const credentials = ref({
  email: '',
  password: ''
})

</script>

<template>
    <div className="flex h-screen w-screen">
      <div className="relative flex basis-[60%] flex-col items-center justify-center bg-gradient-to-b from-persian-blue-700 to-catalina-blue-950">
        <div className="custom-dots"></div>
        <div className="absolute z-10 h-full w-full bg-gradient-to-b from-transparent to-catalina-blue-950"></div>
        <div className="z-10 max-w-[700px] text-center text-alice-blue-50">
          <h2 className="text-7xl font-bold">Welcome Back</h2>
          <h3 className="mt-4 text-2xl">
            We're glad to see you back. Log in to pick up the conversations,
            catch up, and share great moments with your friends in real time.
          </h3>
        </div>
        <div className="z-50 mt-24">
          <img src="/assets/images/hero-svg.svg" alt="Hero">
        </div>
        <div className="blur-light absolute -left-[300px] top-44"></div>
        <div className="blur-light absolute -right-[300px] bottom-0"></div>
      </div>

      <div className="z-50 basis-[40%] bg-alice-blue-50">
        <div className="relative h-full px-20 py-8">
          <div className="absolute flex items-center gap-4 text-catalina-blue-950">
            <img src="/assets/images/nexus-logo.svg" alt="Nexus Logo">
            <h1 className="text-[40px] font-bold">Nexus</h1>
          </div>
          <div className="flex h-full flex-col justify-center">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-catalina-blue-950">Log In</h2>
              <p className="mt-2 text-[20px] text-black">
                Enter your valid credential for logging in
              </p>
            </div>
                <form
                  className="flex flex-col gap-6"
                  @submit.prevent="login(credentials)"
                >
                  <div>
                    <label
                      htmlFor="username"
                      className="text-[20px] text-black"
                    >
                      Enter your email address
                    </label>
                    <input
                      v-model="credentials.email"
                      id="username"
                      type="text"
                      placeholder="name@example.com"
                      className="mt-4 w-full rounded-lg border border-gray border-opacity-30 p-4 placeholder-gray placeholder-opacity-40 placeholder:text-lg focus:border-softBlue focus:outline-none "
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-[20px] text-black"
                    >
                      Enter your password
                    </label>
                    <input
                      v-model="credentials.password"
                      id="password"
                      type="password"
                      placeholder="Password"
                      className="mt-4 w-full rounded-lg border border-gray border-opacity-30 p-4 placeholder-gray placeholder-opacity-40 placeholder:text-lg focus:border-softBlue focus:outline-none"
                    />
                  </div>
                  <button
                    @click="login(credentials)"
                    type="submit"
                    className="max-h-[58px] w-full rounded-lg bg-catalina-blue-950 p-4 text-lg font-semibold text-white transition duration-300 hover:bg-softBlue"
                  >
                    Log In
                  </button>
                </form>
                <p className="mt-4 text-sm italic text-black">
                  Don’t have an account?
                  <a href="/auth/register" className="text-softBlue">
                    Sign up
                  </a>
                </p>
          </div>
        </div>
      </div>
    </div>
</template>