// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//bread,carrot,potato,chicken,apple,orange

// ------2------
const country = "USA";
console.log([...country]);
//[U,S,A]
// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);

//[,,], but then it gave undefined undefined, and this is both slots are empty



// Exercise 2 : Employees
// Instructions
// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

             //Using the map() method, push into a new array the firstname of the user and a welcome message. 
            //  You should get an array that looks like this :
            const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

            let newArr=users.map((item)=>"Hello" + item.firstName)

            // . Using the filter() method, create a new array, containing only the Full Stack Residents.

            let newArr1=users.filter((item)=>{
                return item.role==='Full Stack Resident'
            })
            console.log(newArr1)


            // 3. Bonus : Chain the filter method with a map method, to
            //  return an array containing only the lastName of the Full Stack Residents.

            let newArr2=users.filter((item)=>{
                return(item.role==='Full Stack Resident'?item.lastName:'')
            })
            let newArr3=newArr2.map((total)=>{
                return total.lastName
            })
            console.log(newArr3)


            // Exercise 3 : Star Wars
            // Instructions
            // Using this array 
            const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
            
            // Use the reduce() method to combine all of these into a single string.
            let allGalaxy=epic.reduce((acummulator,total)=>{
                return total=total+" "+acummulator
            })
            console.log(allGalaxy)


//             Exercise 4 : Employees #2
// Instructions
// Using this object:

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];


//    Using the filter() method, create a new array, containing the students that passed the course.
let ifPassed=students.filter((item)=>{
    return item.isPassed===true
})
console.log(ifPassed)

// Bonus : Chain the filter method with a forEach method,
//  to congratulate the students with their name and course 
//  name (ie. “Good job Jenner, you passed the course in
//      Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
let congrats=ifPassed.map((item)=>{
    return `Good Job ${item.name} you  passed the course in ${item.course}`
})
console.log(congrats)