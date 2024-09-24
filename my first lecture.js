let boxes= document.querySelectorAll(".box");
let rese= document.querySelector(".reset");
let msg=document.querySelector("#para");
let button=document.querySelector("#newbutton");
let di= document.querySelector(".message-container")

let turn0= true;
const winPattern=[
    [0,1,2],
    [3,4,5],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [6,7,8]
];

const reset = ()=> {
     turn0=true;
     enableboxes();
     di.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if(turn0){
        box.innerText ="O" ;
        turn0=false
    }else{
        box.innerText ="X";
        turn0= true;
    }
    checkwinner();
     }
    );
});

   const disableboxes = ()=>{
    for( box of boxes){
        box.disabled=true
    }}
    const enableboxes = ()=>{
        for( box of boxes){
            box.disabled=false;
            box.innerText="";
        }

   }
   const showwinner = (winner)=>{
    msg.innerText='congratulation the winner is {winner}';
    di.classList.remove("hide");
    disableboxes();
   }

  const checkwinner= () =>{
    for( patterns of winPattern){
        let pos1val=boxes[patterns[0]].innerText;
        let pos2val=boxes[patterns[1]].innerText;
        let pos3val=boxes[patterns[2]].innerText;


        if(pos1val!="" && pos2val!="" && pos3val!="" ){
        if (pos1val==pos2val && pos2val==pos3val){
        console.log("winner", pos1val);
        showwinner(pos1val);
      }
    }
  }
  }
button.addEventListener("click", reset);
rese.addEventListener("click",reset);