<template>
    <article>
        <div class="heading">
            <h1>角色列表</h1>

            <ElButton type="primary" :style="{ marginLeft: 'auto' }" @click="goCreate">添加</ElButton>
        </div>

        <ElTable :data="roles">
            <ElTableColumn prop="id" label="#" />
            <ElTableColumn prop="name" label="名称" />
            <ElTableColumn label="设置">
                <!-- <ElButton type="button" @click="Edit_Role">编辑</ElButton> -->
                <template #default="scope">
                    <a href="#" @click.prevent="edit(scope.row.id)">编辑</a> <!--通过插槽获取到了列的属性值-->
                </template>
            </ElTableColumn>
        </ElTable>
    </article>
</template>

<script setup>
import { axios } from "@/utils/axios"
import { ElButton, ElTable, ElTableColumn } from "element-plus";
import { ref } from 'vue'
import { useRouter } from "vue-router";

const roles = ref([]);

const router = useRouter();
const edit = (id) => {
    router.push({ name: 'role_update', params: { id } });
};

const goCreate = e => {
    router.push({ path: "/role/create" })
};

Axios.get("/role").then(response => {
    roles.value = response.data.payload;
    console.log(response.data.payload);
});

<style>
    .heading {
        display : flex;
    flex-flow : row nowrap;
    align-items:center;
    justify-content:flex-start;
    }
</style>
