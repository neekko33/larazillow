<script setup>
import { Link } from "@inertiajs/vue3";
defineProps({
    listing: Object,
});
</script>

<template>
    <div>
        <h1>
            {{ listing.city }} {{ listing.street }} {{ listing.street_num }}
        </h1>
        <div class="flex gap-2">
            <p>Price: ${{ listing.price }}</p>
            <p>Bedrooms: {{ listing.beds }}</p>
            <p>Bathrooms: {{ listing.baths }}</p>
            <p>Area: {{ listing.area }} m²</p>
        </div>
        <Link class="text-blue-500 underline" :href="`/listing/${listing.id}`"
            >View Listing</Link
        >
    </div>
</template>
