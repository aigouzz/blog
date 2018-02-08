var app = new Vue({
    el:'#app',
    data:{
        title:'我的博客',
        name:'anything you want you can ask for it!',
        time:''
    },
    methods:{
        clickMeta(){
            this.name = '';
        }
    },
    computed:{
        big(){
            return this.title;
        },
        other(){
            return this.name + this.time;
        }
    }
});