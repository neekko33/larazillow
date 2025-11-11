<script setup>
import { Link } from "@inertiajs/vue3";

defineProps({
    message: String,
});
</script>

<template>
    <h1>Index page</h1>
    <p>{{ message }}</p>
    <Link href="/show/1">Show Page</Link>
</template>
