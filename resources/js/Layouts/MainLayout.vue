<script setup>
import { Link, usePage } from "@inertiajs/vue3";
import { computed } from "vue";

const page = usePage();

const flashMessage = computed(() => page.props.flash.success);
</script>

<template>
    <div>
        <header class="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div class="container mx-auto">
                <nav class="p-4 flex items-center justify-between">
                    <div class="text-lg font-medium">
                        <Link :href="route('listing.index')" class="mr-2">Listings</Link>
                    </div>
                    <div class="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                        <Link :href="route('listing.index')" class="mr-2">LaraZillow</Link>
                    </div>
                    <div>
                        <Link :href="route('listing.create')"
                            class="bg-indigo-600 hover:bg-indigo-500 text-white font-medium p-2 rounded-md">+ New Listing</Link>
                    </div>
                </nav>
            </div>
        </header>

        <main class="container mx-auto p-4">
            <div v-if="flashMessage" class="my-4 text-white font-medium bg-green-500 px-4 py-2 rounded-md shadow-sm">
                {{ flashMessage }}
            </div>
            <slot />
        </main>

    </div>
</template>
