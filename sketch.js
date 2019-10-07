//Mihika Bansal 
//mbansal@andrew.cmu.edu 
//Section E 
//Project 5

var diam = 66; //diameter
var Cdist = 198; //distance between 3 circles
var rad = 33; //circle radius 



function setup() {
    createCanvas(594, 582);
    background(255, 238, 173); // making my background canvas
    

    for(var i = 0; i < 10; i ++){ //determining # of rows 
        if(i % 2 == 0){ // determining if row is even or odd 
            for(var j = 0; j < 3; j ++){ // three of the first kind of ellipse in each row
                
                //first ellipse pattern 
                var posX1 = rad + Cdist * j; // determing x position of each of the 3 ellipses
                var posY1 = rad + diam * i * (0.5 * sqrt(3)); //determing y position of each of these ellipses
                //var posY1 = 33; 
                strokeWeight(0); 
                fill(150, 206, 180);  
                ellipse(posX1, posY1, diam, diam); //making blue ellipse
                fill(255, 204, 92);
                ellipse(posX1, posY1, 55, 55); //making yellow ellipse
                push(); 
                stroke(255, 238, 173); 
                strokeWeight(2); 
                translate (posX1, posY1); //making center lines
                for (var k = 0; k < 25; k ++){
                    line(0, 0, 27, 0);
                    rotate(PI/9); 
                } 
                pop();
            }
            for(var a = 0; a < 3; a ++){ // will be three of these ellipses

               //second ellipse pattern 
                var posX2 = (3 * rad) + Cdist * a; // the position of the second ellipse, which is 3 * radius
                fill(255, 111, 105); 
                ellipse(posX2, posY1, 66, 66); //making the target like ellipses
                stroke(255, 238, 173);
                strokeWeight(3);
                fill(150, 206, 180);
                ellipse(posX2, posY1, 40, 40); 
                fill(255, 111, 105); 
                ellipse(posX2, posY1, 15, 15);
                strokeWeight(0);
            }

            for(var b = 0; b < 3; b++){

                //third ellipse pattern 
                var posX3 = (5 * rad) + Cdist * b; //the base distance is 5 times the radius
                strokeWeight(0); 
                fill(255, 204, 92);
                ellipse(posX3, posY1, 66, 66); //making the ellipse bases
                fill(150, 206, 180);
                ellipse(posX3, posY1, 54, 54);


                push(); 
                strokeWeight(1); //making the rotated squares
                stroke("white"); 
                rectMode("center"); 
                translate(posX3, posY1);
                for (var m = 0; m < 3; m ++) {
                    rect(0, 0, 34, 34); 
                    rotate(PI/5); 
                }
                pop(); 

                fill(255, 204, 92);
                ellipse(posX3, posY1, 34, 34); //center ellipse
            }
        }
        else{ //if row is odd 
            for(var j = 0; j < 3; j ++){
                
                //first ellipse pattern, which was the third pattern 
                var posX1 = 2 * rad + Cdist * j; //want to fit in the gaps between the circles
                var posY1 = rad + diam * i * (0.5 * sqrt(3)); //using the ratio to make the circles fit exactly with eachother 
                strokeWeight(0); 
                fill(255, 204, 92);
                ellipse(posX1, posY1, 66, 66); 
                fill(150, 206, 180);
                ellipse(posX1, posY1, 54, 54);


                push(); 
                strokeWeight(1); 
                stroke("white"); 
                rectMode("center"); 
                translate(posX1, posY1);
                for (var m = 0; m < 3; m ++) {
                    rect(0, 0, 34, 34); 
                    rotate(PI/5); 
                }
                pop(); 

                fill(255, 204, 92);
                ellipse(posX1, posY1, 34, 34); 
                
            }
            for(var a = 0; a < 3; a ++){

               //second ellipse pattern, which was actually the first ellipse 
                var posX2 = (4 * rad) + Cdist * a; //fits in between the gaps again
                strokeWeight(0); 
                fill(150, 206, 180);  
                ellipse(posX2, posY1, diam, diam); 
                fill(255, 204, 92);
                ellipse(posX2, posY1, 55, 55);
                push(); 
                stroke(255, 238, 173); 
                strokeWeight(2); 
                translate (posX2, posY1); 
                for (var k = 0; k < 25; k ++){
                    line(0, 0, 27, 0);
                    rotate(PI/9); 
                } 
                pop();
                
            }

            for(var b = 0; b < 3; b++){

                //third ellipse pattern, which was actually the second
                var posX3 = (6 * rad) + Cdist * b;
                fill(255, 111, 105); 
                ellipse(posX3, posY1, 66, 66);
                stroke(255, 238, 173);
                strokeWeight(3);
                fill(150, 206, 180);
                ellipse(posX3, posY1, 40, 40); 
                fill(255, 111, 105); 
                ellipse(posX3, posY1, 15, 15);
                strokeWeight(0);

                //drawing first ellipse in the row for even rows, at the position 0 
                fill(255, 111, 105); 
                ellipse(0, posY1, 66, 66);
                stroke(255, 238, 173);
                strokeWeight(3);
                fill(150, 206, 180);
                ellipse(0, posY1, 40, 40); 
                fill(255, 111, 105); 
                ellipse(0, posY1, 15, 15);
                strokeWeight(0);
            }

        }
    }

   
    noLoop(); 
}
   
  
function draw() {

  
}
