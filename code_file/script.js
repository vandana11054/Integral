

const Math_opers = {                      //Functions that user can select in Expression-Calci
    derive : "DER",
    integrate : "ITG",
	 factor : "FAC",
    zeroes : "ROOT",
 };
let dropper = document.querySelector(".func select")   //Access dropdown menu from html page using select statement of it's class 
for(element in Math_opers){                            //Append functions(by using keys from object Math_opers) to dropdown menu
   let newOpt = document.createElement("option");
   newOpt.innerText = element;
   newOpt.value = element;
   dropper.append(newOpt);
}
const Math_func={                                 //Functions that user can select in Trigonometric,Hyperbolic,Logarithmic section
   cos :"cos",
   sin :"sine",
   tan :"tan",
   sin_inv :"arcsine",
   cos_inv :"arccos",
   tan_inv :"arctan",
   sinh : "sineh",
   cosh : "cosh",
   tanh : "tanh",
   sin_inv_hyperbolic :"arcsineh",
   cos_inv_hyperbolic : "arccosh",
   tan_inv_hyperbolic : "arctanh",
   log_base_e : "log",
   log_base_10 : "log10",
   log_base_2 : "log2",
};
let trig = document.querySelector(".trifs select");     //Accessing select box from html using select of given class.
  for(val in Math_func){                                //Appends functions to drop-down menu
   let optn = document.createElement("option");
   optn.innerText = val;
   optn.value = val;
   trig.append(optn);
  }
let eval = document.getElementById("eval");             //GO button accessed(eval(id) is not user-friendly hence only for interface GO name displayed)
eval.addEventListener("click",(e)=>{                   //Event that evaluates answer for trigonometric section.
   e.preventDefault();
   let angle= document.querySelector("#Trig").value;  //selected function is accessed.
   let trif = trig.value;
   let trig_Ans = document.querySelector(".trig_Ans");
   if(trif === "cos")           trig_Ans.innerText = Math.cos(angle * Math.PI / 180);
   else if(trif === "sin")      trig_Ans.innerText = Math.sin(angle * Math.PI / 180);
   else if(trif === "tan")      trig_Ans.innerText = Math.tan(angle * Math.PI / 180);
   else if(trif === "sin_inv")  trig_Ans.innerText = (180/ Math.PI)*Math.asin(angle);
   else if(trif === "cos_inv")  trig_Ans.innerText = (180/ Math.PI)*Math.acos(angle);
   else if(trif === "tan_inv")  trig_Ans.innerText = (180/ Math.PI)*Math.atan(angle);
   else if(trif === "sinh")     trig_Ans.innerText = Math.sinh(angle);
   else if(trif === "cosh")     trig_Ans.innerText = Math.cosh(angle);
   else if(trif === "tanh")     trig_Ans.innerText = Math.tanh(angle);
   else if(trif === "sin_inv_hyperbolic")     trig_Ans.innerText = Math.asinh(angle);
   else if(trif === "cos_inv_hyperbolic")     trig_Ans.innerText = Math.acosh(angle);
   else if(trif === "tan_inv_hyperbolic")     trig_Ans.innerText = Math.atanh(angle);
   else if(trif === "log_base_e")             trig_Ans.innerText = Math.log(angle);
   else if(trif === "log_base_10")            trig_Ans.innerText = Math.log10(angle);
   else if(trif === "log_base_2")             trig_Ans.innerText = Math.log2(angle);
   trig_Ans.style.visibility = "visible";            //Answer div displayed
})

let btn = document.querySelector("#calci");   //Accessing SOLVE button(calci(id) is not user-friendly hence SOLVE displayed on page)
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    const oper = document.getElementById("Opers").value;   //Selected function value is accessed.
    const exprStat = document.querySelector(".expr input"); 
    const expr = exprStat.value;                 //Expression from input is accessed.               
    const encExpr = encodeURIComponent(expr);    //Expression encoded to be sent as api input.
    const URL = `https://newton.now.sh/api/v2/${oper}/${encExpr}` ;   //URL with given inputs operation and expression.
    answer(URL,expr);   //Call to async function.
})

 async function answer(URL){
      console.log("Equation processing...");
      let response = await fetch(URL);          //Fetch-api for expression-calci calculations.
      if(response.status === 200){              //if promise executes successfully.
      let reqAns =  await response.json();      //XML to json convertion.
      let ans = document.querySelector(".answer");   //Access answer div from html page.
      ans.innerText = reqAns.result;           //Fill it with our returned result of response.
      }else{
       let ans = document.querySelector(".answer");              //if promise is not succesful.
       ans.innerText ="Error,solution can't be provided." ;  //Message  conveyed to user.
      }
}
 
   let elt = document.getElementById('calculator');      //Access calculator element by id.
   let calculator = Desmos.GraphingCalculator(elt);      //Desmos api is accessed.
   let help = document.getElementById("help");           //Help button is accessed.
   help.addEventListener("click",()=>{
     window.open("help_page.html","_blank");             //Open Support-page(help_page.html) on clicking help button.
   })
  
