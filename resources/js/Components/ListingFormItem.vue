<script setup lang="ts">
import type { InertiaForm } from '@inertiajs/vue3'

interface Props {
    form: InertiaForm<any>
    label: string
    prop: string
    cols?: number
    isNumber?: boolean
}

withDefaults(defineProps<Props>(), {
    cols: 1,
    isNumber: false,
});

// 这里不能用动态类名，因为 Tailwind CSS 不支持，需要预定义好
const colSpanMap: Record<number, string> = {
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
