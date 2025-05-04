<script setup lang="ts">
const props = defineProps({
    cells: {
        type: Array<string | number>,
        required: true,
    },
});
</script>

<template>
    <div class="table-row-container flex flex-row">
        <div class="cell-container w-[100%]" v-for="cell in cells">
            <span>{{ cell }}</span>
        </div>
    </div>
</template>
