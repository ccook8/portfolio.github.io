/*Contents
Superman, Iron Man, Batman, Wonder Woman
Dates, Regular Expressions, Quiz

*/

const superman = {
name: 'Superman',
'real name': 'Clark Kent',
height: 75,
weight: 235,
hero: true,
villain: false,
allies: ['Batman','Supergirl','Superboy'],
fly() {
return 'Up, up and away!';
city: 'Metropolis'
/* changing property:
 superman['real name'] = 'Kal-El'; */
/* Removing property:
delete superman.fly
<< true */
}
};// JavaScript source code
console.log(superman['name'])
console.log(superman['height'])
console.log(superman['villain'])

const ironMan = {
  name: 'Iron Man',
  realName: 'Tony Stark',

}
const cloneIronMan =ironMan;
cloneIronMan.name =  'Steel';

console.log(cloneIronMan.name)

const batman = {"name": "Batman","real name": "Bruce Wayne",
"height": 74, "weight": 210, "hero": true, "villain":
false, "allies": ["Robin","Batgirl","Superman"]}

//JavaScript Object Notation (JSON). Often employed to share infromation between web services such as Twitter, Trello, etc.
JSON.parse(batman);


const wonderWoman = {
name: 'Wonder Woman',
'real name': 'Diana Prince',
height: 72,
weight: 165,
hero: true,
villain: false,
allies: ['Wonder Girl','Donna Troy','Superman'],
lasso: function(){
console.log('You will tell the truth!');
}

/*JSON.stringify(wonderWoman);
<< '{"name":"Wonder Woman","real name":"Diana
Prince","height":72,
"weight":165,"hero":true,"villain":false,"allies":["Wonder
Girl", "Superman" ]; */

//new Date(year,month,day,hour,minutes,seconds,milliseconds)
const Christmas = new Date(2018, 12, 25);
Christmas.toString();
console.log(Christmas);

//Regular Expressions
pattern.test('JavaScript');

//Superhero Quiz
const quiz = [
{ name: "Superman",realName: "Clark Kent" },
{ name: "Wonder Woman",realName: "Diana Prince" },
{ name: "Batman",realName: "Bruce Wayne" },
];
const game = {
start(quiz){
this.questions = [...quiz];
this.score = 0;
// main game loop
for(const question of this.questions){
this.question = question;
this.ask();
}
// end of main game loop
this.gameOver();
},
ask(){
const question = `What is ${this.question.name}'s real name?`;
const response = prompt(question);
this.check(response);
},
check(response){
const answer = this.question.realName;
if(response === answer){
alert('Correct!');
this.score++;
} else {
alert(`Wrong! The correct answer was ${answer}`);
}
},
gameOver(){
alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
}
}
game.start(quiz);



document.getElementsById('output').length;
