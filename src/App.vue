<template>
  <el-container>
    <el-header>AppBudget</el-header>
    <el-main>
      <el-row justify="center" >
        <el-col :span="12" :offset="6">
          <AppTotalBalance :total="totalBalance"/>
        </el-col>
      </el-row>
      <el-row justify="center">
        <el-col :span="12" :offset="6">
          <AppBudgetList :list="list" @deleteItem="onDeleteItem"/>
        </el-col>
      </el-row>
      <el-row justify="center">
        <el-col :span="12" :offset="6">
          <AppFormAdd @addNewFormData="addNewBalance"/>
        </el-col>
      </el-row>



    </el-main>
  </el-container>
</template>

<script>
import AppBudgetList from "@/components/AppBudgetList";
import AppTotalBalance from "@/components/AppTotalBalance";
import AppFormAdd from "@/components/AppFormAdd";
export default {
  name: 'App',
  components: {
    AppBudgetList,
    AppTotalBalance,
    AppFormAdd,
  },
  data() {
    return {
      list: {
        1: {
          type: 'INCOME',
          value: 100,
          comment: 'comment',
          id: 1,
          data: '21.02.2021'
        },
        2: {
          type: 'EXPENSE',
          value: -50,
          comment: 'comment',
          id: 2,
          data: '24.02.2021'
        }
      },
    };
  },
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, item) => acc + item.value, 0)
    }
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id)
    },
    addNewBalance(data) {
      const  newObj = {
        ...data,
        id: String(Math.random())
      };
      this.$set(this.list, newObj.id, newObj)
    }
  },
}
</script>
<style>
body {
  font-family: Arial;
}
.is-justify-center {
  justify-content: center;
}
</style>
