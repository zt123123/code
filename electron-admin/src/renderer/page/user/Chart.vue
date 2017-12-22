<template>
    <chart></chart>
</template>

<script>
    import Chart from "../../components/Chart/Chart.vue"

    export default {
        name: 'hello',
        data () {
            return {
                msg: 'user'
            }
        },
        components: {Chart},
        methods: {
            handleClick: () => {
                alert('111111111')
            }
        }
    }
</script>


<style scoped>

</style>