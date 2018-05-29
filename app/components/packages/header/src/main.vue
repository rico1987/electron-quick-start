<template>
    <header class="fx-header" :style="{ height }">
        <slot></slot>
    </header>
</template>

<script>
export default {
    name: 'FxHeader',

    componentName: 'FxHeader',

    props: {
        height: {
            type: String,
            default: '60px',
        },
    },
};
</script>

