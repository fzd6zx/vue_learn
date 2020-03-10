<template>
    <div>
        <h3>child</h3>
        <h5>{{msg}}</h5>
        <h6>{{formAppMsg}}</h6>
        <button @click="passMsg">回传</button>
    </div>
</template>

<script>
    import bus from '../util/bus'
    export default {
        data() {
            return {
                childMsg: 'child msg',
                formAppMsg: ''
            }
        },
        name: "Child",
        props:{
            msg:{
                type:String,
                default:'2222',
            }
        },
        methods:{
            passMsg(){
                this.$emit('showMsg','test','test2')
            }
        },
        mounted(){
            bus.$on('msg', (val) => { // 监听事件aevent，回调函数要使用箭头函数;
                console.log(val)
                this.formAppMsg = val
            });
        }

    }
</script>

<style scoped>

</style>