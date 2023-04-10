// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2

    }
    
    get circumference(){
        return  2 * Math.PI * this.radius;

    } 
    
    get area (){
       return this.radius * this.radius * Math.PI ;

    }
    
    set diameter (diameterValue){
          this.radius = diameterValue / 2
    }


    set circumference(circumferenceValue){
        this.radius = circumferenceValue / (2 * Math.PI
            )
    }
   
    set area(areaVallue){
         this.radius = Math.sqrt(areaVallue/Math.PI)
    }
}

let newCircle = new Circle(6);

console.log(newCircle.area);
console.log(newCircle.circumference)
console.log(newCircle.diameter);