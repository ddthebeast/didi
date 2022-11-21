//1.
const myEmailList = ['pero@telekom.com', 'dijana@vip.net', '124345@eden', '11  @telekom.com', 'asdadqasd@asdasdasd']

checkEmails(myEmailList);


function checkEmails(emailList) {
  var nonValidEmails = [];

  for (let i = 0; i < emailList.length; i++) {

    if (emailList[i].includes('@') && !(emailList[i].includes(' '))) {

      if (!(emailList[i].endsWith('.com') || emailList[i].endsWith('.edu') || emailList[i].endsWith('.net') || emailList[i].endsWith('.gov'))) {
        nonValidEmails.push(emailList[i])
      }
    } else {
      nonValidEmails.push(emailList[i])
    }
  }
  console.log(nonValidEmails)
}


//3
  const myAnimals = [
    { type: 'Horse', numberOfLegs: 4 },
    { type: 'Sheep', numberOfLegs: 4 },
    { type: 'Chicken', numberOfLegs: 2 },
    { type: 'Fish', numberOfLegs: 0 },
    { type: 'Dog', age: 7, numberOfLegs: 4 },
    { type: 'Goat', numberOfLegs: 4 }]

    function countLegs(myAnimals) {
            let finalLegs = 0
            animals.forEach(function (myAnimals) {
            finalLegs += parseInt(animal.numberOfLegs)
            })
            console.log(finalLegs)
            }
 //4.
 const vardar = {
    players: 20,
    budget: 2000000,
    victories: 10,
    loses: 1,
    draws: 3,
  }
  
  calculatePoints(vardar);
  
  function calculatePoints(team) {
    let points = 0;
    for (let i = 0; i < team.victories; i++) {
      points += 3;
    }
    for (let i = 0; i < team.loses; i++) {
      points -= 2;
    }
    for (let i = 0; i < team.draws; i++) {
      points += 2;
    }
    console.log(points)
  }          