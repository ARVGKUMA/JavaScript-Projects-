// this variable keeps track whose turn it is //
let activePlayer = 'X';
// this array stores an array of moves .we use to determine the win conditions//
let selectedSquares = [];
// this function is for for placing x or o in square  //
function placeXOrO(squareNumber) {
    //this condition ensures the squares has not been selected yet //
    //the some() method is used to check the each element of the selected square array to see f it contains square number being clicked on//
    if(!selectedSquares.some(element => element.includes(squareNumber))){
        // this variable retrieves the element id that was clicked.//
        let select = document.getElementById(squareNumber);
        //this checks whose turn it is //
        if(activePlayer === 'X') {
            //if active player is equal to X then x.png is placed in html//
            select.style.backgroundImage = 'url("images/x.png")';
            // active player may be x or o so if not x the it must be o
        } else {
            //if active player is equal to o then o.png is placed in html//
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //square number and active players are concatenated togehther and added to an array//

        selectedSquares.push(squareNumber+activePlayer);

        ///this call to check for any win conditions//
        function checkWinconditions(){
            if (arrayIncludes('0x', '1X', '2X')) {drawwinline(50,100,558,100)}
            else if (arrayIncludes('3X', '4X', '5X')) {drawwinline(50,304,558,304)}

            else if (arrayIncludes('6X', '7X', '8X')) {drawwinline(50,508,558,508)}
            else if (arrayIncludes('0X', '3X', '6X')) {drawwinline(100,50,100,558)}
            else if (arrayIncludes('1X', '4X', '7X')) {drawwinline(304,50,304,558)}
            else if (arrayIncludes('2X', '5X', '8X')) {drawwinline(508,50,508,558)}
            else if (arrayIncludes('6X', '4X', '2X')) {drawwinline(100,508,510,90)}
            else if (arrayIncludes('0X', '4X', '8X')) {drawwinline(100,100,520,520)}

            else if (arrayIncludes('0O', '1O', '2O')) {drawwinline(50,100,558,100)}
            else if (arrayIncludes('3O', '4X', '5O')) {drawwinline(50,304,558,304)}
            else if (arrayIncludes('6O', '7O', '8O')) {drawwinline(50,508,558,508)}
            else if (arrayIncludes('0O', '3O', '6O')) {drawwinline(100,50,100,558)}
            else if (arrayIncludes('1O', '4O', '7O')) {drawwinline(304,50,304,558)}
            else if (arrayIncludes('2O', '5O', '8O')) {drawwinline(508,50,508,558)}
            else if (arrayIncludes('6O', '4O', '2O')) {drawwinline(100,508,510,90)}
            else if (arrayIncludes('0O', '4O', '8O')) {drawwinline(100,100,520,520)}

            else if (selectedSquares.length>=9) {
                audio('./media/tie.mp3');

                setTimeout(function() {resetgame ();},500);
                }

            function arrayIncludes(squareA, squareB, squareC) {
                const a = selectedSquares.includes(squareA);
                const b = selectedSquares.includes(squareB);
                const c = selectedSquares.includes(squareC);
                if (a===true && b=== true  && c===true) {return true;}
            }
        }

        

        checkWinconditions();
        ///this is for changing active player//
         if (activePlayer === 'X') {

            activePlayer='o';
         }else {
            //change active player to X//
            activePlayer ='X'
         }

         //this function plays placement sound//


         audio('./media/place.mp3');


         //this condition checks if it is the computers turn//

         if (activePlayer === '0') {
            disableclick();
            setTimeout(function () {computersTurn();},1000);
         }
         return true;

    }
    function computersTurn(){
        let sucess = false;
        let pickAsquare;
        while(!sucess){
            pickAsquare =String(Math.floor(Math.randon()*9));
            if (placeXOrO(pickAsquare)){
                placeXOrO(pickAsquare);
                sucess =true;
            };
            
        }
        
    }
    function disableclick() {
        body.style.pointerEvents = 'none';
        setTimeout(function (){body.style.pointerEvents = 'auto';},1000);
    }

    function audio(audioURL) {
        let audio = new Audio(audioURL);
        audio.play();
    }
}

function drawWinline(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getcontext('2d');

    let  x1 = coordX1,

         y1 = coordY1,

         x2 = coordX2,


         y2 = coordY2,


         x = x1 ,
         y = y1 ;

         function animateLineDrawing(){
            const animationLoop = requestAnimationFrame(animateLineDrawing);
            c.clearRect(0, 0, 608,608);
            c.beginpath();
            c.moveto(x1,y1);
            c.lineto(x,y);

            c.linewidth = 10;
            c.strokeStyle = 'rgba(70, 255, 33, .8)';

            c.stroke();

            if (x1 <= x2 && y1 <= y2 ) {
                if (x < x2) {x += 10;}

                if (y < y2) {y += 10;}
                if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop);}
            }

            if (x1 <= x2 &&  y1 >= y2 ) {
                if (x < x2) {x += 10;}
                if (y < y2) {y -= 10;}
                if (x >= x2 && y <= y2 ) {cancelAnimationFrame(animationLoop);}
            }
        }
        function clear(){
            const animationLoop = requestAnimationFrame(clear);
            c.clearRect(0, 0, 608, 608);
            cancelAnimationFrame(animationLoop);
        }
        disableclick();
        audio('./media/winGame.mp3');
        animateLineDrawing();
        setTimeout(function() {clear(); resetGame();},1000);
        
}

function resetGame(){
    for(let i =0; i<9; i++){
        let square =document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares =[];
}


