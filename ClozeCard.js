// constructor function for creating ClozeCard objects
var ClozeCard = function(text, cloze) {
  this.cloze = cloze;
  this.partial = text.replace(cloze,"...");
  this.fullText = text;

  // console.log(text.search(cloze));
  if (text.search(cloze) < 0){
  	console.log("The string is not found in text, please retry");
  }
};

// exporting our ClozeCard constructor
module.exports = ClozeCard;