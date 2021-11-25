var parent={
    bike_name:"passion pro",
    name:"arun",
    getBike(){
        console.log("available bike"+this.bike_name);
    }
}
var child={
    bike_name:"activa",
    getBike(){
        console.log("available bike"+this.bike_name);
    }
}

child.__proto__=parent
child.getBike()
console.log(child.name)