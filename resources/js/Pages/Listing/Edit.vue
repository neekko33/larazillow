<script setup>
import ListingFormItem from "@/Components/ListingFormItem.vue";
import { useForm } from "@inertiajs/vue3";
import { inject } from "vue";

const props = defineProps({
    listing: Object,
});

const route = inject("route");

const form = useForm(props.listing);

const formItems = [
    { label: "Beds", prop: "beds", isNumber: true },
    { label: "Baths", prop: "baths", isNumber: true },
    { label: "Area", prop: "area", isNumber: true },
    { label: "City", prop: "city", isNumber: false },
    { label: "Post Code", prop: "code", isNumber: false },
    { label: "Street", prop: "street", isNumber: false },
    { label: "Street Nr", prop: "street_num", isNumber: true },
    { label: "Price", prop: "price", isNumber: true },
];

const update = () => {
    form.put(route("listing.update", form.id));
};
</script>

<template>
    <form @submit.prevent="update">
        <div class="space-y-2">
            <ListingFormItem
                v-for="item in formItems"
                :key="item.prop"
                :form="form"
                :label="item.label"
                :prop="item.prop"
                :isNumber="item.isNumber"
            />
            <div>
                <button
                    type="submit"
                    class="bg-sky-500 text-white px-4 py-1 rounded"
                >
                    Update
                </button>
            </div>
        </div>
    </form>
</template>
