function sudokupuzzle(){
    var sudoku=[];
    for(i = 0 ; i < 9 ; i++){
        sudoku[i]=new Array(9);
    }
    let arr1 = '';
    let arr2 = '';
    let num = 9;
    let num1 = 9;
    let col = 0;
    let col1 = 0;
    let row = 0;
    let row1 = 0;
    let box = 0;

    // get numbers from the sudoku matrix to the input in html .
    for( i = 0 ; i < 9 ; i++){
        for(j = 0 ; j < 9 ; j++){
                sudoku[i][j]= document.getElementById('a' + i + 'a' + j).value;
        }    
    }
    // checking the numbers in row . 
    for(i=0;i<sudoku.length;i++){
        for(j=0;j<sudoku[i].length;j++){
            if(sudoku[i][j]>='1' && sudoku[i][j]<='9'){
                if( arr2.indexOf(sudoku[j][i]) == -1 ){ // arr2 check if there is a duplicat number .
                    row++; // in every check for input the row will be plus one , in the end of every row the row will be 9 .
                    arr2=arr2+sudoku[j][i];
                }
                if( row == num1){   // checking if the row was checked and its ok .
                    num1=num1+9
                    row1++; // in end will check all the rows in sudoku. == 9 .
                    arr2='';
                }            
            }
            // checking the numbers in column . 
            if(sudoku[i][j]>='1' && sudoku[i][j]<='9'){        
                if( arr1.indexOf(sudoku[i][j]) == -1 ){
                    col++; // in every check for input the col will be plus one , in the end of every col the row will be 9 .
                    arr1=arr1+sudoku[i][j];
                }
                if( col == num ){    
                    num=num+9
                    col1++; // in end will check all the columns in sudoku. == 9 .
                    arr1='';
                }            
            }
        }
    }
    // check every box in sudoku .
    for(i=1; i<9; i+=3){ // every time the 'i' move 3 rows .
        for(j=1; j<9; j+=3){ // every time the 'j' move 3 columns .
            if((sudoku[i][j] != sudoku[i][j+1] ) && (sudoku[i][j] != sudoku[i+1][j+1]) && (sudoku[i][j] != sudoku[i+1][j-1] ) && (sudoku[i][j] != sudoku[i-1][j+1] ) && (sudoku[i][j] != sudoku[i-1][j-1] ) && (sudoku[i][j] != sudoku[i][j-1] )){
                box++; // box should move on 9 boxes.
            }
        }
    }
    if( col1 == 9 && row1 == 9 && box == 9 ){
        alert('Success');	
    }
    else{
        alert('Game over');
        mediumSudoku();	
    }  
}

function mediumSudoku(){
        var sudoku1=[[6,1,9,7,2,4,3,5,8],
                     [2,8,5,9,6,3,7,1,4],
                     [4,7,3,5,8,1,2,6,9],
                     [9,3,6,4,7,5,8,2,1],
                     [8,2,7,1,3,6,4,9,5],
                     [1,5,4,8,9,2,6,7,3],
                     [3,6,8,2,1,9,5,4,7],
                     [5,9,2,3,4,7,1,8,6],
                     [7,4,1,6,5,8,9,3,2], ];

    for(i=0;i<sudoku1.length;i++){
        for(j=0;j<sudoku1[i].length;j++){
            document.getElementById( 'a' + i + 'a' + j ).value = sudoku1[i][j];
            let c3,c2,c4 ; // the cells that we want to delete .
            let cellrow3 = Math.floor(Math.random() * 5); // (0-4)  - choose a random row in sudoku to delete a cell.
            let cellrow4 = Math.floor(Math.random() * 4) + 5; // (5-8) - choose a random row in sudoku to delet a cell.
            let cellrow5 = Math.floor(Math.random() * 9) ; // (0-8) - choose a random row in sudoku to delet a cell.
            if ( i == cellrow3 || i == cellrow4 || i == cellrow5 ) {
                c2 = Math.floor(Math.random() * 3);
                c3 = Math.floor(Math.random() * (5-3+1))+3;
                c4 = Math.floor(Math.random()* 9);
                sudoku1[i][c2] = '';
                sudoku1[i][c3] = '';
                sudoku1[i][c4] = '';
            }else{
                c2 = Math.floor(Math.random() * 9); // 0-8 - but a number in this place
                c3 = Math.floor(Math.random() * 9); // 0-8 - but a number in this place
                sudoku1[i][c2] = '';
                sudoku1[i][c3] = '';
            }
        }
    }
}
function back(){
    document.getElementById('button3').innerHTML=window.location = "welcome.html";
}
function ontimer(){
    document.getElementById('time').innerHTML = i ;
    i--;
    if (i < 0){
        alert('Time out');
        mediumSudoku();
    }else{
        setTimeout(ontimer,10000);
    }
}