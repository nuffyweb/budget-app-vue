<template>
  <el-card class="box-card box-card-form">
    <div slot="header" class="clearfix">
      <h5 class="el-calendar__title title">{{headerTitle}}</h5>
    </div>
  <el-form ref="form" :model="form" :rules="rules" label-width="120px">
    <el-form-item label="type" prop="type">
      <el-select v-model="form.type" placeholder="chose type">
        <el-option label="INCOME" value="INCOME"></el-option>
        <el-option label="EXPENSE" value="EXPENSE"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="value" prop="value">
      <el-input v-model.number="form.value"></el-input>
    </el-form-item>
    <el-form-item label="comment" prop="comment">
      <el-input type="textarea" v-model="form.comment"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Add</el-button>
      <el-button @click="Clear">Clear</el-button>
    </el-form-item>
  </el-form>
  </el-card>
</template>

<script>
export default {
name: "AppFormAdd",
  data() {
    return {
      headerTitle: 'form to add',
      form: {
        type: '',
        value: 0,
        comment: '',
        id: null,
        date: '',
      },
      rules: {
        type: [
          { required: true, message: 'Please select at least one activity type', trigger: 'blur' }
        ],
        value: [
          { required: true, message: 'Please enter value', trigger: 'blur' },
          { type: 'number', message: 'must be number', trigger: 'blur' }
        ],
        comment: [
          { required: true, message: 'Please enter comment', trigger: 'blur' }
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      console.log(this.$refs)
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit('addNewFormData', {...this.form})
          this.Clear()
        } else {
          console.log('error submit!!');
          return false;
        }
      });

    },
    Clear() {
      console.log('Clear!');
      this.$refs.form.resetFields();
    }
  },
}
</script>

<style scoped>
.box-card-form {
  margin-top: 100px;
}
</style>