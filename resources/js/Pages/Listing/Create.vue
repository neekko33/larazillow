<script setup>
import ListingFormItem from "@/Components/ListingFormItem.vue";
import { useForm } from "@inertiajs/vue3";
import { inject } from "vue";

const route = inject("route");

const form = useForm({
    beds: null,
    baths: null,
    area: null,
    city: "",
    code: "",
    street: "",
    street_num: null,
    price: null,
});

const formItems = [
    { label: "Beds", prop: "beds", cols: 2, isNumber: true },
    { label: "Baths", prop: "baths", cols: 2, isNumber: true },
    { label: "Area", prop: "area", cols: 2, isNumber: true },
    { label: "City", prop: "city", cols: 4, isNumber: false },
    { label: "Post Code", prop: "code", cols: 2, isNumber: false },
    { label: "Street", prop: "street", cols: 4, isNumber: false },
    { label: "Street Nr", prop: "street_num", cols: 2, isNumber: true },
    { label: "Price", prop: "price", cols: 6, isNumber: true },
];

const create = () => {
    form.post(route("listing.store"));
};
</script>

<template>
    <form @submit.prevent="create">
        <div class="grid grid-cols-6 gap-4">
            <ListingFormItem
                v-for="item in formItems"
                :key="item.prop"
                :form="form"
                :label="item.label"
                :prop="item.prop"
                :isNumber="item.isNumber"
                :cols="item.cols"
            />
            <div>
                <button
                    type="submit"
                    class="btn-primary px-4!"
                >
                    Create
                </button>
            </div>
        </div>
    </form>
</template>
