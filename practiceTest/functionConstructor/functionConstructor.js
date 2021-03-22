function User(name, email) {
  this.name = name;
  this.email = email;
  this.online = false;
  //  this.log=function(){
  //      console.log(this.name)
  //  }
  //  this.editName=(name)=>{
  //      this.name=name;
  //  }
}
User.prototype.allInformation=function (){
    let info="hello"
return document.write("<h4> 'info'</h4>")
}
User.prototype.login = function () {
  this.online = true;
  return this.email + " is login";
};
User.prototype.logout = function () {
  this.online = false;
  return this.email + " is logout";
};
User.prototype.getInformation = function () {
  return "name :" + this.name + "  email :" + this.email;
};
User.prototype.getName = function () {
  return this.name;
};
User.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email === u.email;
  });
};

let userOne = new User("Redda", "44gebre@gmail.com");
let userTwo = new User("Ezra", "2019ezra@gmail.com");
let userThree = new User("Kidus", "gkidus@miu.edu");
userOne.num = "617 516-3462";
let users = [userOne, userTwo, userThree];

