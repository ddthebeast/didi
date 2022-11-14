//1. Da se napise programa koja sto dve nizi so ista dolzina kje gi spoi vo edna niza. Elementite od prvata niza treba da se zacuvaat na parnite pozicii od rezultantnata niza, a elementite od vtorata niza na neparnite pozicii od rezultantnata niza

//2. Od proizvolna lista so broevi da se ispecati koj e najmaliot, a koj e najgolemiot broj

//3. Od proizvolna lista so broevi da se pronajde dali ima duplikati od bilo koj element.

//4. Od proizvolna niza so bukvi da se formira zbor, na toj nacin sto sekoja bukva kje se spoi so narednata za da formira string.
//primer: ["z", "d", "r", "a", "v", "o"] ===> "zdravo"

//5. Da se napise programa koja sto kje proveri dali vo nekoja proizvolna niza ima pod-niza, i dokolku ima site elementi od podnizata da se dodadat na krajot od originalnata niza.
//Primer: [1, 2, [3, 4], 5, 6] ===> [1, 2, 5, 6, 3, 4]

//1.
let array1 = [1, 3, 5, 7, 9];
let array2 = [2, 4, 6, 8, 10];
let totalLength = array1.length + array2.length;
let finalArray = [];
for (let i = 0; i < totalLength; i++) {
  if (i === 0) {
    finalArray.push(array1.shift());
  } else if (i === 1) {
    finalArray.push(array2.shift());
  } else {
    if (i % 2 === 0) {
      finalArray.push(array1.shift());
    } else {
      finalArray.push(array2.shift());
    }
  }
}
console.log(finalArray);
//2. 
let matematika = [6, 14, 753, 5, 19, 44, 2, 487, 564, 56987, 21, 7, 1]
console.log(Math.min(...matematika))
console.log(Math.max(...matematika)) 

let minvalue = matematika[0]
for(let i = 0; i < matematika.lenght; i++){
    if(matematika[i]<minvalue){
        minvalue = matematika[i]
    }
    console.log(minvalue)
}
function largest(matematika){
    let largest = matematika[6, 14, 753, 5, 19, 44, 2, 487, 564, 56987, 21, 7, 1]
    matematika.forEach(function(i) {
        if(i > largest){
            largest = i
        }
    });
}
//3.
let lista = [ 4, 8, 7, 6, 9, 15, 18, 13, 14, 15, 11, 4, 9]
let duplikati = [...new Set(lista)]
console.log(duplikati)
//4.
const zdravo = [ "z", "d", "r", "a", "v", "o" ];
let spoeno = zdravo.toString();
console.log(spoeno)
//5.
let myArray = [1, 3, [2, 4, 6, 8, 10], 5, 7, 9];
let mySubArray = [];
let indexToDelete;
console.log(Array.isArray([2, 4, 6, 8, 10]))
for (let i = 0; i < myArray.length; i++) {
  if (Array.isArray(myArray[i])) {
    mySubArray = myArray[i];
    indexToDelete = i;
  }
}
if (mySubArray.length > 0) {
  myArray.splice(indexToDelete, 1);
  myArray.push(...mySubArray);
  console.log(myArray);
};



