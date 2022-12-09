var Misheel = 17
var Oyuka = 19
var Lkhagvadulam = 23
var Buyn = 43

if(Buyn > Lkhagvadulam && Buyn > Oyuka && Buyn > Misheel){
    max1 = Buyn;
}
else if (Lkhagvadulam > Buyn && Lkhagvadulam >Oyuka && Lkhagvadulam > Misheel){
    max1 = Lkhagvadulam;
}
else if (Oyuka > Buyn && Oyuka > Lkhagvadulam && Oyuka > Misheel){
    max1 = Oyuka;
}else if (Misheel > Buyn && Misheel > Lkhagvadulam && Misheel > Oyuka){
    max1 = Misheel;
}
console.log ('the oldest' + max1)

var min1
if (Misheel < Lkhagvadulam && Misheel < Oyuka && Misheel < Buyn){
    min1 = Misheel;
}
else if (Oyuka < Misheel && Oyuka < Lkhagvadulam && Oyuka < Buyn){
    min1 = Oyuka;
}
else if(Lkhagvadulam < Misheel && Lkhagvadulam < Oyuka && Lkhagvadulam < Buyn){
    min1 = Lkhagvadulam;
}
else if(Buyn < Misheel && Buyn < Oyuka && Buyn < Lkhagvadulam){
    min1 = Buyn;
}
console.log('the youngest' + min1)