<template>
    <div>
        <card></card>
    </div>
</template>

<script>
    import Card from "../../components/Card/Card.vue"
    export default {
        name: 'hello',
        data () {
            return {
                msg: '111111'
            }
        },
        components: {Card},
        methods: {
            handleClick: () => {
                alert('111111111')
            }
        }
    }
</script>


<style scoped>

</style>