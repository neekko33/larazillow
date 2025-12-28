<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
import Box from "./UI/Box.vue";
import ListingAddress from "./ListingAddress.vue";
import ListingSpace from "./ListingSpace.vue";
import Price from "./Price.vue";
import type { Listing } from "@/types";

defineProps<{
    listing: Listing
}>();
</script>

<template>
    <Box>
        <Price :price="listing.price" class="text-2xl font-bold" />
        <ListingSpace :listing="listing" class="text-lg" />
        <ListingAddress :listing="listing" class="text-gray-500 mr-2" />
        <div>
            <Link class="text-green-500 underline" :href="route('listing.show', listing.id)">View Listing</Link>
            <Link class="text-blue-500 underline ml-4" :href="route('listing.edit', listing.id)">Edit Listing</Link>
            <Link class="text-red-500 underline ml-4" :href="route('listing.destroy', listing.id)" method="delete"
                as="button">
            Delete Listing
            </Link>
        </div>
    </Box>
</template>
