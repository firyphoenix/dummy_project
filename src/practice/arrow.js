class Account {
    user = {
        name : "John Snow",
        mobile: 9591,
        walk : () => console.log(this),
        funwalk: function() {console.log(this)}
    };


}
// var x = new Account();
// x.user.walk();
// x.user.funwalk();

var obj1 = {
    name: "Aarya Stark",
};
var obj2 = {nickName : "Faceless"};
// var obj2 = {
//     nickname : "Faceless"
// };

// var obj3 = {
//     ...obj1,
//     ...obj2
// };
var newObj = Object.assign(obj2,obj1)
console.log(newObj);
obj1.object1 = "test";
obj2.object2="dev";
console.log(obj2);
console.log(obj1);
console.log(newObj)
