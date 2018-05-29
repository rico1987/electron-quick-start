<template>
    <footer class="fx-footer" :style="{ height }">
        <slot></slot>
    </footer>
</template>

<script>
export default {
    name: 'FxFooter',

    componentName: 'FxFooter',

    props: {
        height: {
            type: String,
            default: '60px',
        },
    },
};
</script>
