<template>
<div class="budget-list">

  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h5 class="el-calendar__title title">{{headerTitle}}</h5>
    </div>
    <el-alert
        :title="zeroTitle"
        type="info"
        :closable=false
        v-if="!isNotEmptyList"
    >
    </el-alert>
    <template v-else>
      <div v-for="item in list" :key="item.id" class="text item">
        {{item.type }}, {{item.value }}, {{item.comment }}, {{item.data }}
        <el-button type="danger" icon="el-icon-delete" circle @click="deleteItem(item.id)"></el-button>
      </div>
    </template>


  </el-card>
</div>
</template>

<script>
export default {
name: "AppBudgetList",
  props: {
    list: {
      type:  Object,
      default: () => ({}),
    }
  },
  data() {
    return {
      headerTitle: 'Budget List',
      zeroTitle: 'Budget List empty',
    }
  },
  computed: {
  isNotEmptyList() {
    console.log(Boolean(Object.keys(this.list).length))
    return Boolean(Object.keys(this.list).length)
  }
  },
  methods: {
  deleteItem(id) {
    this.$emit('deleteItem', id)
  }
  }
}
</script>
<style>
.item {
  padding: 10px;
}
.title {
  text-align: center;
}
h5.title {
  margin: 0;
}
</style>