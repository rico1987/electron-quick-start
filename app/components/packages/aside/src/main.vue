<template>
    <aside class="fx-aside" :style="{ width }">
        <slot></slot>
    </aside>
</template>

<script>
export default {
    name: 'FxAside',

    componentName: 'FxAside',

    props: {
        width: {
            type: String,
            default: '300px'
        }
    },
};

</script>
