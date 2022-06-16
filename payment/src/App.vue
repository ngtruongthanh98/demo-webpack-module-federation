<template>
    <VueButton
        className="font-medium hover:bg-gray-50 border border-gray-300 rounded p-3 mt-10"
        text="Buy for 66,00$"
    >
    </VueButton>

    <Orders amount="0" />
</template>

<script>
import VueButton from "./components/VueButton.vue";
import Orders from "./components/Orders.vue";

export default {
    components: {
        VueButton,
        Orders,
    },
};
</script>

<style scoped></style>
