function superbowlWin(records) {
    
    const winRecord = records.find(record => record.result === "W");
    
    return winRecord ? winRecord.year : undefined;
}


const broncosRecords = [
    { year: 2015, result: "W" }, //
    { year: 2014, result: "L" }, 
    { year: 2013, result: "W" }, 
    { year: 2012, result: "W" },
    { year: 2011, result: "L" }  
];
console.log(superbowlWin(broncosRecords)); 
