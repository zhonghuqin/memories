<template>
  <a-card hoverable class="card-container">
    <template #actions>
      <EditPersonal key="button" @data-updated="handleDataUpdated" />
    </template>
    <img
      class="avatar"
      :width="120"
      :height="120"
      alt="一个头像"
      src="../../../../assets/image/head-photo.jpg"
    />
    <a-typography-title :level="5" style="color: white">{{
      name
    }}</a-typography-title>
    <div class="personal-information">
      <p>性别：{{ sex }}</p>
      <p>年龄：{{ age }}</p>
      <p>住址：{{ address }}</p>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import EditPersonal from './EditPersonal.vue'
import { ref } from 'vue'
// 使用 ref 声明响应式数据
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae']
const userName = ref('')
const color = ref(colorList[0])
const name = ref('这是一个人名')
const sex = ref('女')
const age = ref('18岁')
const address = ref('成都市xx区')
// 接收子组件传递的数据,更新数据
const handleDataUpdated = (data: any) => {
  console.log('Received updated data from child component:', data)
  name.value = data.name
  sex.value = data.sex
  age.value = data.age
  address.value = data.address
}
const token = localStorage.getItem('token')
const id = localStorage.getItem('AcountID') as string
// 获取数据
const amendMessage = () => {}
amendMessage()
</script>

<style scoped>
.personal-information {
  color: white;
  text-align: left;
}
.card-container {
  margin: 5vh 10px;
  background-color: rgba(255, 195, 100, 1);
}
.avatar {
  border-radius: 50%;
}
</style>
