<template>
    <div class="fx-badge">
        <slot></slot>
        <transition name="fx-zoom-in-center">
            <sup
                v-show="!hidden && (content || content === 0 || isDot)"
                v-text="content"
                class="fx-badge__content"
                :class="{ 'is-fixed': $slots.default, 'is-dot': isDot}"
            >
            </sup>
        </transition>
    </div>
</template>


<script>
export default {
    name: 'FxBadge',

    componentName: 'FxBadge',

    props: {
        value: {},
        max: Number,
        isDot: Boolean,
        hidden: Boolean,
    },

    computed: {
        content() {
            if (this.isDot) return

            const value = this.value
            const max = this.max
            if (typeof value === 'number') {
                return max < value ? `${max}+` : value
            }

            return value
        }
    }
};

</script>