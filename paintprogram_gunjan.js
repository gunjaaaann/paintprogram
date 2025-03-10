alert ("Welcome to Paint Program")

let selectedColor = ""

//this is an array containing rgb values of all colors available to the user
let colors = ["rgb(255, 255, 0)", "rgb(255, 215, 0)", "rgb(205, 133, 63)", "rgb(0, 128, 0)", "rgb(85, 107, 47)", "rgb(0, 255, 255)", "rgb(0, 0, 128)", "rgb(0, 0, 255)", "rgb(128, 0, 128)", "rgb(255, 0, 255)", "rgb(255, 192, 203)", "rgb(255, 0, 0)", "rgb(250, 128, 114)", "rgb(165, 42, 42)", "rgb(0, 0, 0)", "rgb(128, 128, 128)"]

//my rows are named letter wise from a-t
let rowNames = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"];

//the default value of scrollStopped is true meaning that nothing on the screen is working
let scrollStopped = true;


//this function detects which button is clicked and stores it
function colorSelected(x) {
    //detects the button that is being selected
    targetId = "#" + x;
    buttonColor = document.querySelector(targetId);
    //this variable gets the color of the button from the CSS file and stores it in a variable
    selectedColor = getComputedStyle(buttonColor).backgroundColor;
    return 1;
}

//this function changes the color of the cells that are clicked
function colorChanged(x, selectedColor) {
    //detects the cell that is being clicked on
    targetId = "#" + x;
    targetCell = document.querySelector(targetId);
    //changes the background color of the cell to the color that is selected
    targetCell.style.backgroundColor = selectedColor;
    return 1;
}


//this function clears all the cells' background colors
function clearAll(colors) {
    //loops for every cell in the table and sets each cell's background color to white
    for (let i=0; i<document.querySelectorAll('td').length; i++) {
        document.querySelectorAll('td')[i].style.backgroundColor = colors;
    }
    return 1;
}




//this function will color each cell with a random color from the predefined colors array
function randomColorGenerator() {
    //selecting all cells in the table
    let tableData = document.querySelectorAll('td');
        //this loop will go through all the cells in the table
    for (let l=0; l<tableData.length; l++) {
        //generating a random number 
        let randomNumber =  Math.floor(Math.random() * colors.length);
        //getting the color assigned to that random number (index) in the colors array
        let randomColor = colors[randomNumber]
        //changing the background color of the cell to the new one
        tableData[l].style.backgroundColor = randomColor;
    }   
    return 1;
}


//this function changes the color of any colored cell to the next color in the array/ the next color button 
function colorify() {
    let currentBackgroundColor="";
    //selecting all cells in the table
    let tableData = document.querySelectorAll('td');
    //this loop will go through all the cells in the table
    for (let m=0; m<tableData.length; m++){
        //if statement will process if background color of the cell is not null/ empty
            //saving the current background color of the cell in a variable
            currentBackgroundColor = tableData[m].style.backgroundColor;
            //finding the index of the current background color in the predefined array of colors
            let currentColorIndex = colors.indexOf(currentBackgroundColor);
            let newColorIndex = 999;
            //if statement will process if the current background color is the last color in the array
            if (currentColorIndex == colors.length-1) {
                //the index of the new background color will become the first color in the ray
                newColorIndex = 0;
            //otherwise index of new background color will be current background color index + 1 (next one) 
            } else {
                newColorIndex = currentColorIndex+1;
            }
            //getting the rgb color value of the new background color
            let newBackgroundColor = colors[newColorIndex]
            //changing the background color to the new one
            tableData[m].style.backgroundColor = newBackgroundColor
        //if a cell has no background color, nothing will change and loop will continue to the next cell        

    }   
    return 1;
}



//this function moves the color of each cell to the cell on the left
function moveColor(){
    //this loop will go through each row one by one
    for (let s=0; s<rowNames.length; s++){
        let currentCellColorsArray = [];
        //this loop will continue for each cell in the selected row
        for(let q=0; q<35; q++){
            //selecting cells by their id - row colors by letters, cells by numbers
            let cellInEachRow = document.getElementById(rowNames[s]+q)
            //saving background color of each in a variable
            currentCellColor = cellInEachRow.style.backgroundColor
            //adding the color in the array 
            currentCellColorsArray.push(currentCellColor) 
        }
        // reassigning the colours of the array
        currentCellColorsArray.push(currentCellColorsArray.shift())

        // recolouring our document with the colours in the new array
        for(let f=0; f<35; f++){
            //this loop will continue for each cell in the selected row
            let cellInEachRow = document.getElementById(rowNames[s]+f)
            //selecting cells by their id - row colors by letters, cells by numbers
            cellInEachRow.style.backgroundColor = currentCellColorsArray[f]
            //assigning the new background colors to the cells

        }

    }
    return 1;
}


//this function is triggered when the scroll button is clicked
function startScroll(){
    //it sets the value of scrollStopped to false meaning there will be movement on the screen
    scrollStopped = false;
    //calls the actual function which will move 
    scrollColor()
    return 1;
}

//this function is trigerred when the stop button is clicked 
function stopScroll(){
    //it sets the scrollStopped value to default, that is true
    scrollStopped = true;
    return 1;
}

//this function moves the colors of the cells one to the left until the stop button is pressed
function scrollColor(){
    if (scrollStopped === false) {
    //my rows are named letter wise from a-t
        moveColor()
        setTimeout(scrollColor,400)
    } else {
        ;
    }
    return 1;
}


//this function prints a flower when the flower button is clicked
function flower() {
    //defining variables
    let allFlowerCells = [];
    //There are 35 cells, which are named from 0-34
    let cellNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]
    //assigning set values to store variables as integers
    let randomCellNumber = 99
    let cellTwoNumber = 99
    let cellThreeNumber = 99
    let cellFourNumber = 99

    //generating a random number from the length of the colors array 
    let randomColorNumber =  Math.floor(Math.random() * colors.length);
    //getting the color assigned to that random number (index) in the colors array
    let randomColor = colors[randomColorNumber]


    //generating a random number from the length of the rowNames array
    let randomRowNumber = Math.floor(Math.random() * rowNames.length);
    //getting the row name assigned to that random number (index) in the array
    let randomRow = rowNames[randomRowNumber];

    
    //generating a random number from the length of the cellNumbers array
    randomCellNumber = Math.floor(Math.random() * cellNumbers.length);
    //getting the row name assigned to that random number (index) in the array
    let randomCell = cellNumbers[randomCellNumber];    


    //using the random row and cell to decide our anchor cell which will be the top petal
    let anchorCellID = (randomRow+randomCell)
    //adding the cell id into an array storing all the cells to be colored for the flower
    allFlowerCells.push(anchorCellID);


    //going row wise, the second cell will be the left petal of the flower, so it will be in the row after the anchor cell row
    let cellTwoRowNumber = randomRowNumber+1
    //getting the row name associated to it
    let cellTwoRow = rowNames[cellTwoRowNumber]


    // cell three will be the right petal of the flower so it will be in the same row as the left petal
    let cellThreeRow = cellTwoRow


    //cell four will be the bottom petal of the flower    
    let cellFourRowNumber = randomRowNumber+2;
    //getting the row name associated to it
    let cellFourRow = rowNames[cellFourRowNumber]


    /*there are 20 rows in total and a flower needs 3 rows if the randomRowNumber is >18 the petals of the flower will go out of the page, 
    so I have set the value to <18*/
    if (randomRowNumber<18){
        //cell will enter this if statement if anchor cell is the first or the last cell in the row
        if (randomCellNumber==0 || randomCellNumber==34){
            //if anchor cell is the first cell in the row, the second cell (left petal) will become the last cell in the row (to give a looping effect)
            if  (randomCellNumber==0) {
                //defining the left right and bottom petal and adding them to the array containing all cells to be colored for the flower
                //cel two
                cellTwoNumber = 34
                let cellTwo = cellTwoRow+cellTwoNumber
                allFlowerCells.push(cellTwo);
                //cell three
                cellThreeNumber = 1
                let cellThree = cellThreeRow+cellThreeNumber;
                allFlowerCells.push(cellThree);
                //cell four
                cellFourNumber = 0
                let cellFour = cellFourRow+randomCell;
                allFlowerCells.push(cellFour);
            //if anchor cell is the last cell in the row, the third cell (right petal) will become the first cell in the row (to give a looping effect)
            } else if (randomCellNumber==34) {
                //defining the left right and bottom petal and adding them to the array containing all cells to be colored for the flower
                //cell two
                cellTwoNumber =33
                let cellTwo = cellTwoRow+cellTwoNumber
                allFlowerCells.push(cellTwo);
                //cell three
                cellThreeNumber = 0
                let cellThree = cellThreeRow+cellThreeNumber;
                allFlowerCells.push(cellThree);
                //cell four
                cellFourNumber = 34
                let cellFour = cellFourRow+randomCell;
                allFlowerCells.push(cellFour);
            }
            
        //otherwise cell will enter this else statement
        } else {
            //defining the left right and bottom petal and adding them to the array containing all cells to be colored for the flower
            //cell two
            cellTwoNumber = randomCellNumber-1;
            let cellTwo = cellTwoRow+cellTwoNumber
            allFlowerCells.push(cellTwo);
            //cell three
            cellThreeNumber = randomCellNumber+1;
            let cellThree = cellThreeRow+cellThreeNumber;
            allFlowerCells.push(cellThree);
            //cell four
            let cellFour = cellFourRow+randomCell;
            allFlowerCells.push(cellFour);
        }
        //for each cell stored in the flower cells array, the loop is run and a background color is set 
        for (let k=0; k<allFlowerCells.length; k++){
            cellToBeColored = allFlowerCells[k];
            let flowerCell = document.getElementById(cellToBeColored);
            (flowerCell).style.backgroundColor = (randomColor)
        }
    } else {
        ;
    }
    return 1;
}

