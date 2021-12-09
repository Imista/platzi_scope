//Way 1
const person = () =>{
    var saveName = "Name";

    return{
        getName: () => (
            saveName
        ),
        setName: (name) => {
            saveName = name;
        },
    }
}

newPerson = person();

console.log(newPerson.getName());
newPerson.setName("Benji");
console.log(newPerson.getName());

//Way 2
const person = () =>{
    let saveName = "Void";

    const method = {
        getName: () => (
            saveName
        ),
        setName: (name) => {
            saveName = name;
        },
    }

    return method;
}

newPerson = person();

console.log(newPerson.getName());
newPerson.setName("Benji");
console.log(newPerson.getName());
newPerson.setName("Muffin");
console.log(newPerson.getName());