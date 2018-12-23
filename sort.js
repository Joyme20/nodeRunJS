function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof oldonload !== "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
let str = [7,2,32,4,1,5,6,0,23];
let str2 = [6,  1,  2, 7 , 9,  3,  4 , 5 ,10 , 8];

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
            str[j+1] = a;
        }

    }
    return str;
}
// addLoadEvent(insertionSprting())


//快速排序
function quickSort2(arr){
    if(arr.length<=1){
        return arr;
    }
    var left = [];    //新建了辅助数组，空间占用率高
    var right = [];
    var base = arr[0];
    for(var i=1;i<arr.length;i++)
    {
        // 判决条件
        if(arr[i]>base){
            right.push(arr[i]);
        }else {
            left.push(arr[i])
        }
    }
    return quickSort2(left).concat(base,quickSort2(right));

}

//快排经典，在原数组排序
function quick_sort2(arr){
    var _arr = arr.slice();//复制一份，以免影响之前的arr
    return quick_sort(_arr,0,_arr.length-1);//进行排序
}
function quick_sort(arr,i,j){
    if((j-i)<1)//如果数组长度小于1，不用排序
    {
        return arr;
    }
    var left = i;
    var right = j;
    var base = left;
    var center = arr[left];
    while(left<right){
        //从右向左扫描是否存在比基数小的数字
        while(left<right && arr[right]>=center){
            right--;
        }
        if(left<right && arr[right]<center)
        {
            //将小于基数的数字放置到左侧
            arr[left] = arr[right];
            left++;
        }
        //从左向右扫描是否存在比基数大的数字
        while(left<right && arr[left]<=center){
            left++;
        }
        if(left<right && arr[left]>center){
            //将大于基数的数字放置到右侧
            arr[right] = arr[left];
            right--;
        }
    }
    //更新基数
    base = left;
    arr[base] = center;
    console.log(arr);
    quick_sort(arr,i,base-1);//递归对左侧进行排序
    quick_sort(arr,(base+1),j);//递归对右侧进行排序
    return arr;
}