<template>
    <div>
        <my-form></my-form>
    </div>
</template>

<script>
    import MyForm from "../../components/Form/Form.vue"
    export default {
        name: 'hello',
        data () {
            return {
                msg: '111111'
            }
        },
        components: {MyForm},
        methods: {
            handleClick: () => {
                alert('111111111')
            }
        }
    }
</script>


<style scoped>

</style>