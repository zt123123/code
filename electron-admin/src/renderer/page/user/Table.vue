<template>
    <div>
        <my-table></my-table>
    </div>
</template>

<script>
    import MyTable from "../../components/MyTable/MyTable.vue"
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'index'
            }
        },
        components:{MyTable},
        methods: {
            handleClick: () => {
                alert('111111111')
            }
        }
    }
</script>


<style scoped>

</style>