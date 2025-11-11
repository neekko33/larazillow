<script setup>
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <div class="p-4">
        <Link href="/" class="mr-2">Main Page</Link>
        <Link href="/hello">Show Page</Link>
    </div>
    <div>
        <slot />
    </div>
</template>
