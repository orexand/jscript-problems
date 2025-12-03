function boyermoor(str, substr) {
  var len_str = str.length;
  var len_substr = substr.length;
  
  var firstPosition = {};
  
  if (len_substr > len_str) {
    return "ned";
  }
  
  for (var i = 0; i < len_substr; i++) {
    var char = substr.charAt(i);
    firstPosition[char] = i;
  }
  
  var sdvig = 0;
  while (sdvig <= len_str - len_substr) {
    var index = len_substr - 1;

    while (index >= 0) {
      if (substr.charAt(index) == str.charAt(index + sdvig)) {
        index--;
      } else {
        break;
      }
    }
    
    if (index < 0) {
      return sdvig;
    } else {
      var char = str.charAt(index + sdvig);
      if (firstPosition.hasOwnProperty(char)) {
        var posInSubstr = firstPosition[char];
        if (posInSubstr < index) {
          sdvig += index - posInSubstr;
        } else {
          sdvig += 1;
        }
      } else {
        sdvig += len_substr;
      }
    }
  }
  
  return "ned";
}

var args = WScript.Arguments;
var inputfile = args(0);
var fso = new ActiveXObject("Scripting.FileSystemObject");
var fh = fso.OpenTextFile(inputfile);
var input = fh.ReadAll();
fh.Close();
WScript.Echo("Enter substring: ");
var substr = WScript.StdIn.ReadLine();
WScript.StdOut.Write("Result: " + boyermoor(input, substr));