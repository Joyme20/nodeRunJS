var testStr = "([()]())()()aaa";//测试字符串
var tempSaveArray = [];//用于存储字符串的数组
for(var i = 0;i<testStr.length;i++){//如果存在括号字符，就加入数组
    for(var key in moduleJson){
        if(testStr[i] === key||testStr[i]===moduleJson[key]){//如果字符串中存在json中的key 和value字符，就加入数组
            tempSaveArray.push(testStr[i]);
        }
    }
}
if(tempSaveArray.length){
    if((tempSaveArray.length%2)!==0){//如果括号的长度为奇数，肯定不匹配
        console.log("括号不匹配");
    }else{//如果字符串括号长度为偶数，就进行遍历数组，进行判断 12345  0 4

        for(var j = 0;j<tempSaveArray.length;j++){
            //（（（（））））
            if(moduleJson[tempSaveArray[j]]){//如果是右括号，就和前一个进行匹配。
                //拿到数组前一位的字符，是否与自己匹配
                if(j>0){
                    // console.log("前一个元素："+j+tempSaveArray[j-1]+" 后一个元素"+moduleJson[tempSaveArray[j]]);
                    // console.log(moduleJson[tempSaveArray[j]]==tempSaveArray[j-1]);
                    if(moduleJson[tempSaveArray[j]]===tempSaveArray[j-1]){//说明两个括号进行了匹配，让其出栈
                        tempSaveArray.splice(j-1,2);
                        j=0;//从新遍历数组
                    }
                }
            }
        }

        if(tempSaveArray.length){//没有移除完毕
            console.log("括号不匹配");
        } else{
            console.log("括号匹配，恭喜你语法正确！");
        }
    }
}else{
    console.log("你输入的字符串不存在括号");
}

let sortByCount = function (arr) {
    let arrUni = [];
    let arrCnt = [];
    arr.forEach((val)=>{
        let idx = arrUni.indexOf(val);
        if (idx<0) {
            arrUni.push(val);
            arrCnt.push(1);
        }else{
            arrCnt[idx]++;
        }
    });
    let arrTmp = arrUni.slice();
    // print("1",arrUni,arrCnt)
    arrUni.sort((a, b)=>{
        let idxa = arrTmp.indexOf(a);
        let idxb = arrTmp.indexOf(b);
        if(arrCnt[idxb] === arrCnt[idxa]) return b-a
        return arrCnt[idxb] - arrCnt[idxa];
    });
    // print("2",arrUni,arrCnt)
    // arrUni.forEach((val)=>{
    //     let idx = arrTmp.indexOf(val);
    // })
    var arrLast = []
    for(let i=0;i<arrUni.length;i++){
        let idx = arrTmp.indexOf(arrUni[i]);
        let cnt = arrCnt[idx];
        // let arrr = (new Array(cnt)).fill(arrUni[i])
        // print("cnt",cnt,arrUni[i])
        for(let j=0;j<cnt;j++){
            let a = arrUni[i]
            // print(a)
            arrLast.push(a)

        }
    }
    // print(arrLast)
    return arrLast;
};
