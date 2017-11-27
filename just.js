function rot13(str) {
  var encode = [];
  
  console.log(str.charCodeAt(5));
  console.log(str.length);

  for (var i = 0; i < str.length; i++) {

  	if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
  		encode.push(str.charCodeAt(i) + 13);
  	} else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
  		encode.push(str.charCodeAt(i) - 13);
  	} else {
  		encode.push(str.charCodeAt(i));
  	}
  }
  
  console.log(String.fromCharCode(encode));
  var decode = encode.join(" ");
  console.log(decode);
  var decodes = parseInt(decode);
  console.log(decodes);
  var decodeNew = String.fromCharCode(70, 82, 69, 69, 32, 67, 79, 68, 69, 32, 67, 65, 77, 80);
  console.log(decodeNew);

}
  
rot13("SERR PBQR PNZC");