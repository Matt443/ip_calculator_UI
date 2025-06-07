<script setup lang="ts">
import { buttonClasses } from "~/consts/tailwind.const";
import type { IpSettingType } from "~/types/props.type";

const state = useStateStore();

const ipInputConfig: IpSettingType = {
    type: {
        clickCallback: state.changeIpType,
        classCallback: () => state.getIp.type,
        getter: () => state.getIp.type,
        label: "inputs.ip.type",
    },
    address: {
        changeCallback: state.changeIpAdress,
        valueGetter: () => state.getIp.address,
        label: "inputs.ip.label",
    },
};
</script>

<template>
    <div class="w-[100%] min-h-[100%] text-stone-100 pt-[50px]">
        <div class="content-container lg:w-[1000px] w-[100%] m-auto px-2">
            <div class="inputs-container">
                <IpInput
                    :type="ipInputConfig.type"
                    :address="ipInputConfig.address"
                ></IpInput>
                <TypeSwitcher
                    :click-callback="state.changeConversionsResult"
                    :class-callback="
                        () => {
                            return state.getConversions.resultType;
                        }
                    "
                    :types="['default', 'binary', 'decimal', 'shorthand']"
                    :label-parent="'ipTypes'"
                >
                    <template #label>
                        <span>{{ $t("conversions.result.type") }}:</span>
                    </template>
                </TypeSwitcher>
                <UButton
                    trailing-icon="i-lucide-arrow-right"
                    :class="`${buttonClasses} my-2`"
                    @click="
                        (e) => {
                            e.preventDefault();
                            state.conversionsApiCall();
                            state.getIpClass();
                        }
                    "
                    :ui="{
                        trailingIcon:
                            'ml-1 group-hover:translate-x-[5px] duration-500',
                    }"
                    >{{ $t("inputs.button") }}</UButton
                >
            </div>
            <ConversionsResult></ConversionsResult>
            <Error :code="state.responses.conversions.status"></Error>
        </div>
    </div>
</template>
