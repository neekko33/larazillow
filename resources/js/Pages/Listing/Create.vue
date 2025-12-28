<script setup>
import ListingFormItem from "@/Components/ListingFormItem.vue";
import { useForm } from "@inertiajs/vue3";
import { inject } from "vue";
import { FORM_ITEMS as formItems } from "@/constant.js";

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

const create = () => {
    form.post(route("listing.store"));
};
</script>

<template>
    <form @submit.prevent="create">
        <div class="grid grid-cols-6 gap-4">
            <ListingFormItem v-for="item in formItems" :key="item.prop" :form="form" :label="item.label"
                :prop="item.prop" :isNumber="item.isNumber" :cols="item.cols" />
            <div>
                <button type="submit" class="btn-primary px-4!">
                    Create
                </button>
            </div>
        </div>
    </form>
</template>
