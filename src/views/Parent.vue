><template>
    <div>
        <h1>Parent</h1>
        <h3>{{msg1}}</h3>
        <h3>{{msg2}}</h3>
        <m-child :msg="'hello'" @showMsg="showMsg(arguments)" ref="child"></m-child>
    </div>
</template>

<script>
    import MChild from './Child'
    export default {
        data(){
            return{
                msg1:'',
                msg2:''
            }
        },
        name: "Parent",
        components:{
            MChild,
        },
        methods:{
            showMsg(msg){
                this.msg1 = msg[0]
                this.msg2 = msg[1]
            }
        },
        mounted(){
            console.log(this.$children[0].msg)
            console.log('ref',this.$refs.child)
        }
    }
    console.log(111);
    new Promise(resolve => {
        console.log('Step 1');
        setTimeout(() => {
            resolve('100');
        }, 1000)
    }).then(value => { // value = 100
        return new Promise(resolve => {
            console.log('step-1-1');
            setTimeout(() => {
                resolve('110');
            }, 1000)
        })
    }).then(value => {
        console.log('Step-1-2');
        return value; // value = 110;
    }).then(value => {
        console.log('step-1-3');
        return value; // value = 110;
    }).then(value => {
        console.log(value);
        console.log('step 2');
    })

</script>

<style scoped>

</style>