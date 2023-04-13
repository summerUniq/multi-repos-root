// 新雇主可能能够了解get公司的员工人数，但无权set了解员工人数

class Employee {
    private _fullName = "";
    get fullName(): string {
        return this._fullName
    }
    set fullName(newName: string) {
        if(!newName || newName && newName.length > 10) {
            throw new Error("fullName has a max length 10");
        }
        this._fullName = newName
    }
}

const employee = new Employee()
employee.fullName = 'Summer'

if(employee.fullName) {
    console.log(employee.fullName)
}