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
    <div>
        <h1>Home</h1>
        <p>
            {{ user }}
        </p>
        <p>
            {{ contacts }}
        </p>
    </div>
</template>