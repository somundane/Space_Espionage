let dText = ["> Where am I?", "> Goodbye"];
let dialogue = [];
//show dialogue box
function dialogueBox(fade) {
    fill(0, fade)
    rect(0, height * 0.82, width, height * 0.2)
    for(let i = 0; i < dialogue.length; i ++) {
        if(dialogue[i].show == true) {
            push();
            fill(255, fade);
            textLeading(16);
            textSize(20)
            textAlign(LEFT);
            textFont('Poppins');
            text(dialogue[i].text, 120, height*0.88)
            pop();
        }
    }
    push()
    scale(0.4);
    tint(255, 100)
    image(mic, 40, 940);
    image(hand, 40, 1050);
    pop();
}

//make specified dialogues true/ready to be shown
function dialogueTrue(start, end) {
    if(start==end) {
        for(let i = 0; i < dialogue.length; i ++) {
            if(i == start) {
                dialogue[i].show = true;
            }
        }
    }
    else {
        for(let i = 0; i < dialogue.length; i ++) {
            if(i < start || i > end) {
                dialogue[i].show = false;
            }
            else {
                dialogue[i].show = true;
            }
        }
    }
}

let info = [
    "Whenever the speech symbol is\nactive, you can advance through \nscenes by using speech commands.\nSome of these interactions will be \nguided, like this one!\n\nSay the phrase to try it out!"
];
function infoBox(info, t, x, y, w, h, r, pos, p, fade) {
    let f = map(fade, 0, 255, 0, 160)
    push();
    fill(0, f)
    rect(0, 0, width, height)
    pop();
    
    //box
    push();
    fill(255, fade)
    rect(x, y, w, h, r)
    //triangle
    if(pos == "down") {
        beginShape();
        vertex(x+w*p, y + h + 20);
        vertex(x+w*p - 20, y + h);
        vertex(x+w*p + 20, y + h);
        endShape(CLOSE);
    }
    if(pos == "right") {
        
    }
    pop();
    
    //i
    push();
    noFill();
    strokeWeight(2)
    stroke(0, fade)
    ellipse(x+31, y+30, 25)
    pop();

    //i
    fill(0, fade);
        push();
        textSize(20)
        textFont('Courgette');
        text("i", x+28, y+37)
        pop();

        //title
        push();
        textSize(20)
        textAlign(LEFT);
        textFont('Poppins');
        text(t, x+55, y+37)
        pop();

        //body
        push();
        textLeading(18);
        textSize(12)
        textAlign(LEFT);
        textFont('Montserrat');
        text(info, x+55, y+70)
        pop();
    
}

let canspeak = false, canmove;
function activateIcon(icon, fade) {
    if(icon == "speech") {
        push()
        scale(0.40);
        tint(250, fade)
        image(mic, 40, 940);
        pop();
        canspeak = true;
    }
    if(icon == "hand") {
        
    }

}