export default class DataStructures{

    //利用栈进行数制转换
    mulBase(num,base){   //target number & translate base
        var s = []
        do{
            s.push(num%base)
            num = Math.floor(num/=base)
        }while(num>0)
        var converted = ""
        while(s.length>0){
            converted += s.pop()
        }
        return converted
    }
    // 深克隆、深复制、深拷贝
    deepClone(obj){
        let objClone = Array.isArray(obj)?[]:{};
        if(obj && typeof obj==="object"){
            for(key in obj){
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
}

