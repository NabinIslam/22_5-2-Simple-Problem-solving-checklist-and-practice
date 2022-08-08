function paperRequirements(copy1, copy2, copy3) {
  let firstBookPReq = 100;
  let secondBookPReq = 200;
  let thirdBookPReq = 300;

  let firstCopyPNeed = firstBookPReq * copy1;
  let secondCopyPNeed = secondBookPReq * copy2;
  let thirdCopyPNeed = thirdBookPReq * copy3;

  let totalPaperNeeded = firstCopyPNeed + secondCopyPNeed + thirdCopyPNeed;

  return totalPaperNeeded;
}

let bookNeeded = paperRequirements(1, 1, 1);

console.log("Total paper needed", bookNeeded);
