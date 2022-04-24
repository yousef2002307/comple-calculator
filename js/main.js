/* algorithm



اني اضيف علي ال opreators كلاس يخليها  event-pointers:none ولما اضغط علي رقم يتشال ولما اضغط علي opreators يتحط،
ولما تضغط =
احط كل الارقام وال opreators في string وافصل بين كل رقم و opreators بمسافه عشان بعد كده هحولهم ل array  وهتلاحظ ان دايما ال opreators هيكون مكانها فردي 
[22,+,5,÷]
فهتروح تحط كل ال opreators يعني هتعمل for loop عليهم وتحطهم في داله تحدد ال precedence والداله ديه هترجع رقم هيتحط في  array لل precedence ، والعلاقه بين ال precedence وال array  الاصلي هتكون  i و j ال i هتزيد بمقدار واحد وال j  بمقدار اتنين في ال for loop اللي هتعملها عشات تجيب الناتج النهائي وال for loop هيكون فيها 
If condition 
لما  i=0 فهناخد القيمه اللي قبل وبعظ ال opreator ونحطهم في ال function بتاعة ال   calculation ونرجع القيمه في متغير اسمه result
لما  i !=0  ولو ال index ابجديد اكبر من القديم فهيبقي هنادي الداله بتاعة ال calulation ف result هيكون علي الشمال وللي بعد ال opreator هيكون اللي علي اليمين والعكس لو كان ال index  اصغر من ال index  اللي قبله وبعد ماال for loop تخلص هترجع ال result.








*/
/* work station */
let firstval = 0;
let lastval = 0;
let middleval = 0;
let op = '';
let operators = ["+","-","*","/"];
let header = document.querySelector("header");
let body = document.querySelector(".body");
let section = document.querySelector("section");
let num = document.querySelectorAll(".num");
let equal = document.querySelector(".equal");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let product = document.querySelector(".product");
let divide = document.querySelector(".divide");
let point = document.querySelector(".point");
let clear = document.querySelector(".clear");
let p = document.querySelector("header p");
let span = document.querySelector("span");
let opreator = document.querySelectorAll(".opreator");
let bool = false ;
/* work station */


/* to disable and enable of opreators button on diffrent cases */
opreator = Array.from(opreator);
opreator.forEach(ele => {
ele.classList.add("op");
ele.onclick = function(){
     /*chang the value on soan on clicking nums and opreators */
    span.textContent = span.textContent + " " + ele.textContent + " ";
     /*chang the value on soan on clicking nums and opreators */
   opreator.forEach(ele2 => {
       ele2.classList.add("op")
   })
}
});
num = Array.from(num);
num.forEach(ele => {
ele.addEventListener("click",function(e){
p.textContent = "";
    /*chang the value on soan on clicking nums and opreators */
if(span.classList.contains("result")){
    span.textContent = ele.textContent;
    span.classList.remove("result");
}else{
    span.textContent = span.textContent  + ele.textContent;
}


/*chang the value on soan on clicking nums and opreators */
opreator.forEach(ele => {
    ele.classList.remove("op")

})
});
});
/* to disable and enable of opreators button on diffrent cases */
/* clicking equal */

equal.onclick = () => {
   /* turn span content into array*/
let arr = span.innerText.split(" ");

    /* turn span content into array*/
    /*adding class op on opreator to prevent user from clicking it */
    
    opreator.forEach(ele => {
        ele.classList.add("op");

    });
    /*adding class op on opreator to prevent user from clicking it */

    /* check if last element is opreatorsa meaning there is error and if there is not continue*/
if(parseInt(arr[arr.length -1])){
   let precedencearray = [];
   let k = 0;
   let zogynumbers=[];
   for(let i = 1; i < arr.length;i= i + 2){
       zogynumbers.push(i - 1);
    precedencearray[k] = getprecedence(arr[i]);
    k++;
}
p.textContent = finalfun(arr,precedencearray,zogynumbers);
span.textContent = "";

   
}else{
   p.style.display = "block"
   p.textContent = "there is error, try agian";
   span.textContent = '';
   setTimeout(() => {
    p.textContent = "";

   },3000)
}


     /* check if last element is opreatorsa meaning there is error*/
}




/*
function to get the precedence of opreator 
*/

function getprecedence(opreator){
    let result = '';
    switch(opreator){
        case "+" :
            result = 1;
            break;
            case "-" :
                result = 1;
                break;
                case "*" :
                    result = 2
                    break;
                    case "/" :
                        result = 2
                        break;
            
    }
    return result;
}
/* function to clculate on two numbers */
function makesurethatoperatorexcist(num1,num2,operator){
    let result = '';
    switch(operator){
        case "+" :
            result = parseFloat(num1) +parseFloat(num2);
            break;
            case "-" :
                result = parseFloat(num1) -parseFloat(num2);
                break;
                case "*" :
                    result =parseFloat(num1) * parseFloat(num2)
                    break;
                    case "/" :
                        result = parseFloat(num1)/ parseFloat(num2)
                        break;
            
    }
    return result;
}
/* function to clculate on two numbers 

let arr1 = [2,3,4,5,6,7];
//arr1 = arr1.slice(0,3).concat(arr1.slice(4,));
for(let i = 0; i<arr1.length;i++){
    console.log(i);
    arr1 = arr1.slice(i+1, );
}
*/


///////////////////////////////////////////////////////////////////////////////////////
let $result = 0;
function finalfun(arr,precedencearray,zogynumbers){
    console.log(arr)
     /*prepration for base case*/
    let $index = 0;
    for(ele of arr){
        if(parseInt(ele)){
            $index++;
        }
    }
    /*base case*/
   if($index == arr.length){
       return $result;
   }
   /* rest of the function */
   if(Math.max(...precedencearray)  == 2){
       
   //looking for first two
   let $k = 0;
   let $n1,$n2,$n3
   for (const iterator of precedencearray) {
       if(iterator == 2 ){
            $n1 = zogynumbers[$k] + 1;
            $n2 = zogynumbers[$k];
            $n3 = zogynumbers[$k] + 2;
          $result =  makesurethatoperatorexcist(arr[$n2],arr[$n3],arr[$n1]);
          break;
       }
       $k++;
   }
   $newarr = arr.slice(0,$n2).concat(arr.slice($n3,));
   $newarr[$n3 - 2] = $result.toString();
   $newprecedencearray = precedencearray.slice(0,$k).concat(precedencearray.slice($k + 1,));
   return finalfun($newarr,$newprecedencearray,zogynumbers);

   }else{
     //looking for first one
//looking for first two
let $k = 0;
let $n1,$n2,$n3
for (const iterator of precedencearray) {
    if(iterator == 1 ){
         $n1 = zogynumbers[$k] + 1;
         $n2 = zogynumbers[$k];
         $n3 = zogynumbers[$k] + 2;
       $result =  makesurethatoperatorexcist(arr[$n2],arr[$n3],arr[$n1]);
       break;
    }
    $k++;
}
$newarr = arr.slice(0,$n2).concat(arr.slice($n3,));
$newarr[$n3 - 2] = $result.toString();
$newprecedencearray = precedencearray.slice(0,$k).concat(precedencearray.slice($k + 1,));
return finalfun($newarr,$newprecedencearray,zogynumbers);
   }
}
////////clear all on clicking clear //////////
clear.onclick = function(){
    span.textContent = "";
    p.textContent = '';
    opreator.forEach(ele => {
        ele.classList.add("op");
      
        });
}