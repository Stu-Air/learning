let price = 25;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const cash = document.getElementById("cash");
const button = document.getElementById("purchase-btn");
const output = document.getElementById("change-due");
const total = document.getElementById("total");
const cashdrawer = document.getElementById("cash-drawer");

button.addEventListener("click", purchase);
function purchase (){
  let totalCid = Number(cid.reduce((total, sum) => total + sum[1], 0)).toFixed(2); 
  let cashInt = parseFloat(cash.value).toFixed(2);
  let change = (cashInt - price).toFixed(2);
  let cid2 = [];
  let cents = cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1]
  let notes = cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1]

  function loop(cid2) {
   let outArr = [0,0,0,0,0,0,0,0,0];
      while ((cashInt - price).toFixed(2) >= 100.00 && cid[8][1] > 0) {cid[8][1] -= 100.00; cashInt  -= 100.00; outArr.push(outArr[8] += 100.00)}
      while ((cashInt - price).toFixed(2)>= 20.00 && cid[7][1] > 0)  {cid[7][1] -= 20.00;  cashInt  -= 20.00;  outArr.push(outArr[7] += 20.00)}
      while ((cashInt - price).toFixed(2) >= 10.00 && cid[6][1] > 0)  {cid[6][1] -= 10.00;  cashInt  -= 10.00;  outArr.push(outArr[6] += 10.00)}
      while ((cashInt - price).toFixed(2) >= 5.00 && cid[5][1] > 0)   {cid[5][1] -= 5.00;   cashInt  -= 5.00;   outArr.push(outArr[5] += 5.00)}
      while ((cashInt - price).toFixed(2) >= 1.00 && cid[4][1] > 0)   {cid[4][1] -= 1.00;   cashInt  -= 1.00;   outArr.push(outArr[4] += 1.00)}
      while ((cashInt - price).toFixed(2) >= 0.25 && cid[3][1] > 0)   {cid[3][1] -= 0.25;   cashInt  -= 0.25;   outArr.push(outArr[3] += 0.25)}
      while ((cashInt - price).toFixed(2) >= 0.10 && cid[2][1] > 0)   {cid[2][1] -= 0.10;   cashInt  -= 0.10;   outArr.push(outArr[2] += 0.10)}
      while ((cashInt - price).toFixed(2) >= 0.05 && cid[1][1] > 0)   {cid[1][1] -= 0.05;   cashInt  -= 0.05;   outArr.push(outArr[1] += 0.05)}
      while ((cashInt - price).toFixed(2) >= 0.01 && cid[0][1] > 0)   {cid[0][1] -= 0.01;   cashInt  -= 0.01;   outArr.push(outArr[0] += 0.01)}
      
      if (outArr[8] > 0 && cid[8][1] >= 0){cid2.push(cid[8][0]+ ": $" + outArr[8].toFixed(2))}
      if (outArr[7] > 0 && cid[7][1] >= 0){cid2.push(cid[7][0]+ ": $" + outArr[7].toFixed(2))}
      if (outArr[6] > 0 && cid[6][1] >= 0){cid2.push(cid[6][0]+ ": $" + outArr[6].toFixed(2))}
      if (outArr[5] > 0 && cid[5][1] >= 0){cid2.push(cid[5][0]+ ": $" + outArr[5].toFixed(2))}
      if (outArr[4] > 0 && cid[4][1] >= 0){cid2.push(cid[4][0]+ ": $" + outArr[4].toFixed(2))}
      if (outArr[3] > 0 && cid[3][1] >= 0){cid2.push(cid[3][0]+ ": $" + outArr[3].toFixed(2))}
      if (outArr[2] > 0 && cid[2][1] >= 0){cid2.push(cid[2][0]+ ": $" + outArr[2].toFixed(2))}
      if (outArr[1] > 0 && cid[1][1] >= 0){cid2.push(cid[1][0]+ ": $" + outArr[1].toFixed(2))}
      if (outArr[0] > 0 && cid[0][1] >= 0){cid2.push(cid[0][0]+ ": $" + outArr[0].toFixed(2))} 
     return;
  };
  
  
  if (cashInt < price)  {alert("Customer does not have enough money to purchase the item");return};
  if (cashInt == price) {output.innerHTML = "No change due - customer paid with exact cash"; return}  
  if (totalCid == 0.5) {output.innerHTML = "Status: CLOSED PENNY: $0.5"; return}
  if (change === totalCid) {loop(cid2);output.innerHTML = `Status: CLOSED `+ cid2.sort((a,b)=> b[1] - a[1]);return}
  if (price > totalCid || cents < change && totalCid > change) {output.innerHTML = "Status: INSUFFICIENT_FUNDS"; return}
  else {loop(cid2); output.innerHTML = `Status: OPEN <br> ${cid2}`;}
  

  cashdrawer.innerHTML = `Cash Drawer -  <br>
  ${ cid[0][0]}: ${ cid[0][1]} <br>
  ${ cid[1][0]}: ${ cid[1][1]} <br>
  ${ cid[2][0]}: ${ cid[2][1]} <br>
  ${ cid[3][0]}: ${ cid[3][1]} <br>
  ${ cid[4][0]}: ${ cid[4][1]} <br>
  ${ cid[5][0]}: ${ cid[5][1]} <br>
  ${ cid[6][0]}: ${ cid[6][1]} <br>
  ${ cid[7][0]}: ${ cid[7][1]} <br>
  ${ cid[8][0]}: ${ cid[8][1]}`;
};

total.textContent = `Total: ${price}`;
cashdrawer.innerHTML = `Cash Drawer -  <br>
${cid[0][0]}: ${cid[0][1]} <br>
${cid[1][0]}: ${cid[1][1]} <br>
${cid[2][0]}: ${cid[2][1]} <br>
${cid[3][0]}: ${cid[3][1]} <br>
${cid[4][0]}: ${cid[4][1]} <br>
${cid[5][0]}: ${cid[5][1]} <br>
${cid[6][0]}: ${cid[6][1]} <br>
${cid[7][0]}: ${cid[7][1]} <br>
${cid[8][0]}: ${cid[8][1]}`;