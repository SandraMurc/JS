console.log(hello);                                   
var hello = 'world';
//console.log = 'world'


var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//console.loge = no sale porque test no está declarado dentro de const o let o var


var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//console.log de la función no está declarado print con const o let o var y el console.log fuera de la función es = 'super cool' 


var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// console.log = 'chicken' ; eat no está declarado dentro de const o let o var, por ello el console.log de la función eat no se ejecuta


mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// se ejecutan los console.log de la función así: "chicken" y luego "fish" pero los console.log fuera de la función no se ejecutan 



console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// se ejecuta console.log de genre = "disco" (dos veces); ahora los console.log de la función rewind no se ejecutan ya que rewind no está declarado dentro de const, let o var


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// no se ejecutan ninguno de los console.log ya que dojo no está declarado en const, let o var, y el único que si está declarado en var está dentro de una función que no está previamente declarado en esos parámetros


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//no se ejecutan los console.log ya que makeDojo es una función que no está declarada en const, let o var
