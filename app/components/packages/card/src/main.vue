<template>
    <div class="fx-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
        <div class="fx-card__header" v-if="$slots.header || header">
            <slot name="header">{{ header }}</slot>
        </div>
        <div class="fx-card__body" :style="bodyStyle">
            <slot></slot>
        </div>
    </div>
</template>


<script>
export default {
    name: 'FxCard',

    componentName: 'FxCard',

    props: {
        header: {},
        bodyStyle: {},
        shadow: {
            type: String
        }
    },
};

</script>