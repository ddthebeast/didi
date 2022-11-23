function insert_Row()
{
let x=document.getElementById('myTable').insertRow(0);
let a = x.insertCell(0);
let b = x.insertCell(1);
a.innerHTML="New Cell1";
b.innerHTML="New Cell2";
}