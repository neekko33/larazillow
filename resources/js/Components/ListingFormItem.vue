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

// 这里不能用动态类名，因为 Tailwind CSS 不支持，需要预定义好
const colSpanMap = {
    2: 'col-span-2',
    4: 'col-span-4',
    6: 'col-span-6',
}
</script>

<template>
    <div :class="colSpanMap[cols] || 'col-span-1'">
        <label class="label">{{ label }}</label>
        <input v-if="isNumber" v-model.number="form[prop]" class="input" type="text" />
        <input v-else v-model="form[prop]" class="input" type="text" />
        <p v-if="form.errors[prop]" class="input-error">
            {{ form.errors[prop] }}
        </p>
    </div>
</template>
