<template>
    <VueButton
        className="font-medium hover:bg-gray-50 border border-gray-300 rounded p-3 mt-10"
        text="Buy for 66,00$"
    >
    </VueButton>

    <Order amount="0" />
</template>

<script>
import VueButton from "./components/VueButton.vue";
import Order from "./components/Order.vue";

export default {
    components: {
        VueButton,
        Order,
    },
};
</script>

<style scoped></style>
