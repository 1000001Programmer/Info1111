document.addEventListener("DOMContentLoaded", () => {    
    inputField = document.getElementById("input")
    inputField.addEventListener("keydown",function(e)
    {
        if (e.code==="Enter") {
            let input = inputField.value;
            coinfunc = coinDateTime(input)
            splitfunc = randomlySplit(input)
            helpfunc = help(input)
            reversefunc = stringReversal(input)
            if (coinfunc == undefined && splitfunc == undefined && helpfunc == undefined && reversefunc == undefined) {
                displayinput("Unrecognised input")
            }
        }
    })
})

function coinDateTime(input) {
    splitinput = input.split(" ")
    fliphalf = 0;
    coinhalf = 0;
    flipnum = 1;
    flip = false;
    for (let x of splitinput) {
        if ( ! isNaN(x)){
            flipnum = x;
            if (flipnum<0) {
                flipnum = 0;
            } 
        }
        if ((x.toLowerCase() == "coin") || (x.toLowerCase() == "coins")){
            coinhalf = 1;
        }
        if ((x.toLowerCase() == "flip") || (x.toLowerCase() == "flips")){
            fliphalf = 1;
        }
        if ((fliphalf + coinhalf == 2) || (x.toLowerCase() == "coinflip")) {
            flip = true  
        }
        if (x.toLowerCase()=="date") {
            displayinput("Input: "+input)
            displayinput(date())
            return true
    }
    if (x.toLowerCase()=="time") {
        displayinput("Input: "+input)
        displayinput(time())
        return true
    }}
    if (flip == true && flipnum != 0) {
        displayinput("Input: "+input)
    for (i=0;i<flipnum;i++) {
                displayinput(coinflip())
            }      return true}
    }   

function randomlySplit(input) {
    splitinput = input.split(",")
    arlength = splitinput.length
    if (arlength >1) {

    for (i=0;i<arlength;i++) {
        if ( ! isNaN(splitinput[i])){
            numgroups = splitinput[i];
            if (numgroups < 0) {
                numgroups = 0
            }
            splitinput.splice(i,1)
            console.log(numgroups)
        }
    }

    arlength = splitinput.length
    table = document.createElement('table')
    if (numgroups != 0) {
        randomset = new Set()
        counter = 1
        while (randomset.size < arlength) {
            currlength = randomset.size
        
            while (randomset.size == currlength) {
                i = Math.floor(Math.random()*arlength)
                randomset.add(i)
                
            }
        ls = []
        }
        for (i=0;i<randomset.size;i++){
            ls.push(splitinput[Array.from(randomset)[i]])
        }
            console.log(ls)

        index = 0
        counter = -1
        ticker = 0
            while (index < numgroups) {
            index = index +1
            ticker = 0
            row=table.insertRow(-1);
            cell = row.insertCell(-1);
            cell.innerHTML = "Group"+ (index);
            counter = counter +1
            while (true) {
                if (ls[counter+ticker*numgroups] != undefined)    {
                    cell = row.insertCell(-1);
                    cell.innerHTML = ls[counter+ticker*numgroups];
                    ticker = ticker +1;
                } else {break}
            }
            }
            console.log(table.innerHTML)
            table.setAttribute("class","tablealign")
            displayinput("Input: "+input)
            document.getElementById("displayoutput").appendChild(table);
            return true
        }
    }
}


function displayinput(input) {
    p = document.createElement('P');
    p.innerHTML=input;
    document.getElementById("displayoutput").appendChild(p);   
    }




function clearpage() {
    console.log("button press");
    location.reload();

}

function coinflip() {
    randbool = Math.round(Math.random() )
    if (randbool=="1") {
        coinside = "heads"
    } else {
        coinside = "tails"
    }
    return coinside
}

function date() {
    current = new Date();
    curryear = current.getFullYear();
    currmonth = current.getMonth()+1;
    currdate = current.getDate();
    currformatted = currdate +"/" +currmonth+"/"+curryear;
    return currformatted
}
function time() {
    current = new Date();
    currhour = current.getHours();
    currmin = current.getMinutes();
    currsec = current.getSeconds();
    if (currhour >= 12) {
        ampm = "pm"
        if (currhour > 12) 
        currhour = currhour-12
    } else {
        ampm = "am"
    }
    currformatted = currhour +":" +currmin+":"+currsec + " "+ ampm;
    return currformatted
}

function help(input) {
    if (input == 0){
    helpmessage = "Flips n coins where n is defaultly 1. User types 'coinflip 100' or any sentence containing the words coin and flip or their plural counterparts."
    }
    else if (input == 1){
    helpmessage = "Returns the current date.  User types 'date' by itself or as part of a larger sentence"     
    }
    else if (input == 2){
    helpmessage = "Returns the current time. User types 'time' by itself or as part of a larger sentence"     
    }
    else if (input == 3){
    helpmessage = "Splits the inputs into n groups. User types 'P1,P2,P3,2' and the program will randomly split the three people into two groups. The user can type the number of groups before,after or as part of the name list"      
    }
    else if (input == 4){
    helpmessage = `Returns the inverse of the users sentence/word E.g. 'good day' becomes 'yad doog'. User types 'reverse message'`    
    }
    if ( ! isNaN(input)){
    alert(helpmessage)
    return true}
}

function stringReversal(input){
    splitinput = input.split(" ")
    if (splitinput[0].toLowerCase() == "reverse") {
        splitinput.shift()
    input = input.substring(8)
    i = input.length
    console.log(i)
    console.log(input)
    revstr = ""
    console.log(revstr)
    while (i>0) {
        i = i -1
        revstr = revstr + input[i]
        
        console.log(revstr)
    }
    displayinput("Input: "+input)
    displayinput(revstr)
    return true}
}

