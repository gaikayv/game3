// var matrix = [
//     [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
// ];
var matrix = [];
var amuArr = []
var xangaroxArr = []
var side = 30;
var whatArr= []
let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];


// for (let i = 0; i < grassEaterArr.length; i++) {
//                 if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
//                     grassEaterArr.splice(i, 1)
//                 }
                
//             }
//             for (let i = 0; i < predatorArr.length; i++) {
//                 if (predatorArr[i].x == x && predatorArr[i].y == y) {
//                     predatorArr.splice(i, 1)
//                 }
                
//             }

       
    
function setup() {
     function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount , whaterCount, xangaroxCount, amuCount) {
        for (let i = 0; i < matrixSize; i++) {
        matrix[i] = []
        for (let o = 0; o < matrixSize; o++) {
        matrix[i][o] = 0;
        }
        }
        for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(random(matrixSize));
        let y = Math.floor(random(matrixSize));
        matrix[y][x] = 1;
        }
        for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(random(matrixSize));
        let y = Math.floor(random(matrixSize));
        matrix[y][x] = 2;
        }
        for (let i = 0; i < predatorCount; i++) {
        let x = Math.floor(random(matrixSize));
        let y = Math.floor(random(matrixSize));
        matrix[y][x] = 3;
        }       
        for (let i = 0; i <  whaterCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 4;
            }

            for (let i = 0; i <  xangaroxCount; i++) {
                let x = Math.floor(random(matrixSize));
                let y = Math.floor(random(matrixSize));
                matrix[y][x] = 5;
                }
                for (let i = 0; i <  amuCount; i++) {
                    let x = Math.floor(random(matrixSize));
                    let y = Math.floor(random(matrixSize));
                    matrix[y][x] = 6;
                    }  
        }
        
  matrixGenerator(40, 100, 50, 2 , 3, 18, 1);
        
     
    
    
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y);
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                let predator = new Predator(x, y);
                predatorArr.push(predator)
            } 
            else if(matrix[y][x] == 4){
                let whaterr = new water(x,y);
                whatArr.push(whaterr)
                
        }
        else if(matrix[y][x] == 5){
            let xangaroxrr = new xangarox(x,y);
            xangaroxArr.push(xangaroxrr)
            
    }
    else if(matrix[y][x] == 5){
        let aenu = new amu (x,y);
        amuArr.push(aenu)
        
}

    }
    
}
}
function draw() {
    
    for (let y = 0; y < matrix.length; y++) {
        
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                
                fill("gray");
            } else if (matrix[y][x] == 2) {
               
                fill("yellow");
            } else if (matrix[y][x] == 3) {
                
                fill("red");
            } 
            else if(matrix[y][x] == 4){
                
                fill("blue");
             }
             else if(matrix[y][x] == 5){
                
                fill("orange");
             }
             else if(matrix[y][x] == 6){
                
                fill("black");
             }

            rect(x * side, y * side, side, side);



        }
    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }

    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    for (let i in whatArr){
       
        whatArr[i].diegrasseater();
       }
       for (let i in xangaroxArr){
       
        xangaroxArr[i].move();
       }
    
}

