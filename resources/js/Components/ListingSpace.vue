<script setup>
defineProps({
    listing: Object,
});
</script>

<template>
    <div>
        <span class="font-bold">{{ listing.beds }}</span>&nbsp;bds&nbsp;<span class="text-gray-400">|</span>
        &nbsp;<span class="font-bold">{{ listing.baths }}</span>&nbsp;ba&nbsp;<span class="text-gray-400">|</span>
        &nbsp;<span class="font-bold">{{ listing.area }}</span>&nbsp;m²
    </div>
</template>
