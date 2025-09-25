const fun = () => {
    console.log("Hello, World!");
}

//event bubbling
document.querySelector("button").addEventListener("click", (e)=>{
    e.stopPropagation();
    alert("I am child!");
});
document.querySelector(".inner-container").addEventListener("click", (e)=>{

    alert("I am inner-container!");
});
document.querySelector(".container").addEventListener("click", ()=>{
    alert("I am container!");
});

// async function getdata(){
//  return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("data taken") 
//       console.log("data taken");
//     }, 3500);
//  })
// }

//fetch my first api
// async function getdata(){
// let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') // take its time to complete
//     //   .then(response => response.json())
//     //   .then(json => console.log(json))
//     let data = await x.json() //take its time to complete
//     console.log(data);//run this
//     return data;
// }

//post request
// async function getdata(){
//     let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
//              method: 'POST',
//              body: JSON.stringify({
//               title: 'foo',
//               body: 'bar',
//               userId: 1,
//               }),
//               headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//                 },
//                    })
//     let data = await x.json() //take its time to complete
//     console.log(data);//run this
//     return data;
// }

async function main(){
console.log("add data");

let data = await getdata();//await means first this will complete then move to next line
        console.log(data);

console.log("preview data");

console.log("harry");

console.log("harry potter");

}

// main()

class Papa{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Beta extends Papa{
    constructor(name, age){
        super(name, age);
        this.name = name;
        this.age = age;
    }

    play(){
        console.log(`${this.name} is playing.`);
    }
}

a = new Papa("John",50);
console.log(a);
b = new Beta("Doe", 30);
b.play()
b.speak();
