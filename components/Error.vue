<script setup lang="ts">
const props = defineProps({
    code: {
        type: Number,
        required: true,
    },
});
</script>

<template>
    <div v-if="code !== 200" class="error-container text-center py-3">
        <div v-if="code === 400" class="error-400-container text-bold">
            Your data seems to be incorrect
        </div>
        <div v-if="code === 0" class="error-0-container text-bold">
            Here will apear your results
        </div>
        <div
            v-if="code !== 400 && code !== 0"
            class="error-container text-bold"
        >
            Something went wrong, try again later
        </div>
    </div>
</template>
