function addNewWEField(){
         let newNode=document.createElement("textarea");
         newNode.classList.add("form-control");
         newNode.classList.add("weField");
         newNode.classList.add("mt-3");
         newNode.setAttribute("rows",3);
         newNode.setAttribute("placeholder","Enter Here");
         let wegob=document.getElementById("weg");
         let wegobj=document.getElementById("weAddButton");

         wegob.insertBefore(newNode,wegobj);
}

function addaqField(){

          let newNode=document.createElement("textarea");
          newNode.classList.add("form-control");
          newNode.classList.add("eqField");
          newNode.classList.add("mt-3");
          newNode.setAttribute("rows",3);
          newNode.setAttribute("placeholder","Enter Here");
          let aqgob=document.getElementById("aqg");
          let aqgobj=document.getElementById("aqAddButton");

          aqgob.insertBefore(newNode,aqgobj);
}
function generateCV(){

let nameField=document.getElementById("name").value;
let nameTemplate=document.getElementById("nameT1");
nameTemplate.innerHTML=nameField;

 document.getElementById("nameT2").innerHTML=nameField;
 document.getElementById("contactT").innerHTML=document.getElementById("contact").value;
 document.getElementById("adressT").innerHTML=document.getElementById("adress").value;
 document.getElementById("linkedinT").innerHTML=document.getElementById("linkedin").value;
 document.getElementById("gitT").innerHTML=document.getElementById("git").value;
 document.getElementById("fbT").innerHTML=document.getElementById("fb").value;
 document.getElementById("objT").innerHTML=document.getElementById("obj").value;
  
 let wea=document.getElementsByClassName("weField");
 let str="";

 for(e of wea ){
          
     str=str + `<li> ${e.value} </li>`;
 }

   document.getElementById("weT").innerHTML=str;

   let eqa=document.getElementsByClassName("eqField");
   let str1="";
   for(e1 of eqa)
   {
          str1=str1 + `<li> ${e1.value} </li>`;
   }
   document.getElementById("eqT").innerHTML=str1;

   let file=document.getElementById("image").files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=function(){
              document.getElementById("imgT").src=reader.result;

    };
      document.getElementById("cv-form").style.display="none";
      document.getElementById("cv-template").style.display="block";

}
function printCV(){
        window.print();

}