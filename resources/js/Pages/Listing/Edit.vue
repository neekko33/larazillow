<script setup>
import ListingFormItem from "@/Components/ListingFormItem.vue";
import { useForm } from "@inertiajs/vue3";
import { inject } from "vue";
import { FORM_ITEMS as formItems } from "@/constant.js";

const props = defineProps({
    listing: Object,
});

const route = inject("route");

const form = useForm(props.listing);

const update = () => {
    form.put(route("listing.update", form.id));
};
</script>

<template>
    <form @submit.prevent="update">
        <div class="grid grid-cols-6 gap-4">
            <ListingFormItem v-for="item in formItems" :key="item.prop" :form="form" :label="item.label"
                :prop="item.prop" :isNumber="item.isNumber" :cols="item.cols" />
            <div>
                <button type="submit" class="btn-primary px-4!">
                    Update
                </button>
            </div>
        </div>
    </form>
</template>
