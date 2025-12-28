<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    price: number | string
}>();

const formattedPrice = computed(() => {
    const priceNumber = Number(props.price);
    if (isNaN(priceNumber)) {
        return 'Invalid Price';
    }
    return priceNumber.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
    });
})
</script>

<template>
    <span>{{ formattedPrice }}</span>
</template>
