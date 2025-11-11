<script setup>
import { Link,usePage } from "@inertiajs/vue3"
const id = usePage().props.id
</script>
<template>
    <h1>Show Page {{ id }}</h1>
    <Link href="/">Main Page</Link>
</template>
