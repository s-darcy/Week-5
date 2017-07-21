//Grab the Employee Names
var $str = "Joe Smith, Fred Johnson, Sally Jones";

//Break Apart String and Organize into List
var arrayValues = $str.split(", ");
console.log(arrayValues);

//Alphabetizing Last Names
var lastNameA;
var lastNameB;
function compare(a, b){
    var nameA = a.split(" ");
    var nameB = b.split(" ");
    lastNameA = nameA[nameA.length - 1];
    lastNameB = nameB[nameB.length - 1];
    if(lastNameA < lastNameB) return -1;
    if(lastNameA > lastNameB) return 1;
}
//Add Span Tags to the Last Name
lastNameA = "<span>" + lastNameA + "</span>";
lastNameB = "<span>" + lastNameB + "</span>";

//Sorting the Alphabetized Names in the Compare function 
arrayValues.sort(compare);
console.log(arrayValues);

//Turning the array items into list item
var listItems = [];
arrayValues.map(function(element) {
    var listItem = "<li>" + element + "</li>";
    listItems.push(listItem);
});
console.log(listItems);

//Inserting the Alphabetized Names into the DOM as an Ordered List
document.getElementById('nameList').innerHTML = listItems;