// 给定一个学生列表，学生信息由班级、分数、姓名等组成。请按下列规则对学生列表进行排序：
//
// 按班级从小到大排
//
// 班级相同时，按成绩从大到小排序
//
// 班级和成绩相同时，按原学生列表中的先后顺序排序
//
// 输入
// 学生列表
//
// 输出
// 排序后的学生列表
//
//
// 样例输入
//     [{"name":"张三","class":2,"score":64},{"name":"李四","class":1,"score":80},
// "name":"王五","class":1,"score":80},{"name":"赵六","class":4,"score":94}]
// 样例输出
//     [{"name":"李四","class":1,"score":80},{"name":"王五","class":1,"score":80},
// {"name":"张三","class":2,"score":64},{"name":"赵六","class":4,"score":94}]

var lineAdd = 4
var inputArr = [{"name":"张三","class":2,"score":64},{"name":"李四","class":1,"score":80},
    {"name":"王五","class":1,"score":80},{"name":"赵六","class":4,"score":94}]

function read_line(){
    var line = inputArr[lineAdd];
    lineAdd++;
    return line
}
function print(x){
    console.log((x))
}

/*请完成下面这个函数，实现题目要求的功能
当然，你也可以不按照下面这个模板来作答，完全按照自己的想法来 ^-^
******************************开始写代码******************************/
function compare(property,property2,name) {
    return function(a, b) {
        var value1 = parseInt(a[property]);
        var value2 = parseInt(b[property]);
        if(value1 === value2){
            var v1 = parseInt(a[property2]);
            var v2 = parseInt(b[property2]);
            if (v1 ===v2){
                // var n1 = parseInt(a[name]);
                // var n2 = parseInt(b[name]);
                return 0
            }
            return v2-v1
        }
        return value1 - value2;
    }
}

function sortStudents(students) {
    student.sort(compare("class","score"))


}

/******************************结束写代码******************************/


var res;

var _students = JSON.parse(read_line());

res = sortStudents(_students);
print(res);