export {};
if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    const emptyArrLen = 0;
    return this.length === emptyArrLen;
  };
}
