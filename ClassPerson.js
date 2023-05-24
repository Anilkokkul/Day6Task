class person{
    constructor(name,age,DOB){
        this.name = name,
        this.age = age,
        this.dateOfBirth = DOB
    }
    
    setAddress(address){
        this.address = address
    }
    getaddress(){
        return this.address
    }
}

const Obt = new person("Anil Kokkul", 25 , "18/09/1997")

console.log(Obt);

Obt.setAddress("305/4 A block vidi gharkul, SOLAPUR");
var Address = Obt.getaddress();
console.log(Address);