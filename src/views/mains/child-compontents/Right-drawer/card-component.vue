<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a-card
    hoverable
    class="card"
    :style="`background-color:${backgroundColor} ;margin-right: 30px`"
  >
    <div class="card-content">
      <a-avatar
        :size="64"
        style="margin-bottom: 10px"
        src="src/assets/image/avatar.png"
      />
      <h1 @click="onClose" style="font-size: 30px">
        <slot></slot>
      </h1>
      <span>字数：</span>
      <a-typography-paragraph
        style="font-size: 20px"
        :ellipsis="{ rows: 3, expandable: false, symbol: 'more' }"
        content="母亲的娘家是北平德胜门外，土城儿外边，通大钟寺的大路上的一个小村里。村里一共有四五家人家，都姓马。
      大家都种点不十分肥美的地，但是与我同辈的兄弟们，也有当兵的，作木匠的，作泥水匠的，和当巡察的。
      他们虽然是农家，却养不起牛马，人手不够的时候，妇女便也须下地作活。对于姥姥家，我只知道上述的一点。外公外婆是什么样子，我就不知道了，因为他们早已去世。
      至于更远的族系与家史，就更不晓得了；穷人只能顾眼前的衣食，没有功夫谈论什么过去的光荣；“家谱”这字眼，我在幼年就根本没有听说过。
      母亲生在农家，所以勤俭诚实，身体也好。这一点事实却极重要，因为假若我没有这样的一位母亲，我以为我恐怕也就要大大的打个折扣了。
      母亲出嫁大概是很早，因为我的大姐现在已是六十多岁的老太婆，而我的大外甥女还长我一岁啊。我有三个哥哥，四个姐姐，但能长大成人的，只有大姐，二姐，三姐，三哥与我。
      我是“老”儿子。生我的时候，母亲已有四十一岁，大姐二姐已都出了阁。由大姐与二姐所嫁入的家庭来推断，在我生下之前，我的家里，大概还马马虎虎的过得去。
      那时候定婚讲究门当户对，而大姐丈是作小官的，二姐丈也开过一间酒馆，他们都是相当体面的人。
      可是，我，我给家庭带来了不幸：我生下来，母亲晕过去半夜，才睁眼看见她的老儿子——感谢大姐，把我揣在怀中，致未冻死。一岁半，我把父亲“克”死了。
      兄不到十岁，三姐十二三岁，我才一岁半，全仗母亲独力抚养了。父亲的寡姐跟我们一块儿住，她吸鸦片，她喜摸纸牌，她的脾气极坏。为我们的衣食，母亲要给人家洗衣服，缝补或裁缝衣裳。
      在我的记忆中，她的手终年是鲜红微肿的。白天，她洗衣服，洗一两大绿瓦盆。她作事永远丝毫也不敷衍，就是屠户们送来的黑如铁的布袜，她也给洗得雪白。
      晚间，她与三姐抱着一盏油灯，还要缝补衣服，一直到半夜。她终年没有休息，可是在忙碌中她还把院子屋中收拾得清清爽爽。
      桌椅都是旧的，柜门的铜活久已残缺不全，可是她的手老使破桌面上没有尘土，残破的铜活发着光。
      院中，父亲遗留下的几盆石榴与夹竹桃，永远会得到应有的浇灌与爱护，年年夏天开许多花。哥哥似乎没有同我玩耍过。有时候，他去读书；有时候，他去学徒；
      有时候，他也去卖花生或樱桃之类的小东西。母亲含着泪把他送走，不到两天，又含着泪接他回来。我不明白这都是什么事，而只觉得与他很生疏。与母亲相依为命的是我与三姐。
      因此，她们作事，我老在后面跟着。她们浇花，我也张罗着取水；她们扫地，我就撮土……从这里，我学得了爱花，爱清洁，守秩序。这些习惯至今还被我保存着。
      有客人来，无论手中怎么窘，母亲也要设法弄一点东西去款待。舅父与表哥们往往是自己掏钱买酒肉食，这使她脸上羞得飞红，可是殷勤的给他们温酒作面，又给她一些喜悦。
      遇上亲友家中有喜丧事，母亲必把大褂洗得干干净净，亲自去贺吊——份礼也许只是两吊小钱。到如今如我的好客的习性，还未全改，尽管生活是这么清苦，因为自幼儿看惯了的事情是不易改掉的。"
      />
    </div>

    <template #actions>
      <div>
        <a-button
          type="primary"
          @click="showEditModal"
          style="
            border-radius: 58px;
            font-size: 26px;
            width: 129px;
            height: 58px;
          "
          >编辑</a-button
        >
      </div>

      <a-button
        type="primary"
        style="
          border-radius: 58px;
          background-color: rgba(255, 255, 255, 1);
          color: rgba(69, 153, 122, 1);
          opacity: 1;
          border: 1px solid rgba(180, 219, 205, 1);
          font-size: 26px;
          width: 129px;
          height: 58px;
        "
        @click="showModal"
        >预览</a-button
      >
    </template>
  </a-card>
  <a-modal
    v-model:open="openEdit"
    title="编辑"
    width="100%"
    wrap-class-name="all-modal"
    @ok="handleEditOk"
    ok-text="保存"
    cancel-text="取消"
    style="text-align: center"
  >
    <p contenteditable @input="updateText">
      {{ editableText }}
    </p>
  </a-modal>
  <a-modal
    v-model:open="open"
    title="预览"
    width="100%"
    wrap-class-name="all-modal"
    @ok="handleOk"
    ok-text="确定"
    cancel-text="取消"
    style="text-align: center"
  >
    <p>123</p>
  </a-modal>
</template>
<script setup lang="ts">
import { ref, defineEmits } from 'vue'
const props = defineProps({
  backgroundColor: {
    type: String,
    default: 'rgba(255, 255, 255, 1)'
  }
})
const editableText =
  ref(`母亲的娘家是北平德胜门外，土城儿外边，通大钟寺的大路上的一个小村里。村里一共有四五家人家，都姓马。
      大家都种点不十分肥美的地，但是与我同辈的兄弟们，也有当兵的，作木匠的，作泥水匠的，和当巡察的。
      他们虽然是农家，却养不起牛马，人手不够的时候，妇女便也须下地作活。对于姥姥家，我只知道上述的一点。外公外婆是什么样子，我就不知道了，因为他们早已去世。
      至于更远的族系与家史，就更不晓得了；穷人只能顾眼前的衣食，没有功夫谈论什么过去的光荣；“家谱”这字眼，我在幼年就根本没有听说过。
      母亲生在农家，所以勤俭诚实，身体也好。这一点事实却极重要，因为假若我没有这样的一位母亲，我以为我恐怕也就要大大的打个折扣了。
      母亲出嫁大概是很早，因为我的大姐现在已是六十多岁的老太婆，而我的大外甥女还长我一岁啊。我有三个哥哥，四个姐姐，但能长大成人的，只有大姐，二姐，三姐，三哥与我。
      我是“老”儿子。生我的时候，母亲已有四十一岁，大姐二姐已都出了阁。由大姐与二姐所嫁入的家庭来推断，在我生下之前，我的家里，大概还马马虎虎的过得去。
      那时候定婚讲究门当户对，而大姐丈是作小官的，二姐丈也开过一间酒馆，他们都是相当体面的人。
      可是，我，我给家庭带来了不幸：我生下来，母亲晕过去半夜，才睁眼看见她的老儿子——感谢大姐，把我揣在怀中，致未冻死。一岁半，我把父亲“克”死了。
      兄不到十岁，三姐十二三岁，我才一岁半，全仗母亲独力抚养了。父亲的寡姐跟我们一块儿住，她吸鸦片，她喜摸纸牌，她的脾气极坏。为我们的衣食，母亲要给人家洗衣服，缝补或裁缝衣裳。
      在我的记忆中，她的手终年是鲜红微肿的。白天，她洗衣服，洗一两大绿瓦盆。她作事永远丝毫也不敷衍，就是屠户们送来的黑如铁的布袜，她也给洗得雪白。
      晚间，她与三姐抱着一盏油灯，还要缝补衣服，一直到半夜。她终年没有休息，可是在忙碌中她还把院子屋中收拾得清清爽爽。
      桌椅都是旧的，柜门的铜活久已残缺不全，可是她的手老使破桌面上没有尘土，残破的铜活发着光。
      院中，父亲遗留下的几盆石榴与夹竹桃，永远会得到应有的浇灌与爱护，年年夏天开许多花。哥哥似乎没有同我玩耍过。有时候，他去读书；有时候，他去学徒；
      有时候，他也去卖花生或樱桃之类的小东西。母亲含着泪把他送走，不到两天，又含着泪接他回来。我不明白这都是什么事，而只觉得与他很生疏。与母亲相依为命的是我与三姐。
      因此，她们作事，我老在后面跟着。她们浇花，我也张罗着取水；她们扫地，我就撮土……从这里，我学得了爱花，爱清洁，守秩序。这些习惯至今还被我保存着。
      有客人来，无论手中怎么窘，母亲也要设法弄一点东西去款待。舅父与表哥们往往是自己掏钱买酒肉食，这使她脸上羞得飞红，可是殷勤的给他们温酒作面，又给她一些喜悦。
      遇上亲友家中有喜丧事，母亲必把大褂洗得干干净净，亲自去贺吊——份礼也许只是两吊小钱。到如今如我的好客的习性，还未全改，尽管生活是这么清苦，因为自幼儿看惯了的事情是不易改掉的。`)
const updateText = (event: { target: { textContent: string } }) => {
  // 更新可编辑文本的内容
  editableText.value = event.target.textContent
}
const openEdit = ref<boolean>(false)
const open = ref<boolean>(false)

const showEditModal = () => {
  openEdit.value = true
}
const showModal = () => {
  open.value = true
}
const handleEditOk = (e: MouseEvent) => {
  console.log(e)
  open.value = false
}
const handleOk = (e: MouseEvent) => {
  console.log(e)
  open.value = false
}

const emit = defineEmits(['closeDrawer'])
function onClose() {
  open.value = false
  emit('closeDrawer', open.value) // 发射一个自定义事件，告知父组件关闭抽屉
  console.log('点击了我的母亲')
}
</script>
<style scoped>
/* @import url(''); */
.card {
  width: 300px;
}
.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.full-modal {
  .ant-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
  }
  .ant-modal-body {
    flex: 1;
  }
}
</style>
<style>
.all-modal {
  .ant-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
  }
  .ant-modal-body {
    flex: 1;
  }
}
</style>
