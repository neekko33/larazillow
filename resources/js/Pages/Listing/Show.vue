<script setup>
import Price from "@/Components/Price.vue";
import ListingAddress from "@/Components/ListingAddress.vue";
import ListingSpace from "@/Components/ListingSpace.vue";
import Box from "@/Components/UI/Box.vue";
defineProps({
    listing: Object,
});
</script>

<template>
    <div class="flex flex-col-reverse md:grid md:grid-cols-12 gap-4">
        <Box class="md:col-span-7 flex items-center justify-center w-full">
            <div class="font-medium text-gray-400">No Images</div>
        </Box>
        <div class="md:col-span-5 flex flex-col gap-4">
            <Box>
                <template #header>
                    Basic info
                </template>
                <Price :price="listing.price" class="text-2xl font-bold" />
                <ListingSpace :listing="listing" class="text-lg" />
                <ListingAddress :listing="listing" class="text-gray-500 mr-2" />
            </Box>

            <Box>
                <template #header>
                    Offer
                </template>
                Make an offer
            </Box>
        </div>
    </div>
</template>
