let wincondition = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]  
  ];

let turn = true;
let resetbtn = document.querySelector("#rbtn");
let button=document.querySelectorAll(".btn");
let winnermessage = document.querySelector("#winmsg");

button.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("box clicked");
       if (btn.innerHTML==="")
       {
        if ( turn===true)
        {
            btn.innerHTML = "X";
            turn = false;
        }
        else
        {
            btn.innerHTML = "O";
            turn = true;

        }
        winnercheck();
    };
    });
});







function disablebox()
{
    for (let btn of button) 
    {
        btn.disabled = true;
    }
}



function enablebox()
{
    for (let btn of button) 
    {
        btn.disabled = false;
    }
}



const resetbutton = () => {
    enablebox();
    for (let btn of button) 
    {
        btn.innerText = "";
    }
    winnerhide();
}

resetbtn.addEventListener("click", resetbutton );

function winnershow(val1)
{
    winnermessage.classList.remove("hide");
    winnermessage.innerText = `congratulations winner is ${val1}`;
}

function winnerhide() {
    winnermessage.classList.add("hide");
}

function winnercheck() {
   for(let element of wincondition)
    {    
        // console.log(element[0], element[1], element[2]);
        // console.log(button[element[0]].innerText, button[element[1]].innerText, button[element[2]].innerText);
        

        if(button[element[0]].innerText!="" && button[element[2]].innerText!="" && button[element[1]].innerText!="")
        {
               if(button[element[0]].innerText===button[element[1]].innerText && button[element[1]].innerText===button[element[2]].innerText)
            {
                
                console.group("winner",button[element[0]].innerText);
                disablebox();
                winnershow(button[element[0]].innerText);
            }
        }
    }
}
