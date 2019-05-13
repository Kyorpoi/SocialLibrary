/*
* @Author: 凛冬
* @Date:   2019-02-14
 * @Last Modified by: 凛ドン
 * @Last Modified time: 2019-03-27 19:58:56
*/
var Header = {
    data() {
      return {
        activeIndex: '3',
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
            value : 'DangdangNet',
            label : '当当网'
          },{
            value : 'Mumayi',
            label : '木蚂蚁'
          },{
            value : 'Renren',
            label : '人人网'
          },{
            value : 'Unknown',
            label : '未知杂数据'
          },{
            value : '*',
            label : '全部'
          }],
          pwd: '',
          value:'',
          c:[]
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
        this.$http.post('http://192.168.23.128/Search.php',{
          TableName:this.form.value,
          Value:this.form.pwd,
          CColName:'Password[=]'
        },{emulateJSON:true}).then(function(res){
            this.form.c = res.data;
            //alert(res.data);
        },function(res){
            console.log(res.status);
        });
        //console.dir(this.form.pwd);
        //console.dir(this.form.value);
        //console.log('accurate!');
      },
      Submit1() {
        //发送 post 请求进行模糊查询
        this.$http.post('http://192.168.23.128/Search.php',{
          TableName:this.form.value,
          Value:this.form.pwd,
          CColName:'Password[~]'
        },{emulateJSON:true}).then(function(res){
            this.form.c = res.data;
            alert(typeof(this.form.c));
            //alert(res.data);
        },function(res){
            //console.log(res.status);
            
        });
        //console.dir(this.form.pwd);
        //console.dir(this.form.value);
        //console.log('accurate!');
      }
    }
  }
var Result = {
    data() {
      return {
        tableData3: [{
          mail: 'test@123.com',
          name: '王小虎',
          password: '123456'
        }, {
          mail: 'test@123.com',
          name: '王小虎',
          password: '123456'
        }, {
          mail: 'test@123.com',
          name: '王小虎',
          password: '123456'
        }, {
          mail: 'test@123.com',
          name: '王小虎',
          password: '123456'
        }, {
          mail: 'test@123.com',
          name: '王小虎',
          password: '123456'
        }, {
          mail: 'test@123.com',
          name: '王小虎',
          password: '123456'
        }, {
          mail: 'test@123.com',
          name: '王小虎',
          password: '123456'
        },{
          mail: 'test@123.com',
          name: '王小虎',
          password: '123456'
        },{
          mail: 'test@123.com',
          name: '王小虎',
          password: '123456'
        },{
          mail: 'test@123.com',
          name: '王小虎',
          password: '123456'
        },{
          mail: 'test@123.com',
          name: '王小虎',
          password: '123456'
        },{
          mail: 'test@123.com',
          name: '王小虎',
          password: '123456'
        },{
          mail: 'test@123.com',
          name: '王小虎',
          password: '123456'
        },{
          mail: 'test@123.com',
          name: '王小虎',
          password: '123456'
        },
        ]
      }
    }
  }
var Ctor = Vue.extend(Header)
new Ctor().$mount('#Header')
var Ctor = Vue.extend(Search)
new Ctor().$mount('#Search')
var Ctor = Vue.extend(Result)
new Ctor().$mount('#Result')