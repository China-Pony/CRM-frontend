<template>
    <article>
        <h1>登录</h1>
        <ElForm :model="login" :rules="rules"><!--Elment-Plus表单-->
            <ElFormItem prop="username">
                <ElInput v-model="login.username" type="text" placeholder="账号" /><!--使用v-model进行双向绑定文字接收变量-->
            </ElFormItem>
            <ElFormItem prop="password">
                <ElInput v-model="login.password" type="password" placeholder="密码" />
            </ElFormItem>
            <ElButton type="primary" @click="loginHander">登录</ElButton>
        </ElForm>
    </article>
</template>

<script setup>
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
import { reactive } from 'vue';

const login = reactive({
    username: '',
    password: ''
});
const loginHander = e => {
    console.log(login);
};

const rules = reactive({          //表单验证
    username: [
        { required: true, message: '账号不能为空！', trigger: 'change' },
        { min: 3, max: 5, message: '只能输入3-5个字符！', trigger: 'change' }
    ],
    password: [
        { type: 'string', required: true, trigger: 'change' },
        { pattern: /^.{6,16}$/, message: "密码仅限6~16个字符", trigger: 'change' }
    ]
});

</script>

<style></style>