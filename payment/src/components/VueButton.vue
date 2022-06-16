<template>
    <button
        className="font-medium hover:bg-gray-50 border border-gray-300 rounded p-3 mt-10"
    >
        {{ text }}
    </button>
</template>

<script>
export default {
    name: "VueButton",
    props: {
        text: {
            type: String,
        },
    },
};
</script>

<style></style>
