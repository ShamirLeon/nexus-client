<script lang="ts" setup>
import type { Contact } from '@/interfaces/contact.interface'
import type { AxiosResponse } from 'axios'
const { user } = useSanctumAuth()
const { $axios } = useNuxtApp()

const contacts = ref<Contact[]>([])

const getContacts = async () => {
    const { data }  = await $axios.get('/contact/index-by-user')
    const contactsArray: Contact[] = data?.data
    contacts.value = contactsArray.filter(contact => contact.status === 'pending')
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
                <!-- {{ user }} -->
            </p>
            <p>
                {{ contacts }}
            </p>
        </div>
    </div>
</template>