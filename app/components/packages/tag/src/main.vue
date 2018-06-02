<template>
    <transition>
        <span
            class="fx-tag"
            :class="[
                type ? 'fx-tag--' + type : '',
                tagSize && `fx-tag--${tagSize}`,
                {'is-hit': hit}
            ]"
        >
            <slot></slot>
            <i class="fx-tag__close fx-icon-close"
                v-if="closable"
                @clik.stop="handleClose"
            ></i>
        </span>
    </transition>
</template>

<script>
export default {
    name: 'FxTag',
    componentName: 'FxTag',
    props: {
        text: String,
        closable: Boolean,
        type: String,
        hit: Boolean,
        disableTransitions: Boolean,
        color: String,
        size: String
    },
    methods: {
        handleClose(event) {
            this.$emit('close', event)
        }
    },
    computed: {
        tagSize() {
            return this.size || (this.$ELEMENT || {}).size
        }
    }
};
</script>
