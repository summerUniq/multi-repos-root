// 相同点

// 1- 都可以描述对象和函数

interface IPerson {
    name: string;
}

interface GetIPerson {
    (): string
}


type TPerson = {
    name: string;
}

type GetTPerson = () => string

// 2- 可扩展
interface INewPerson extends IPerson {
    location: string;
    // name: number;
}

type NewIPerson = TPerson & { name: number } 

// 3- class implements
// interface 和 type 都可以被class实现
class IP1 implements IPerson {
    name: 'lll'
}

class IP2 implements TPerson {
    name: 'lll'
}

// 不同点
// 扩展时interface extends中的同名字段的类型必须是兼容的；交叉类型中，同名字段且类型不同时，则类型一般是never
// 1- type 实际是类型别名，可以是基础类型，联合类型，元祖的别名
type IXqMember = number

type IXqMemberUnion = number | number[]

type IxqTurble = [number, string]

// 2- 声明合并
// interface 可以重复定义，并合并所有属性单个接口； type 不可以重复声明

interface IPP {
    name: string
}

interface IPP {
    age: number,
    // name: number, 
}

const p: IPP = {
    name: '11',
    age: 0
}

type IT = {
    name: string
} 

type IT1 = IT & {
    name: number
}

type ap = Pick<>

// const akk: IT1 = {
//     // name: never
// }

// type IT = {

// }

// 3- 动态属性
// type 可以使用in关键字生成动态属性， interface 的索引值只能是number 或string, 所以interface不支持动态生成属性

type XQLanguage = 'js'| 'Go'

type XQProjects = {
    [key in XQLanguage]?: string[];
}

const a: XQProjects = {
    js: ['a'],
    Go: ['ppp']
}