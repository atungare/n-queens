var bitNQueens = function(num) {

  var count = 0;

  var all = 1;

  var qtry = function(ld, cols, rd){
    if(cols === all) {count++;}
    var poss = ~(ld | cols | rd) & all;
    while(poss) {
      var bit = poss & -poss;
      poss -= bit;
      qtry((ld|bit)<<1, cols|bit, (rd|bit)>>1);
    }
  };

  for(var n = 1; n < num; n++) {
    all = 2*all+1;
  }

  qtry(0,0,0);
  console.log(n, count);

};

// var now = new Date();
// bitNQueens(16);
// console.log(16, (new Date() - now));
