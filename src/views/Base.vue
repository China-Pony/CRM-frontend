<template>
    <header>
        <nav>
            <RouterLink to="/">首页</RouterLink>
            <RouterLink to="/login">登录</RouterLink>
        </nav>
    </header>

    <main>
        <nav>
            <RouterLink to="/role">角色</RouterLink>
        </nav>
        <!-- 在此处依据路由的配置文件渲染相应文件中的内容中的元素 -->
        <RouterView />
    </main>
    <footer></footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
body {
    margin: 0rem;
}

header {
    background: var(--el-color-primary);
    box-sizing: border-box;
    padding: 2rem;
    height: 5rem;
}

/* 弹性盒子应该在父元素中设置 */

/* start是从左到右 */
main {
    display: flex;
    flex-flow: row nowrap;
    /*row水平排布*/
    align-items: flex-start;
    justify-content: flex-start;

    height: calc(100vh - 5rem);
}


main nav {
    background-color: #eeeeee;
    height: 100%;
    width: 15rem;
}
</style>
