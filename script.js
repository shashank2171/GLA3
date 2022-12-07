var currState = "";
var currColor = "";
var currTicket = "";

function makeTicket(){
    var body = document.getElementById("mid");

    var card = document.createElement("div");
    card.setAttribute("class","card");

    var tic = document.createElement("div");
    var token = Math.random().toString(36).substring(2,8);
    tic.setAttribute("class","tic");
    card.setAttribute("id",token);
    card.setAttribute("onClick","currTicket=this.id; deleteCard();")

    var col = document.createElement("div");
    col.setAttribute("class","col")

    col.style.backgroundColor=currColor;
    var des = document.createElement("div");

    tic.innerHTML=token;
    des.innerHTML="hahahahahaha";

    card.appendChild(col);
    card.appendChild(tic);
    card.appendChild(des);
    
    body.appendChild(card);
}

function deleteCard(){
    if(currState=="del"){
        var card = document.getElementById(currTicket);
        card.innerHTML="";
        currTicket="";
    }
}



