<script setup>
import { Link } from "@inertiajs/vue3";
import Box from "./UI/Box.vue";
import ListingAddress from "./ListingAddress.vue";
import ListingSpace from "./ListingSpace.vue";

defineProps({
    listing: Object,
});
</script>

<template>
    <Box>
        <ListingSpace :listing="listing" class="text-lg" />
        <ListingAddress :listing="listing" class="text-gray-500" />
        <div>
            <Link
                class="text-blue-500 underline"
                :href="route('listing.edit', listing.id)"
                >Edit Listing</Link
            >
            <Link
                class="text-red-500 underline ml-4"
                :href="route('listing.destroy', listing.id)"
                method="delete"
                as="button"
            >
                Delete Listing
            </Link>
        </div>
    </Box>
</template>
