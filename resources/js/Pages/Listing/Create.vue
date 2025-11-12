<script setup>
import ListingFormItem from "@/Components/ListingFormItem.vue";
import { useForm } from "@inertiajs/vue3";

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
    { label: "Beds", prop: "beds", isNumber: true },
    { label: "Baths", prop: "baths", isNumber: true },
    { label: "Area", prop: "area", isNumber: true },
    { label: "City", prop: "city", isNumber: false },
    { label: "Post Code", prop: "code", isNumber: false },
    { label: "Street", prop: "street", isNumber: false },
    { label: "Street Nr", prop: "street_num", isNumber: true },
    { label: "Price", prop: "price", isNumber: true },
];

const create = () => {
    form.post("/listing");
};
</script>

<template>
    <form @submit.prevent="create">
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
                    Create
                </button>
            </div>
        </div>
    </form>
</template>
