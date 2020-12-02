function difficulty() {
    var test1 = {
        name : "Chandler Bing",
        realName : "Matthew Perry"
    };
    var test2 = test1;
    test2.userName = "Mondler";
    console.log("Printing test1 ")
    console.log(test1);
    console.log("Printing test2");
    console.log(test2);
    console.log('\n\n');
}


function usingSpread() {
    var spread1 = {email : "test@gmail.com"};
var spread2 = {password : "abcdef"};
var spread3 = {
    ...spread1,
    ...spread2
}
spread3.newProperty = "new Property";

console.log('Printing Spread3 : ');
console.log(spread3);
console.log('Printing Spread1 : ');
console.log(spread1)
console.log('Printing Spread2 : ');
console.log(spread2)
console.log("\n\n")


}

function usingJSON() {
    var str = {name : "Apple"};
    var x = JSON.parse(JSON.stringify(str));
    x.weight = "2kgs";
    console.log("Str : ")
    console.log(str)
    console.log("printing x : ")
    console.log(x);
    console.log("\n\n")
    
}

function usingObject() {
var obj1 = {name: "Aarya Stark"};
var obj2 = Object.assign({},obj1);
obj2.nickName = "Faceless";
console.log('printing obj1 ');
console.log(obj1);
console.log("Printing obj2 ");
console.log(obj2);


}

difficulty();
usingSpread();
usingObject();
usingJSON();