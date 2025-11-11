<script setup>
import ListingCard from "@/Components/ListingCard.vue";

defineProps({
    listings: Array,
});
</script>

<template>
    <div>Listing Page</div>
    <div class="space-y-4">
        <ListingCard
            v-for="listing in listings"
            :key="listing.id"
            :listing="listing"
        />
    </div>
</template>
