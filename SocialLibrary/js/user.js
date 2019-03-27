/*
 * @Author: 凛ドン 
 * @Date: 2019-03-27 20:02:26 
 * @Last Modified by:   凛ドン 
 * @Last Modified time: 2019-03-27 20:02:26 
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
          pwd: '',
          dbs: '',
        }
      }
    },
    methods: {
      Submit() {
        console.log('accurate!');
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