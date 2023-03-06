alert("Hi ☺");
let res = confirm("Do You Want Check Your Electricity Bill 😃");

if (res) {
  let userName = prompt("Enter Your Full Name");
  let cstmId = prompt("Enter Customer Id ");
  let unit = Number(prompt("Enter Unit You have Consumed"));

  let unitCharge = 0;
  let surcharge = 0;

  if (unit <= 199) {
    unitCharge = 1.2 * unit;
  } else if (unit >= 200 || unit < 400) {
    unitCharge = unit * 1.5;
  } else if (unit >= 400 || unit < 600) {
    unitCharge = unit * 1.8;
  } else {
    unitCharge = unit * 2.0;
  }

  let finalBill = 0;

  if (unitCharge <= 100) {
    finalBill = 100;
  } else if (unitCharge <= 400) {
    finalBill = unitCharge;
  } else {
    surcharge = unitCharge * 0.15;
    finalBill = surcharge + unitCharge;
  }

  console.log("Your Name :", userName);
  console.log("Your Customer Id :", cstmId);
  console.log("You Have Consumed:", unit, "Unit");
  console.log("Your Bill A/c To Unit :", unitCharge);
  console.log("Your Surcharge :", surcharge);
  console.log("Your Final Bill :", finalBill);

  document.getElementById("show").innerHTML = `
    <h1>BILL RECEIPT   </h1>
    <h3>Name : ${userName}</h2>
    <h3>Id : ${cstmId}</h3>
    <h3>Consumed Unit : ${unit}</h3>
    <h3>Bill A/c To Unit : ₹${unitCharge}</h3>
    <h3>Surcharge : ₹${surcharge}</h3>
    <h2>Total Bill : ₹${finalBill}</h2>
    <p>Terms and Condition - </p>
    <ul>
    <li>If bill exceeds Rs. 400 then a surcharge of 15% will be charged.</li>
    <li>The minimum bill should be of Rs. 100/- .</li>
    `;
} else {
  console.warn("You Have Refused To Generate Bill 🙃");
  document.getElementById("show").innerHTML = `
  <h1>You Have Refused To Generate Bill 😪</h1>
  
  `;
}
