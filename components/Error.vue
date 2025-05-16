<script setup lang="ts">
const props = defineProps({
    code: {
        type: Number,
        required: true,
    },
});

const knownErrors = [400, 422, 0];

function isErrorKnow(): boolean {
    const isKnown: undefined | number = knownErrors.find(
        (element) => element === props.code,
    );
    if (typeof isKnown === "undefined") return false;
    return true;
}
</script>

<template>
    <div v-if="code !== 200" class="error-container text-center py-3">
        <div v-if="code === 400" class="error-400-container text-bold">
            <slot name="error-400">
                <span>
                    {{ $t("error.400") }}
                </span>
            </slot>
        </div>
        <div v-if="code === 422" class="error-400-container text-bold">
            <slot name="error-422">
                <span>
                    {{ $t("error.422") }}
                </span>
            </slot>
        </div>
        <div v-if="code === 0" class="error-0-container text-bold">
            <slot>
                <span>
                    {{ $t("error.0") }}
                </span>
            </slot>
        </div>
        <div v-if="!isErrorKnow()" class="error-container text-bold">
            <slot name="error-unknown">
                <span>
                    {{ $t("error.0") }}
                </span>
            </slot>
        </div>
    </div>
</template>
