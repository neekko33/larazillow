<script setup lang="ts">
import ListingFormItem from "@/Components/ListingFormItem.vue";
import { useForm } from "@inertiajs/vue3";
import { FORM_ITEMS as formItems } from "@/constant";

const form = useForm({
    beds: null as number | null,
    baths: null as number | null,
    area: null as number | null,
    city: "",
    code: "",
    street: "",
    street_num: null as number | null,
    price: null as number | null,
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
