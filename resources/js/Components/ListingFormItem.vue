<script setup>
defineProps({
    form: Object,
    label: String,
    prop: String,
    cols: {
        type: Number,
        default: 1,
    },
    isNumber: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div :class="`col-span-${cols}`">
        <label
            class="label"
            >{{ label }}</label
        >
        <input
            v-if="isNumber"
            v-model.number="form[prop]"
            class="input"
            type="text"
        />
        <input v-else v-model="form[prop]" class="input" type="text" />
        <p v-if="form.errors[prop]" class="text-red-500 text-sm ml-22 mt-1">
            {{ form.errors[prop] }}
        </p>
    </div>
</template>
