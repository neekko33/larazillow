<script setup>
defineProps({
    form: Object,
    label: String,
    prop: String,
    isNumber: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div>
        <label>{{ label }}</label>
        <input v-if="isNumber" v-model.number="form[prop]" type="text" />
        <input v-else v-model="form[prop]" type="text" />
        <p v-if="form.errors[prop]" class="text-red-500 text-sm ml-22 mt-1">
            {{ form.errors[prop] }}
        </p>
    </div>
</template>

<style scoped>
label {
    width: 5rem;
    margin-right: 0.5rem;
    display: inline-block;
}

input {
    border: 1px solid #ccc;
    padding: 0.2rem 0.5rem;
    border-radius: 0.25rem;
}
</style>
