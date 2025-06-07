<script setup lang="ts">
import type { ConversionResponseType } from "~/types/store.type";
const state = useStateStore();

function checkResultType(): boolean {
    if (
        state.conversions.resultType === "binary" ||
        state.conversions.resultType === "default"
    )
        return true;
    return false;
}
</script>

<template>
    <div
        class="conversion-result-container py-2"
        v-if="state.responses.conversions.status === 200"
    >
        <div class="result-item">
            <span
                class="result-label whitespace-nowrap mr-2 text-left font-bold"
            >
                {{ $t("conversions.result.label") }}:
            </span>
            <IpWithOctets
                v-if="checkResultType()"
                :address="state.responses.conversions.separated"
            ></IpWithOctets>
            <NumberIp
                :container-class="''"
                :ip="
                    String(
                        state.responses.conversions[
                            state.conversions
                                .resultType as keyof ConversionResponseType
                        ],
                    )
                "
                v-if="!checkResultType()"
            ></NumberIp>
        </div>
        <div class="result-item">
            <span
                class="result-label whitespace-nowrap mr-2 text-left font-bold"
            >
                {{ $t("conversions.class.label") }}:
                {{ state.responses.class.name }}
            </span>
            <ClassDetails
                v-if="state.responses.class.status === 200"
                :details="state.responses.class"
            ></ClassDetails>
        </div>
    </div>
</template>
