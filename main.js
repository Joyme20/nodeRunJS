"use strict"
import CallApplyBind from './callApplyBind'
import DataStructures from './dataStructures'
import $ from 'jquery'
import axios from 'axios'

// let call = new CallApplyBind()
// call.eat()

// let arr = [0,1,2,3]
// arr2.splice(3,1)
// arr2.reverse()
// arr.splice(1,0,arr2)
// console.log(arr,arr2)


// let dataS = new DataStructures
// console.log(dataS.mulBase(2,2))
// function fn(n){
//     if(n<=2){
//         return 1;
//     }else{
//         return fn(n-1)+fn(n-2);
//     }
// }
// console.log(fn(6));
//
// var a=1;
// var a=3;
// console.log(a); //3
// for(var i=0;i<4;i++){
//     console.log(i)
//     }
// let test = [1,2]
// console.log(Array.isArray(test))
//
// var xmlhttp;
//
// if (window.XMLHttpRequest) {
//     xmlhttp = new XMLHttpRequest();
//     console.log(xmlhttp)
//     xmlhttp.open("GET", filepath , false);
//     xmlhttp.send(null);
// }
// console.log("test",xmlhttp)

// function makeFunc() {
//     var name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
//
// makeFunc()()

// var myFunc = makeFunc();
// myFunc();


// function timeout(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,ms,'done');
//     });
// }
//
//
// timeout(10000).then((value)=>{
//     console.log(value);
// });
//
//
// // for(let i=0;i<flights.length;i++){
// //
// // }
//
// function fn(num) {
//     return new Promise(function(resolve, reject) {
//         if (typeof num == 'number') {
//             resolve();
//         } else {
//             reject();
//         }
//     })
//         .then(function() {
//             console.log('参数是一个number值');
//         })
//         .then(null, function() {
//             console.log('参数不是一个number值');
//         })
// }
//
// fn('hahha');
// fn(1234);


// function a(i,num,arr) {
//     let arr2 = []
//     for(let i=0;i<Math.floor(num/2);i++){
//         arr2.push(arr[2*i+1])
//     }
//     let l = arr2.length
//     //console.log(arr2)
//     if(l>1) return a(i+1,l,arr2)
//     console.log(arr2.join(""))
//     console.log(Math.pow(2,i))
// }
// a(1,8,[1,2,1,2,3,5,6,9])
function print(...a) {
    console.log(...a)
}

// print(a)
// console.log(a)
// let a = 2
// let b = typeof (a)
// {
//     console.log(a)
//     let a = 1
// }
// console.log(b)
// let c = navigator.userAgent
// print(c)

// aa()
// function aa() {
//     print(2)
// }
// function aa() {
//     print(4)
// }
//
// var aa = function () {
//     print(1)
// }
// var aa = function () {
//     print(3)
// }
//
// aa()
// print(`aaaa${a}`)
//
// //定义被侦听的目标对象
// var engineer = { name: 'Joe Sixpack', salary: 50 };
// // 定义处理程序
// var interceptor = {
//     set: function (receiver, property, value) {
//         console.log(property, 'is changed to', value);
//         receiver[property] = value;
//         return true
//     }
// };
// //创建代理以进行侦听
// engineer = new Proxy(engineer, interceptor);
// // 做一些改动来触发代理
// engineer.salary = 60;
// // 控制台输出：salary is changed to 60
// let d = 1
// console.log(typeof String(d))
//
// function rand(m,n) {
//     return Math.floor(Math.random()*(n-m+1))
//
// }
// function randFace() {
//     return ["a","b","c"][rand(0,2)];
// }
// print(randFace())
//
// print(["a","b","c"][2])
//
// let e = function () {
//     return "a"
// }
// let f = {}
// print(typeof (f))
// const aaa = {
//     name:'aa',
//     ff: function () {
//         function fff() {
//             print(this)
//         }
//         print(this)
//         fff.call(aaa)
//     }
// }
// aaa.ff()

// function update(a,b) {
//     this.a = a
//     this.b = b
//     this.name = "gg"
// }
// const o = {
//     name:"mm"
// }
// update.call(o)
// print(o.name,o.a,o.b)


// let test = 1
// {
//     let test = 2
//     console.log(test)
// }
// print(test)
//
// var x
// function con() {
//      x = 1
// }
// con()
// print("x",x)
//
// let arr = [1,2,3,4]
// let str = "1234"
// print(arr.slice(-1),arr)
// print(str.slice(1,2))
// print(str.substring(1,str.length-1),str.length)
// print(arr.concat(1,2,3))
// print(arr)
// arr.splice(2,1)
// print(arr)

// let a = /ab/g;
// let b = "abcdabcc";
// print(/ab/g.exec(b))
// let reg = /\w/g
// let str = "abca_aaabc"
// let value = str.match(reg)
// // value = value+1
// print(value)

// var moduleJson = {//括号匹配模板，你可以增加别的匹配，比如“{}”，“<>”，等，只需写入moduleJson里面去
//     ")":"(",
//     "]":"[",
//     "}":"{"
//
// }
//


// print(sortByCount())
// print((new Array(3)).fill(4))


// export default class class1{
//     constructor(a,b){
//         this.name = a
//         this.age = b
//
//     }
//     static f1(){
//         print("f1")
//     }
// }
// class1.f1()
// let class11 = new class1("aa",23)
// print(class11.name)
// class super1{
//     constructor(){
//         this.age = 2
//     }
// }
// class sub extends super1{
//     constructor(){
//         super()
//         this.name = "sub"
//
//     }
// }
//
// let obj = new sub()
// print(obj)
// for(let p in obj){
//     print("p",p)
// }

// var a=[];
// for(var i=0;i<10;i++){
//     a[i]=function(){
//         console.log(i);
//     };
// }
// a[6](); //10

// var a=[];
// for(let i=0;i<10;i++){
//     a[i]=function(){
//         console.log(i);
//     };
// }
// a[6]();    //6

// const book = ["aaa","bbb","ccc"]
// const it = book.values()
// // it.next()
// let current = it.next()
// while(!current.done){
//     print(current.value)
//     current = it.next()
// }
// cc.next()
// print(cc)
// function* rainbow() {
//     yield 'red';
//     yield 'orange';
// }
// const it = rainbow()
// it.next()

// class c1{
//     constructor(){}
//     static a = 2
//     static b(){
//
//
//     }
//     c()
//     {
//     }}

function deepClone(obj){
    //judge array or object
    let objClone = Array.isArray(obj)?[]:{};

    if(obj && typeof obj==="object"){
        for(let key in obj){
            //judge is it property 确保只是当前对象的属性
            // for..in循环会把某个类型的原型(prototype)中方法与属性给遍历出来，所以这可能会导致代码中出现意外的错误
            if(obj.hasOwnProperty(key)){
                //判断ojb子元素是否为对象，如果是，递归复制
                if(obj[key]&&typeof obj[key] ==="object"){
                    objClone[key] = deepClone(obj[key]);
                }else{
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}

let a=[1,2,3,{name:"ming",phone:[1,2,3],},[],null],
    b=deepClone(a);

let c = JSON.stringify(a)
c = JSON.parse(c)

a[0]=2;
console.log("deep",a,b);
let d = [0,null]
for(let key in d){
    print("ddddddddd",key)
}

print("ccc",c)

function sort(arr) {
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                let swap = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = swap
            }
        }
    }
    return arr
}

function quickSort(arr) {
    if(arr.length<=1){
        return arr;
    }
    let left = [],
        right = [],
        middle = arr[0]
    for(let i=1; i<arr.length; i++){

        if(arr[i]<middle){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return (quickSort(left)).concat(middle,quickSort(right))

}

//插入排序
function insertSort(str) {

    for (let i=1;i<str.length;i++){

        if (str[i]<str[i-1]){
            let a = str[i];
            let j = i-1;
            // str[i] = str[j];

            while(j>=0 && a<str[j]){
                str[j+1] = str[j];
                j--;
            }
            // for(let j = i-1; j>=0; j--){
            //     str[j+1] = str[j];
            // }
            str[j+1] = a;
        }

    }
    return str;
}

// print(insertSort([2,5,1,6,3,7,8]))


let allRes = [
    {
        id: 4,
        resName: "删除角色",
        parentId: 2
    },
    {
        id: 3,
        resName: "编辑角色",
        parentId: ''
    },
    {
        id: 2,
        resName: "设置权限",
        parentId: ''
    },
    {
        id: 5,
        resName: "添加用户",
        parentId: 4
    },
    {
        id: 6,
        resName: "更新用户",
        parentId: 4
    },
    {
        id: 7,
        resName: "删除用户",
        parentId: 6
    },
    {
        id: 8,
        resName: "重置密码",
        parentId: 3
    },
    {
        id: 9,
        resName: "添加地区",
        parentId: 5
    },
    {
        id: 10,
        resName: "编辑地区",
        parentId: 6
    }
];

function treeObj(originObj){
    //对象深拷贝
    let obj ={};
    for (let key in originObj){
        var val = originObj[key];
        // noinspection JSAnnotator
        obj[key] = typeof val === 'object' ? arguments.callee(val):val;
    }
    //对象新增children键值，用于存放子树
    obj['children'] = [];
    return obj;
}

//data：带转换成树形结构的对象数组
//attributes：对象属性
function toTreeData (data, attributes) {
    let resData = data;
    let tree = [];

    //找寻根节点
    for (let i = 0; i < resData.length; i++) {

        if (resData[i][attributes.parentId] === ''|| resData[i][attributes.parentId] === null) {
            tree.push( treeObj(resData[i]) );
            resData.splice(i, 1);
            i--;
        }
    }
    print("tree----",tree)

    run(tree);

    //找寻子树
    function run(chiArr) {
        if (resData.length !== 0) {
            for (let i = 0; i < chiArr.length; i++) {
                for (let j = 0; j < resData.length; j++) {
                    if (chiArr[i][attributes.id] === resData[j][attributes.parentId]){
                        let obj = treeObj(resData[j]);
                        chiArr[i].children.push(obj);
                        resData.splice(j, 1);
                        j--;
                    }
                }
                run(chiArr[i].children);
            }
        }
    }

    return tree;

}

let data = allRes;
// 属性配置信息
let attributes = {
    id: 'id',
    parentId: 'parentId',
};
let treeData = toTreeData(data, attributes);

console.log(treeData);
print(JSON.stringify(treeData))

// let obj = [{
//     id:1,
//     children:{
//         id:2,
//         children:{
//             id:3
//         }
//     }
// }]
//
// print(obj)

let allRes2 = [
    {
        id: 4,
        resName: "删除角色",
        parentId: 2
    },
    {
        id: 3,
        resName: "编辑角色",
        parentId: ''
    },
    {
        id: 2,
        resName: "设置权限",
        parentId: ''
    },
    {
        id: 5,
        resName: "添加用户",
        parentId: 4
    },
    {
        id: 6,
        resName: "更新用户",
        parentId: 4
    },
    {
        id: 7,
        resName: "删除用户",
        parentId: 6
    },
    {
        id: 8,
        resName: "重置密码",
        parentId: 3
    },
    {
        id: 9,
        resName: "添加地区",
        parentId: 5
    },
    {
        id: 10,
        resName: "编辑地区",
        parentId: 6
    }
];
for(let key in allRes2){
    console.log("key",key,allRes[key])
}
// print(allRes[0])

let arr2 = [1,2,3,4,5]
let found = arr2.find((item,index)=>item>3)
print(found)

let map = new Map()
map.set(1,'u111')
print(map)
print(map.get(1))

let [aa,bb] = [3**2,2]
print(aa,bb)

let arr3 = [1,2,3,4]
print(typeof arr3.toString(),typeof arr3.valueOf())
arr3.fill(12,1,4)
print(arr3)

let index = "12"
// let arr3 = [1,2,3,4]
print(index.charCodeAt(1))

function aa() {
    let aaa = function (key) {
2
    }
    this.insert = function () {
        
    }
}

async function timeout() {
    return 'hello world'
}
console.log(timeout());
console.log('虽然在后面，但是我先执行');

