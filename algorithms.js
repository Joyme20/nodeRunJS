//跳阶梯 斐波那契数列
function jump(n) {
    if(n<=0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    return jump(n-1)+jump(n-2)


}

function jump2(n) {
    if(n<=0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    let f1 = 1,f2 = 2,f3;
    for(let i =3;i<=n;++i) {
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
    }
    return f3
}

//变态跳阶梯
// f(n) = f(n-1) + f(n-2) +...+ f(2) + f(1) + 1
//
// f(n-1) = f(n-2) +...+ f(2) + f(1) + 1
//
// ===》》 f(n) - f(n-1) = f(n-1)     ===》》f(n) = 2 * f(n-1)
function jump3(n) {
    if(n<=0) return 0;
    if(n === 1) return 1;
    return 2*jump3(n-1)
}
function jump4(n) {
    if(n<=0) return 0;
    if(n === 1) return 1;
    let f1 = 1,f2 ;
    for(let i =2;i<=n;++i) {
        f2 = 2 * f1;
        f1 = f2;
    }
    return f2
}

