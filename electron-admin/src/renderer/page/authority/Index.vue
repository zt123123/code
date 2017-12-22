<template>
    <div>
        <transfer></transfer>
    </div>
</template>

<script>
    import Transfer from "../../components/Transfer/Transfer.vue"
    export default {
        name: 'hello',
        data () {
            return {
                msg: '111111'
            }
        },
        components: {Transfer},
        methods: {
            handleClick: () => {
                alert('111111111')
            }
        }
    }
</script>


<style scoped>

</style>