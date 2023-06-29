// 遍历联合类型 mapped ：[P in union]
// 取值 indexed: T[P] 
// 判断:泛型约束 extends 以及 keyof T

// keyof T 会得到一个union类型
type MyPick<T, K extends keyof T> = {
    // 遍历K P就是item
    [P in K]: T[P]
}

// 先使用js将逻辑代码写出

// function getPick(todo, keys) {
//     let obj = {}
//     keys.forEach(item => {
//         if(item in todo){
//             obj[item] = todo[item]
//         }
//     });
//     return obj
// }

// 1、返回一个对象
// 2、遍历keys
// 3、判断 item是否在todo中
// 4、在的话就拿到todo[item]的值赋给obj[item]

