<script setup>
import ListingCard from "@/Components/ListingCard.vue";

defineProps({
    listings: Array,
});
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <ListingCard
            v-for="listing in listings"
            :key="listing.id"
            :listing="listing"
        />
    </div>
</template>
