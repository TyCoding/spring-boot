//设置全局表单提交格式
Vue.http.options.emulateJSON = true;

// Vue实例
new Vue({
    el: '#app',
    data() {
        return {
            checked: false,
            register: {
                username: '',
                password: '',
                repassword: ''
            }
        }
    },
    methods: {
        submitForm(register) {
            if(this.register.repassword != this.register.password){
                // 弹出错误信息框
                this.$emit(
                    'submit-form',
                    this.$message({
                        message: '两次输入的密码不相同',
                        type: 'warning',
                        duration: 6000
                    }),
                );
                // 清空表单状态
                this.$refs[register].resetFields();
            }else{
                this.$refs[register].validate((valid) => {
                    if (valid) {
                        //提交表单
                        this.$http.post('/register', {
                            username: this.register.username,
                            password: this.register.password,
                        }).then(result => {
                            console.log(result);
                            // 判断用户是否登录成功，后端返回JSON格式数据，不然娶不到数据
                            if (result.body.success) {
                                window.location.href = "/index";
                            } else {
                                // 弹出错误信息框
                                this.$emit(
                                    'submit-form',
                                    this.$message({
                                        message: result.body.message,
                                        type: 'warning',
                                        duration: 6000
                                    }),
                                );
                                // 清空表单状态
                                this.$refs[register].resetFields();
                            }
                        });
                    } else {
                        this.$emit(
                            'submit-form',
                            this.$message({
                                message: '输入信息有误！',
                                type: 'warning',
                                duration: 6000
                            }),
                        );
                        return false;
                    }
                });
            }
        },
        registerEnter(register){
            this.submitForm(register);
        }
    }
});
