let table = document.getElementById("sampleTable");
function insert_Row() {
    //Write your code here
	let tr = document.creatElement("tr");
	let td = document.createElement("td");
	td.innerText = 'newRow 1';
	tr.appendChild(td);
	table.appentChild(tr);
}
