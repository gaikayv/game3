class water{
    constructor(x, y){
        this.x = x; 
        this.y = y; 
        
        this.directions = [];
    }
    getNewCoordinates(){
        this.directions=[
            [this.x - 1, this.y - 1], 
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    

    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var newX = this.directions[i][0];
            var newY = this.directions[i][1];
            if (newX >= 0 && newX < matrix[0].length && newY >= 0 && newY < matrix.length)
                if (matrix[newY][newX] == character) {
                    found.push(this.directions[i]);
                }
        }
        return found;
    }


    mul () {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
 
        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;
 
            var newwater = new wate(newX, newY);
           whatArr.push(newwater);
           
        }
    }

    
    diegrasseater() {
        var emptyCells = this.chooseCell(2);
        console.log("emptyCells",emptyCells)
        var newCell = random(emptyCells);
        console.log("newCells",newCell)
        if(newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            
        }
    }


       
}