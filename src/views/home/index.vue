<template>
    <div>
        <div class="wraplogo">
            <img class="logo" src="../../assets/logo.png" alt="">
        </div>
        <input id="username" v-model="username" type="text" autocomplete="off" placeholder="请输入手机号">
        <input id="password"  v-model="password"  type="password" autocomplete="off" placeholder="请输入手机验证码">

        <div class="loginin">
            <button id="submit" @click="handleSubmit">
                <p>快捷登录</p>
            </button>
        </div>
        <div class="aget">

            <br>
            <router-link class="forget" to="forget" @click="forgetpassword" >忘记密码</router-link>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                msg: 'success'
            }
        }
    }
</script>

<style scoped lang="less">


</style>




<style lang="less" rel="stylesheet/less" >
    @import './style.less';
</style>
