.<template>
  <div id="app">
    <button @click="passMsg">给你</button>
    <m-parent></m-parent>
    <router-link to="/home">home</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
    import bus from './util/bus'
    import MParent from './views/Parent'
    export default {
        components:{
            MParent,
        },
        methods:{
            passMsg(){
                bus.$emit('msg','i am from app')
            }
        }
    }
</script>
<style lang="less">
</style>
