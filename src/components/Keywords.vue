<template>
<div class="p-2 mb-3 mt-3 text-center keywords" v-if="this.$store.state.currentCard['Keywords']">
    <h3 class="keywords">{{ keywords }}</h3>
    <p>{{ this.$store.state.currentCard['Keywords'] }}</p>
</div>
</template>

<script>
export default {
    name: "Keywords",
    data() {
        return {
            keywords: language.keywords
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

</style>
