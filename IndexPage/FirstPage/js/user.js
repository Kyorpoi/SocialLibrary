/*
* @Author: 凛冬
* @Date:   2019-02-14
 * @Last Modified by: 凛ドン
 * @Last Modified time: 2019-03-27 19:58:56
*/
var Header = {
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
  }
}
var Search = {
  data() {
    return {
      form: {
        dbs: [{
          value : '94im',
          label : '94im' 
        },{
          value : '106w',
          label : '106w'
        },{
          value : '766Games',
          label : '766游戏网'
        },{
          value : 'Acfun',
          label : 'Acfun'
        },{
          value : 'Mumayi',
          label : '木蚂蚁'
        },{
          value : 'Renren',
          label : '人人网'
        },{
          value : 'Unknown',
          label : '未知杂数据'
        }],
        user: '',
        value:'',
        resultData:[],
        loading: true
      }
    }
  },
  watch:{
    user:function(val){
      this.form.user = val;
    }
  },
  methods: {
    Submit() {
      //发送 post 请求进行精确查询
      //alert(this.form.user);
      if(!this.form.user){
        this.$alert('用户名为空！', '未输入用户名！', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: '输入要查询的用户名之后才可以进行查询'
            });
          }
        });
      }
      else if(this.form.value == ''){
        this.$alert('请选择数据库！', '未选择数据库！', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: '选择数据库之后才可以进行查询'
            });
          }
        });
      }
      else{
          this.$http.post('http://192.168.23.128/Search.php',{
          TableName:this.form.value,
          Value:this.form.user,
          CColName:'Username[=]',
          Option:3
        },{emulateJSON:true}).then(function(res){
          this.$http.get('http://192.168.23.128/data.json').then(res=>{
            this.form.resultData = res.body;
          })
        },function(res){
          this.$alert('请求数据错误','请联系管理员'),{
            confirmButtonText:'确定'
          }
            //console.log(res.status);
        });
        //console.dir(this.form.user);
        //console.dir(this.form.value);
        //console.log('accurate!');
      }
    },
    Submit1() {
      //发送 post 请求进行模糊查询
      if(!this.form.user){
        this.$alert('用户名为空！', '未输入用户名！', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: '输入要查询的用户名之后才可以进行查询'
            });
          }
        });
      }
      else if(this.form.value == ''){
        this.$alert('请选择数据库！', '未选择数据库！', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: '选择数据库之后才可以进行查询'
            });
          }
        });
      }
      else{
        this.$http.post('http://192.168.23.128/Search.php',{
          TableName:this.form.value,
          Value:this.form.user,
          CColName:'Username[~]',
          Option:3
        },{emulateJSON:true}).then(function(res){
          this.$http.get('http://192.168.23.128/data.json').then(res=>{
            this.form.resultData = res.body;
            //console.log(res);
            //console.log(this.form.resultData);
          })
            //this.form.result = res.data;
            //console.dir(this.form.c.Username);
            //console.log(this.form.result);
            //this.form.result=JSON.parse(this.form.result);
            //alert(typeof(this.form.result));
        },function(res){
          alert('数据请求出错，请稍后再试');
          //console.log(res.status);
        }); 
      }
      //console.dir(this.form.user);
      //console.dir(this.form.value);
      //console.log('accurate!');
    },
    doReset() {
      window.location.reload();
    },
    prompt(){
      this.$notify.info({
        title: '提示',
        message: '输入用户名以寻找自己的用户名对应的密码来查看自己的账户是否泄露。',
        position: 'top-left'
      });
    }
  }
}

var Ctor = Vue.extend(Header)
new Ctor().$mount('#Header')
var Ctor = Vue.extend(Search)
new Ctor().$mount('#Search')