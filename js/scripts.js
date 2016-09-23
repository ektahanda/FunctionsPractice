//I will write a fucntion that says GoodMorning

//This function takes one argument called name which is a string

function saysGM(name){
  //console.log('Good Morning, ' + name);
}

//I will write some variables which will be strings of people's names
var myName= 'Ekta';
var friendName= 'Shubham';

//Here I call the function saysGM
saysGM(myName);
saysGM(friendName);

//I will write a function that will greet a person
//The person will be passed to the function as an object

function greetPerson (person){
//console.log("Hello "+ person.firstName +' ' + person.lastName + '. You are ' + person.age + ' years old.' );
}

//I will make an object that describes me
var myObject= {
  firstName: 'Ekta',
  lastName: 'Handa',
  age: 24,
}

//I will create another object that describes a friendName
var friendObject={
  firstName: 'Ayushi',
  lastName: 'Sareen',
  age: 24,
}

//I will call the greetPerson function, passing myObect as its argument
greetPerson(myObject);
greetPerson(friendObject);

//I will make an array of objects,
//each object will describe a person

var personList = [
  { firstName: 'Ekta',
    lastName: 'Handa',
    age: 24,},

{
  firstName: 'Ayushi',
  lastName: 'Sareen',
  age: 15,},

  {
    firstName: 'Nikita',
    lastName: 'Sethi',
    age: 35,
  },
  {
    firstName: 'Baani',
    lastName: 'Dua',
    age: 42,
  },
];

//console.log(personList);

//I will write a function that will greet people
//It takes as an argument an array and each item in the array describes a person
function greetPeople(list){

//I will loop through the items in my array with a for loop
  for(var i=0; i<list.length; i++)
  {
    var currentItem = list [i];

    //Greet each person in turn
    console.log('Hello, '+ currentItem.firstName + '.You are '+ currentItem.age + ' years old.');

  }



}

//Call the greetPeople function and pass personList to it
greetPeople(personList);

//I will make a function that sorts people by age
//This function takes and argument called lists which is an array of people
function sortPeople(list){

//Create two arrays one for older people,
//and one for younger people
//These will be blank arrays that we will populate with our forEach
var older=[];
var younger=[];

  //loop through the array
  list.forEach(function(d,i){

    if(d.age<30){
      younger.push(d);
    }
    else {
      older.push(d);
    }
  })

  //This function will return our arrays as an object
  var buckets = {
    olderList: older,
    youngerList: younger
  };

  return buckets;

}

//call sort people and pass the personList to it
sortPeople(personList);

//Make another array with more people
var morePeople = [
  {
      firstName: 'Naman',
      lastName: 'Jain',
      age: 37,
  },
  {
    firstName: 'Kratika',
    lastName: 'Singh',
    age: 21,
      },
  {
    firstName: 'Udipi',
    lastName: 'Anand',
    age: 29,
  },
];

//run the function again with new array
sortPeople(morePeople);

//create two variable where sortPeople returns sorted lists of people
var morePeopleSorted= sortPeople(morePeople);
var personListSorted = sortPeople(personList);

//isolate the younger list from sorted person list
var personListYounger = personListSorted.youngerList;

//console log the new list and the original list to compare
console.log(personListYounger);
console.log(personList);
