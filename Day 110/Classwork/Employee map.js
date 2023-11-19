function main() {
    var name = readLine();
    var position = readLine();
    let employees = new Map([
    ["Richard", "Developer"],
    ["Maria", "SEO Specialist"],
    ["Tom", "Product Manager"],
    ["David", "Accountant"],
    ["Sophia", "HR Manager"]
    ]);

    employees.set(name,position)
    for (var i of employees.entries()){
        console.log(i[0] + " : " + i[1])
    } 
}