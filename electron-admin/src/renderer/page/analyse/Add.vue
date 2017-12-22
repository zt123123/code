<template>
    <div>
        <span>{{msg}}</span>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: '111111'
            }
        },
        methods: {
            handleClick: () => {
                alert('111111111')
            }
        }
    }
</script>


<style scoped>

</style>