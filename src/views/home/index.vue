<template>
    <div>
        <div class="wraplogo">
            <img src="../../assets/logo.svg" class="logo" alt="">
        </div>
        <input id="username" v-model="username" type="text" autocomplete="off" placeholder="请输入手机号">
        <div class="wrapcode">
            <input id="password"  v-model="password"  type="password" autocomplete="off" placeholder="请输入验证码">
            <button class="codeBtn">获取验证码</button>
        </div>


        <div class="loginin">
            <button id="submit" @click="handleSubmit">
                <p>快捷登录</p>
            </button>
        </div>
        <div class="box">

            <hr class="line">其他登陆方式<hr class="line">

        </div>

        <div class="otherlogin">

            <i class="iconfont seticon" style="color:red">&#xe699;</i>
            <i class="iconfont seticon"  style="color:dodgerblue;">&#xe630;</i>
            <i class="iconfont seticon" style="color:green;">&#xe610;</i>


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


    * {
        padding: 0px;
        margin: 0px;
    }

    body,
    html {
        width: 100%;
        height: 100%;
        overflow-y: hidden;
    }

    .wraplogo {
        text-align: center;

    }
    .logo {
        width: 50%;
        height: 5rem;
        margin-top: 2rem;
    }

    #username {
        border-style: solid;
        width: 100%;
        height: 57px;
        border-width: 2px;
        border-color: #e5e5e5;
        border-left: transparent;
        border-right: transparent;
        font-size: 0.85rem;
        margin-top: 52.66px;
        background-color: white;
        background-position: 6%;
        padding-left: 10%;
        outline: none;
    }

    input::-webkit-input-placeholder {
        color: #cccccc;
        font-weight: 400;
    }

    #password {
        border-style: solid;
        width: 100%;
        height: 57px;
        border-width: 2px;
        border-color:transparent;
        border-left: transparent;
        border-right: transparent;
        border-top: transparent;
        font-size: 0.85rem;
        background-color: white;
        background-position: 6%;
        padding-left: 10%;
        outline: none;
    }

    .loginin {
        text-align: center;
    }

    #submit {
        color: #fff;
        font-size: 16px;
        margin: 0 auto;
        width: 87%;
        background-color: orangered;
        border-radius: 5rem;
        margin: 0 auto;
        height: 52.656px;
        text-align: center;
        cursor: pointer;
    }

    .otherlogin{
        display: flex;
        width:50%;
        justify-content: space-between;
        margin: 0 auto;
        margin-top:3rem;
    }

    .seticon{
        font-size:2.3rem;
    }
    .line{
        display:block;
        width:10%;
        font-weight: lighter;
        border:1px solid #eee;


    }
    .box{
        display: flex;
        align-items: center;
        color:#ccc;
        align-self: center;
        justify-content:center;
        margin-top:4rem;
    }

    .wrapcode{
        display:flex;
        align-items: center;
        border-bottom: 2px solid #e5e5e5;
        margin-bottom: 60px;
        outline: none;
    }

    .codeBtn{
        margin-right: 10%;
        width:20rem;
        height: 2.5rem;
        line-height:2.5rem;
        text-align: center;
        color: #fff;
        background: orangered;
        display: inline-block;
        cursor: pointer;
        border: none;
        outline: 0;
        font-size: 14px;
        border-radius: 5rem;
        overflow: hidden;
        white-space: nowrap;
    }

</style>



