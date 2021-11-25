class parent{
    bike_name="passionpro"
    name="jagan"
    getName(){
        console.log(this.name);
    }
    getBike(){
        console.log(this.bike_name);
    }
}
class child extends parent{
    bike_name="activa"
    getBike(){
        console.log(this.bike_name);
    }
}
var obj= new child;
obj.getBike();
obj.getName();