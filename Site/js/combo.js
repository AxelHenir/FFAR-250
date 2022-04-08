class Combo {

    constructor(){

        this.hitCircles = [];
        this.color = random([
            color(23,44,200), 
            color(125,150,25),
            color(121,200,200),
            color(45,78,192),
            color(255,189,0),
            color(245, 120, 66),
            color(181, 153, 141),
            color(0, 173, 153),
            color(189, 0, 47),
            color(186, 99, 175),
            color(120, 62, 173),
            color(154, 230, 18),
            color(40, 222, 40),
        ]);

    }

    drawCombo(){

        this.drawConnectors();

        this.hitCircles.forEach((element) => {
            
            element.updateOpacity();
            element.drawHitCircle();
            
        });

        this.cullDeadHitCirlces();

        let r = random();
        if (r > 0.99) this.nextColor();

    }

    drawConnectors(){

        let h = this.hitCircles;

        for(let i = 0 ; i < h.length-1 ; i++ ){

            let l = createVector(h[i].position.x,h[i].position.y);
            let k = createVector(h[i+1].position.x,h[i+1].position.y);
            let m = p5.Vector.sub(l,k);

            push();

                stroke(255,255,255,h[i].opacity); //h[i].opacity
                strokeWeight(10);
                translate(h[i].position.x,h[i].position.y);
                line(0,0,-m.x,-m.y);

            pop();

            //console.log("x1: ",coords.x1,"y1: ",coords.y1,"x2: ",coords.x2,"y2: ",coords.y2);

            
        }
    }

    newHitCircle(x= random(0,1000),y= random(0,1000)){

        let n = new Hitcircle(x,y,this.color);

        this.hitCircles.push(n);

    }

    cullDeadHitCirlces(){

        this.hitCircles = this.hitCircles.filter(element => element.life < 80);

    }

    nextColor(){

        this.color = random([
            color(23,44,200), 
            color(125,150,25),
            color(121,200,200),
            color(45,78,192),
            color(255,189,0),
            color(245, 120, 66),
            color(181, 153, 141),
            color(0, 173, 153),
            color(189, 0, 47),
            color(186, 99, 175),
            color(120, 62, 173),
            color(154, 230, 18),
            color(40, 222, 40),
        ]);

    }

}