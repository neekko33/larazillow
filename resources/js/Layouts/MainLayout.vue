<script setup>
import { Link, usePage } from "@inertiajs/vue3";
import { computed } from "vue";

const page = usePage();

const flashMessage = computed(() => page.props.flash.success);
</script>

<template>
    <div class="p-4">
        <Link :href="route('listing.index')" class="mr-2">Listing</Link>
        <Link :href="route('listing.create')">New Listing</Link>

        <div v-if="flashMessage" class="text-green-500 my-4">
            {{ flashMessage }}
        </div>

        <div class="mt-4">
            <slot />
        </div>
    </div>
</template>
