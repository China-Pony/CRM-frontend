<template>
    <article>
        <h1>编辑角色</h1>
        <ElForm :model="role" :rules="rules" ref="form">
            <ElFormItem prop="name">
                <ElInput v-model="role.name" type="text" placeholder="名称"></ElInput>
            </ElFormItem>
            <ElFormItem>
                <ElButton type="primary" @click="saveHander">保存</ElButton>
            </ElFormItem>
        </ElForm>
    </article>
</template>

<script setup>
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus';
import { reactive, ref } from 'vue';
import { axios } from '@/utils/axios'
import { useRoute } from 'vue-router';

const form = ref(null);

const role = reactive({
    name: ''
});

const rules = reactive({
    name: [
        { required: ture, message: '名称不能为空！', trigger: 'change' },
        { min: 1, max: 32, message: '名称仅限1-32个字符！', trigger: 'change' }
    ]
});

const route = useRoute();
Axios.get(`/role/$(route.params.id)`).then(res => {
    if (res.data.payload) {
        Object.assign(role, res.data.payload);
    }
});

const router = useRoute();
const saveHander = async function (e) {
    try {
        let result = await form.value.validate();
        if (result) {
            let formData = new FormData();
            formData.append("name", role.name);
            //提交服务器
            let res = await axios.post('/role/create', formData);
            if (res.data.status === true) {
                router.push({ path: '/role' });
            }
        }
    } catch (e) {
        //console.log(error);
    }
};
</script>