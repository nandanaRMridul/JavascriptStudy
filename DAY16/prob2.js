 
// [ no,district,+ve cases, death rate, cured rate ,1st dose vaccine , 2nd dose vaccine ]

 covid_data = [
    [1, 'Ernakulam', 34000, 2000, 23000, 20000, 2000],
    [2, 'Thiruvananthapuram', 25000, 1500, 18000, 15000, 1800],
    [3, 'Kozhikode', 27000, 1800, 20000, 19000, 1700],
    [4, 'Thrissur', 30000, 1900, 22000, 21000, 2000],
    [5, 'Kottayam', 20000, 1200, 15000, 14000, 1200],
    [6, 'Kannur', 22000, 1300, 17000, 16000, 1300],
    [7, 'Alappuzha', 24000, 1400, 19000, 18000, 1500],
    [8, 'Pathanamthitta', 18000, 1000, 14000, 13000, 1100]
];


// District having Highest +ve case :

console.log((covid_data.reduce((d1, d2) => (d1[2] > d2[2] ? d1 : d2))));
console.log("------------------------------------------------------------------------");
// District having Highest 1st dose vaccine 
console.log((covid_data.reduce((d1, d2) => (d1[5] > d2[5] ? d1 : d2))));
console.log("------------------------------------------------------------------------");
// District having lowest death
console.log((covid_data.reduce((d1, d2) => (d1[3] < d2[3] ? d1 : d2))));
console.log("------------------------------------------------------------------------");
// Sort data with +ve case in descending order
console.log((covid_data.sort((d1, d2) => (d2[2] - d1[2]))))
console.log("------------------------------------------------------------------------");
// Is district with +ve cases > 25000
console.log(covid_data.some((d) => d[2] > 25000))
console.log("------------------------------------------------------------------------");

/* console.log((covid_data.forEach((d) => (d[2] > 25000 ? d)); */

// Check every district with +ve cases > 25000 or not
console.log(covid_data.every((d) => d[2] > 25000))
console.log("------------------------------------------------------------------------");
// Sort data with 1st dose vaccine
console.log((covid_data.sort((d1, d2) => (d2[5] - d1[5]))))
console.log("------------------------------------------------------------------------");
// Print thrissur details
console.log(covid_data.find((d) => d[1] == "Thrissur"))
console.log("------------------------------------------------------------------------");
// Print total number of positive cases
console.log(covid_data.map((d) => d[2]).reduce((d1, d2) => d1 + d2))
console.log("------------------------------------------------------------------------");
// Print total number of cured cases
console.log(covid_data.map((d) => d[4]).reduce((d1, d2) => d1 + d2))
console.log("------------------------------------------------------------------------");