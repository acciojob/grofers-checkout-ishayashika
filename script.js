const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const getSum = () => {
//Add your code here
	const ans = document.querySelector("#ans");

// Set the id attribute of the div
	let sum=0;
	let total=document.querySelectorAll(".price");
	total.forEach((item)=>{
		sum+=parseFloat(item.textContent);
	})
	
	//create row
	const table = document.getElementById("priceTable");
	const tBody = table.querySelector("tbody");

    const totalRow = document.createElement("tr");


	const totalCell = document.createElement("td");
    totalCell.textContent = "Total Price";

	const priceCell = document.createElement("td");
    priceCell.textContent = sum.toFixed(2);  // Display total with 2 decimal places

    totalRow.appendChild(totalCell);
    totalRow.appendChild(priceCell);

	tBody.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

