/*
* @Author: 凛冬
* @Date:   2019-02-14
 * @Last Modified by: YukiMuraRindon
 * @Last Modified time: 2019-07-03 18:06:35
*/
var Header = {
    data() {
      return {
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
            value : '2w5huji',
            label : '部分户籍' 
          },{
            value : '7k7kGames',
            label : '7k7k游戏网'
          },{
            value : '94im',
            label : '94im'
          },{
            value : '106w',
            label : '未知来源-1'
          },{
            value : '163-1',
            label : '网易163邮箱库1'
          },{
            value : '163-2',
            label : '网易163邮箱库2'
          },{
            value : '178Games',
            label : '178游戏网'
          },{
            value : '766Games',
            label : '766游戏网' 
          },{
            value : 'Acfun',
            label : 'Acfun老数据' 
          },{
            value : 'aipai',
            label : '爱拍' 
          },{
            value : 'amazonCN',
            label : '亚马逊中国' 
          },{
            value : 'DangdangNet',
            label : '当当网' 
          },{
            value : 'duduniu-1',
            label : '嘟嘟牛库1' 
          },{
            value : 'duduniu-2',
            label : '嘟嘟牛库2' 
          },{
            value : 'fanke',
            label : '凡客诚品' 
          },{
            value : 'gmail',
            label : 'gmail' 
          },{
            value : 'ispeak',
            label : 'IS语音' 
          },{
            value : 'Mumayi',
            label : '木蚂蚁' 
          },{
            value : 'Renren',
            label : '人人网' 
          },{
            value : 'telegram',
            label : '第三方tg泄露' 
          },{
            value : 'tianya-1',
            label : '天涯库1' 
          },{
            value : 'Unknown',
            label : '未知来源-2' 
          },{
            value : 'unknown_members-1',
            label : '未知来源-3' 
          },{
            value : 'unknown_members-2',
            label : '未知来源-4' 
          },{
            value : 'unknown_members-3',
            label : '未知来源-5' 
          },{
            value : 'unknown_members-4',
            label : '未知来源-6' 
          },{
            value : 'unknown_members-5',
            label : '未知来源-7' 
          },{
            value : 'unknown_members-6',
            label : '未知来源-8' 
          },{
            value : 'xenforo-IPB',
            label : 'xenforo-IPB' 
          },],
          pwd: '',
          value:'',
          resultData:[],
          loading: true
        }
      }
    },
    watch:{
      pwd:function(val){
        this.form.pwd = val;
      }
    },
    methods: {
      Submit() {
        //发送 post 请求进行精确查询
        //alert(this.form.pwd);
        if(!this.form.pwd){
          this.$alert('密码为空！', '未输入密码！', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message: '输入要查询的密码之后才可以进行查询'
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
            Value:this.form.pwd,
            CColName:'Password[=]',
            Option:1
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
          //console.dir(this.form.pwd);
          //console.dir(this.form.value);
          //console.log('accurate!');
        }
      },
      Submit1() {
        //发送 post 请求进行模糊查询
        if(!this.form.pwd){
          this.$alert('密码为空！', '未输入密码！', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message: '输入要查询的密码之后才可以进行查询'
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
            Value:this.form.pwd,
            CColName:'Password[~]',
            Option:1
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
        //console.dir(this.form.pwd);
        //console.dir(this.form.value);
        //console.log('accurate!');
      },
      doReset() {
        window.location.reload();
      },
      md5Encode(){
        this.form.pwd = md5(this.form.pwd);
      },
      prompt(){
        this.$notify.info({
          title: '提示',
          message: '输入密码以寻找自己的用户名来查看自己的账户是否泄露。',
          position: 'top-left'
        });
      }
    }
  }

var Ctor = Vue.extend(Header)
new Ctor().$mount('#Header')
var Ctor = Vue.extend(Search)
new Ctor().$mount('#Search')