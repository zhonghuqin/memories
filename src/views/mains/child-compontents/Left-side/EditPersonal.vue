<template>
  <a-button type="primary" class="Editbtn" @click="showDrawer"
    >修改个人信息</a-button
  >
  <a-drawer
    title="请填写个人信息"
    :width="720"
    :open="open"
    :body-style="{ paddingBottom: '80px' }"
    :footer-style="{ textAlign: 'right' }"
    @close="onClose"
  >
    <a-form
      ref="formRef"
      :model="form"
      :rules="rules"
      layout="vertical"
      class="form"
      size="large"
    >
      <a-row :gutter="16">
        <a-col :span="18">
          <a-form-item label="姓名" name="name">
            <a-input v-model:value="form.name" placeholder="请输入名字" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="18">
          <a-form-item label="年龄" name="age">
            <a-input v-model:value="form.age" placeholder="请输入年龄" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="18">
          <a-form-item label="性别" name="sex">
            <a-select
              v-model:value="form.sex"
              :options="options"
              placeholder="请选择性别"
            >
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="18">
          <a-form-item label="地址" name="address">
            <a-input v-model:value="form.address" placeholder="请输入地址" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <!-- 将按钮组移至此处，即表单下方 -->
    <div class="drawer-footer">
      <a-space>
        <a-button @click="onClose">取消</a-button>
        <a-button
          type="primary"
          @click="
            sendDataToBackend(form.name, form.age, form.sex, form.address, id)
          "
          >保存</a-button
        >
      </a-space>
    </div>
  </a-drawer>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { Rule } from 'ant-design-vue/es/form'
import type { SelectProps } from 'ant-design-vue'

interface FormData {
  name: string
  age: string
  sex: undefined
  address: string
}
const form = reactive<FormData>({
  name: '',
  age: '',
  sex: undefined,
  address: ''
})
const options = ref<SelectProps['options']>([
  { value: '男', label: '男' },
  { value: '女', label: '女' }
])
const formRef = ref()

const rules: Record<string, Rule[]> = {
  name: [
    {
      required: true,
      message: '请填写您的姓名',
      trigger: 'change'
    }
  ],
  age: [
    {
      required: true,
      message: '请填写您的年龄',
      trigger: 'change'
    }
  ],
  sex: [
    {
      required: true,
      message: '请选择您的性别',
      trigger: 'change'
    }
  ],
  address: [
    {
      required: true,
      message: '请填写您的地址',
      trigger: 'change'
    }
  ]
}
const open = ref<boolean>(false)
const showDrawer = () => {
  open.value = true
  amendMessage()
}

const onClose = () => {
  open.value = false
}
const token = localStorage.getItem('token')
const id = localStorage.getItem('AcountID') as string

// 获取数据
const amendMessage = () => {}
// 修改数据
const sendDataToBackend = async (
  name: string,
  age: string,
  sex: undefined,
  address: string,
  id: string
) => {
  await formRef.value.validate()
  // 清空表单数据
  form.name = ''
  form.age = ''
  form.sex = undefined // 或者你可以设置一个默认值如''，具体依据你的需求
  form.address = ''
  onClose()
}
</script>
<style scoped>
@import url('@/assets/css/mains/child-components/Left-side/personallnfor.css');
</style>
