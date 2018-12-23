
// var n = read_line()
// let data=[],line
// while(n--){
//     data.push(read_line())
// }
// let time = data[0].gteTime()-data[1].gteTime()
// print(time)

var lineAdd = 0
var inputArr = ['',
'2018-06-22 15:30']

function read_line(){
    var line = inputArr[lineAdd];
    lineAdd++;
    return line
}
function print(x){
    console.log((x))
}

// 用JS计算两个时间相差的小时数
// 时间限制：C/C++语言 1000MS；其他语言 3000MS
// 内存限制：C/C++语言 65536KB；其他语言 589824KB
// 题目描述：
// 1. 要比较的两个时间的时间年月日格式为：（YYYY-MM-DD）
//
// 2. 要比较的两个时间的时间时分秒格式为：（ HH:mm:ss   秒可有可无）
//
// 3. 当相差的时间分钟在0-29区间时的记为0个小时，相差的时间分钟在30-59区间的记为0.5个小时
//
// 4. 当其中任意一个参数不能转为时间类型时返回0
let data=[]
let n=2
while(n--){
    data.push(read_line())
}

function time(time1) {
    time1 = time1.substring(0,17)
    time1 = time1.replace(/-/g,'/')
    time1 = new Date(time1)

    time1 = time1.getTime()
    return time1


}


let differ = time(data[0])-time(data[1])
let hour = Math.floor(differ/(1800*1000))/2
if(isNaN(hour)){
    print(0)
}else{
    print(hour)

}


//从两个字符串（只包含0-9a-zA-Z）中获取两者不同的字符按顺序生成对称字符串
// 时间限制：C/C++语言 1000MS；其他语言 3000MS
// 内存限制：C/C++语言 65536KB；其他语言 589824KB
// 题目描述：
// 1.获取两个字符串中不同的字符（区分大小写，本身字符串中有重复的也要去除）（例：abc与bcd -》 ad）
//
// 2.得到的字符根据ASCII码从小到大排序
//
// 3.根据第3步的结果生成一个对称字符串（例：abc -》abccba）

