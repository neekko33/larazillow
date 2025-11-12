<script setup>
import { Link, usePage } from "@inertiajs/vue3";
import { computed } from "vue";

const page = usePage();

const flashMessage = computed(() => page.props.flash.success);
</script>

<template>
    <div class="p-4">
        <Link href="/" class="mr-2">Main Page</Link>
        <Link href="/hello">Show Page</Link>

        <div v-if="flashMessage" class="text-green-500 my-4">
            {{ flashMessage }}
        </div>

        <div class="mt-4">
            <slot />
        </div>
    </div>
</template>
