<template>
  <div>
    <div class="edit_container">
      <quillEditor v-model="infoForm.a_content" ref="myQuillEditor">
      </quillEditor>
    </div>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
export default {
    data() {
        return {
            infoForm: {
                a_title: "",
                a_source: "",
                a_content: "",
                editorOption: {}
            },
            //表单验证
            rules: {
                a_title: [
                    { required: true, message: "请输入标题", trigger: "blur" }
                ],
                a_content: [
                    {
                        required: true,
                        message: "请输入详细内容",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    computed: {},
    mounted() {
        //初始化
    },
    methods: {},
    components: {
        //使用编辑器
        quillEditor
    }
};
</script>
