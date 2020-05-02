<template>
  <div class="picture">
    <div class="upPic">
      <div class="upPicTitle"><span>上传图片：</span></div>
      <div style="display:inline-block">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :limit='1'
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </div>
    </div>
    <div class="upPic">
      <div class="upPicTitle"><span>新闻标题：</span></div>
      <div style="display:inline-block">
        <el-input v-model="input" placeholder="请输入新闻标题"></el-input>
      </div>
    </div>
    <div class="upPic">
      <div class="upPicTitle"><span>新闻内容：</span></div>
      <div style="display:inline-block">
        <el-card style="height: 510px;margin-top:20px;">
          <quill-editor
            v-model="content"
            ref="myQuillEditor"
            style="height: 400px;"
            :options="editorOption"
          >
          </quill-editor>
        </el-card>
      </div>
    </div>
    <div style="width:84%;text-align: center;margin-bottom:50px;">
      <el-button type="info" @click="submit">确认提交</el-button>
    </div>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      input: "",
      content: null,
      editorOption: {},
    };
  },
  components: {
    quillEditor,
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    submit() {
      this.$confirm("此操作将发布新闻和首页轮播图, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "提交成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>
<style lang="less">
.picture {
  margin: 24px 0px 0px 18%;
  .upPic {
    background: #fff;
    padding: 20px;
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;

    .upPicTitle {
      display: inline-block;
      width: 100px;
      vertical-align: top;
      span {
        vertical-align: top;
      }
    }
  }
}
</style>
