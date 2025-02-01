<script setup>
const { user } = useSanctumAuth()
const { $axios } = useNuxtApp()

const contacts = ref([])

const getContacts = async () => {
    const response = await $axios.get('/contact/index-by-user')
    contacts.value = response.data
}

onMounted(() => {
    getContacts()
})
</script>

<template>
    <div class="w-full h-full p-8">
        <div class="bg-red-400">
            <h1>Home</h1>
            <p>
                {{ user }}
            </p>
            <p>
                {{ contacts }}
            </p>
        </div>
    </div>
</template>