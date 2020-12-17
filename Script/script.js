

function ProdScal() {
    var result = 0;
    var tempo = 0;
    var A = [];
var B = [];
   var AX = document.getElementById("AX").value
   var AY = document.getElementById("AY").value
   var AZ = document.getElementById("AZ").value

   var BX = document.getElementById("BX").value
   var BY = document.getElementById("BY").value
   var BZ = document.getElementById("BZ").value

   A.push(AX);
   A.push(AY);
   A.push(AZ);

   B.push(BX);
   B.push(BY);
   B.push(BZ);
   document.getElementById("VA").innerHTML ='A =' + A;
   document.getElementById("VB").innerHTML ='B =' + B;


   for (let index = 0; index < A.length; index++) {

        tempo = A[index] * B[index];
        result = result + tempo;

       
   }
console.log(result);
document.getElementById("prod").innerHTML = result;

if(result==0)
document.getElementById("Ortho").innerHTML="Les deux vecteurs sont orthogonaux..."
else 
document.getElementById("Ortho").innerHTML="Les deux vecteurs ne sont PAS orthogonaux (I guess)"
   return result;
}