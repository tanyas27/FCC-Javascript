function rangeOfNumbers(startNum, endNum) {
  return (startNum -endNum == 0) ? [startNum] : rangeOfNumbers(startNum,endNum-1).concat(endNum);
}
console.log(rangeOfNumbers(1,9));