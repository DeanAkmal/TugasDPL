// bayu canddra
//var i = 5;

//for (i = 0; i < 10; i++ )

//console.log("Nilai sekarang " + i)
var i = bil;
for (i = 0; i <= 10; i++ )
if (i % 2 == 0 ){
    console.log(i)};

var input = require('readline-sync');
var bil = input.question('Input bilangan : ');

if (bil > 10){
    console.log("BIlangan melebihi batas");
}else{

for (var i = 0; i <= bil; i++)    
    if( i % 2 == 0) 
    console.log(i);
};
