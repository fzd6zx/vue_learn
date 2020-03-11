<template>
    <div class="login_container">
        <div class="login_box">
            <!--头像-->
            <div class="avatar_box">
                <img src="../assets/logo.png"/>
            </div>
            <!--登录-->
            <el-form label-width="0px" ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="login_form">
                <!--账户名-->
                <el-form-item prop="username">
                    <el-input prefix-icon="iconfont icon-user" v-model="loginForm.username"></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item prop="password">
                    <el-input prefix-icon="iconfont icon-3702mima" v-model="loginForm.password"
                              type="password"></el-input>
                </el-form-item>

                <el-form-item class="btn">
                    <!--登录-->
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                    <!--重置-->
                </el-form-item>

            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    username: 'admin',
                    password: '123456',
                    date1: '',
                    date2: '',
                    delivery: '',
                    type: [],
                    resource: '',
                    desc: '',
                },
                loginFormRules: {
                    //验证账号
                    username: [{required: true, message: '请输入用户名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    //验证密码
                    password: [{required: true, message: '请输入用户密码', trigger: 'blur'},
                        {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            login() {
                this.$refs.loginFormRef.validate(async (valid) => {
                    if (!valid) return;
                    const {data: res} = await this.$http.post('login', this.loginForm);
                    if (res.meta.status !== 200) return this.$message.error('登录失败');
                    this.$message.success('登录成功');
                    window.sessionStorage.setItem('token', res.data.token);
                    this.$router.push('/home');
                });
            },
            resetLoginForm() {
                //表单充值
                console.log(this);
                this.$refs.loginFormRef.resetFields();
            }
        }
    }
</script>

<style scoped lang="less">
    @background: #2b4b6b;
    @height: 100%;
    .login_container {
        background: @background;
        height: @height;
    }

    .login_box {
        height: 300px;
        width: 450px;
        background: #ffffff;
        border-radius: 3px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .avatar_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        img {
            height: 100%;
            width: 100%;
            border-radius: 50%;
            background: #eee;
        }
    }

    .login_form {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .btn {
        display: flex;
        justify-content: flex-end;
    }
</style>