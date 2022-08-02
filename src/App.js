import './App.css';
import { useEffect, useState } from 'react';
import NumberSquare from './components/NumberSquare';

function App() {

  const [squares, setSquares] = useState([]);
  const [newNumber, setNewNumber] = useState(20);
  const [squaresNotUsed, setSquaresNotUsed] = useState([]);
  const [squaresMovement, setSquaresMovement] = useState([]);

  useEffect(() => {


    let locationAndNumber = getNumbers(true);
    let locationAndNumber2 = getNumbers(true);
    while(locationAndNumber[0] === locationAndNumber2[0]){
      locationAndNumber2 = getNumbers(true);
    }
    let begArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let usedArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    setSquaresMovement([['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],]);
    // let begArr = [2,0,0,2,2,0,0,2,2,0,0,0,2,0,0,4];
    // let usedArr = [1,2,5,6,9,10,11,13,14];
    begArr[locationAndNumber[0]] = locationAndNumber[1];
    begArr[locationAndNumber2[0]] = locationAndNumber2[1];
    usedArr = removeFromArray(usedArr, locationAndNumber[0]);
    usedArr = removeFromArray(usedArr, locationAndNumber2[0]);
    

    setSquares(begArr);
    setSquaresNotUsed(usedArr);
    document.addEventListener('keydown', detectKeyDown, true);
  }, []);

  const detectKeyDown = (e) => {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
    console.log(squares);
    if(e.key === "ArrowUp"){
      moveUp();
    }else if(e.key === "ArrowDown"){
      moveDown();
    }else if(e.key === "ArrowLeft"){
      moveLeft();
    }else if(e.key === "ArrowRight"){
      moveRight();
    }
    // console.log("Clicked Key: ", e.key);
  }

  useEffect(() => {
  }, [squares]);

  useEffect(() => {
      console.log(squaresMovement);
  }, [squaresMovement]);

  function moveUp(){
    console.log('moved up-------------------------------------------------------------------------------------------------------');
    
    let temparr = [];
    let tempUsedArr = [];
    setSquaresMovement([['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],]);
    let tempSquareMovArr = [];

    for(let i in squaresMovement){
      tempSquareMovArr[i] = squaresMovement[i];
    }
    for(let i in squares){
      temparr[i] = [squares[i],0];
    }
    for(let i in squaresNotUsed){
      tempUsedArr[i] = squaresNotUsed[i];
    }
    let cont =  false;
    for(let i in temparr){
      if(temparr[i][0] === 0){
      }else{
        if((i-4)<0){
        }else{
          if(temparr[i-4][0] === 0){
            if((i-8)<0){
              temparr[i-4][0] = temparr[i][0];
              temparr[i][0] = 0;
              temparr[i][1] = 0;
              cont = true;
              tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'up', 'one');
              let usedArr = removeFromArray(squaresNotUsed, i-4);
              usedArr.push(parseInt(i));
              setSquaresNotUsed(usedArr);
            }else{
              if(temparr[i-8][0] === 0){
                if((i-12)<0){
                  temparr[i-8][0] = temparr[i][0];
                  temparr[i][0] = 0;
                  temparr[i][1] = 0;
                  tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'up', 'two');
                  cont = true;
                  let usedArr = removeFromArray(squaresNotUsed, i-8);
                  usedArr.push(parseInt(i));
                  setSquaresNotUsed(usedArr);
                }else{
                  if(temparr[i-12][0] === 0){
                    temparr[i-12][0] = temparr[i][0];
                    temparr[i][0] = 0;
                    temparr[i][1] = 0;
                    cont = true;
                    tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'up', 'three');
                    let usedArr = removeFromArray(squaresNotUsed, i-12);
                    usedArr.push(parseInt(i));
                    setSquaresNotUsed(usedArr);
                  }else if(temparr[i-12][0] === temparr[i][0]){
                    if(temparr[i-12][1] === 1){
                      temparr[i-8][0] = temparr[i][0];
                      temparr[i][0] = 0;
                      temparr[i][1] = 0;
                      tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'up', 'two');
                      cont = true;
                      let usedArr = removeFromArray(squaresNotUsed, i-8);
                      usedArr.push(parseInt(i));
                      setSquaresNotUsed(usedArr);
                    }else{
                      temparr[i-12][0] = temparr[i][0]+temparr[i][0];
                      temparr[i][0] = 0;
                      temparr[i][1] = 0;
                      temparr[i-12][1] = 1;
                      tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'up', 'three');
                      cont = true;
                      let usedArr = squaresNotUsed;
                      usedArr.push(parseInt(i));
                      setSquaresNotUsed(usedArr);
                    }
                  }else{
                    temparr[i-8][0] = temparr[i][0];
                    temparr[i][0] = 0;
                    temparr[i][1] = 0;
                    cont = true;
                    tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'up', 'two');
                    let usedArr = removeFromArray(squaresNotUsed, i-8);
                    usedArr.push(parseInt(i));
                    setSquaresNotUsed(usedArr);
                  }
                }
              }else if(temparr[i-8][0] === temparr[i][0]){
                if(temparr[i-8][1] === 1){
                  temparr[i-4][0] = temparr[i][0];
                  temparr[i][0] = 0;
                  temparr[i][1] = 0;
                  tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'up', 'two');
                  cont = true;
                  let usedArr = removeFromArray(squaresNotUsed, i-4);
                  usedArr.push(parseInt(i));
                  setSquaresNotUsed(usedArr);
                }else{
                  temparr[i-8][0] = temparr[i][0]+temparr[i][0];
                  temparr[i][0] = 0;
                  temparr[i][1] = 0;
                  temparr[i-8][1] = 1;
                  cont = true;
                  tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'up', 'two');
                  let usedArr = squaresNotUsed;
                  usedArr.push(parseInt(i));
                  setSquaresNotUsed(usedArr);
                }
              }else{
                temparr[i-4][0] = temparr[i][0];
                temparr[i][0] = 0;
                temparr[i][1] = 0;
                cont = true;
                tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'up', 'one');
                let usedArr = removeFromArray(squaresNotUsed, i-4);
                usedArr.push(parseInt(i));
                setSquaresNotUsed(usedArr);
              }
            }
          }else if(temparr[i-4][0] === temparr[i][0]){
            if(temparr[i-4][1] === 1){
            }else{
              temparr[i-4][0] = temparr[i][0]+temparr[i][0];
              temparr[i][0] = 0;
              temparr[i][1] = 0;
              temparr[i-4][1] = 1;
              tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'up', 'one');
              cont = true;
              let usedArr = removeFromArray(squaresNotUsed, i-4);
              usedArr.push(parseInt(i));
              setSquaresNotUsed(usedArr);
            }
          }else{
          }
        }
      }
    }

    if(cont === false){
      setSquaresNotUsed(tempUsedArr);
      if(squaresNotUsed.length === 0){
        gameOver();
      }
    }else{
      moveSquares(tempSquareMovArr, temparr);
    } 
  }

  function moveRight(){
    console.log('moved right-------------------------------------------------------------------------------------------------------');
    
    let temparr = [];
    let tempUsedArr = [];    
    setSquaresMovement([['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],]);
    let tempSquareMovArr = [];

    for(let i in squaresMovement){
      tempSquareMovArr[i] = squaresMovement[i];
    }
    for(let i in squares){
      temparr[i] = [squares[i],0];
    }
    for(let i in squaresNotUsed){
      tempUsedArr[i] = squaresNotUsed[i];
    }
    let cont =  false;
    for(let i in temparr){
      i = temparr.length-i-1;
      if(temparr[i][0] === 0){
      }else{
        if( ((i>=0 && i<=3) && (i+1)>3) || ((i>=4 && i<=7) && (i+1)>7) || ((i>=8 && i<=11) && (i+1)>11)  || ((i>=12 && i<=15) && (i+1)>15)){
        }else{
          if(temparr[i+1][0] === 0){
            if( ((i>=0 && i<=3) && (i+2)>3) || ((i>=4 && i<=7) && (i+2)>7) || ((i>=8 && i<=11) && (i+2)>11)  || ((i>=12 && i<=15) && (i+2)>15)){
              temparr[i+1][0] = temparr[i][0];
              temparr[i][0] = 0;
              temparr[i][1] = 0;
              cont = true;
              tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'right', 'one');
              let usedArr = removeFromArray(squaresNotUsed, i+1);
              usedArr.push(parseInt(i));
              setSquaresNotUsed(usedArr);
            }else{
              if(temparr[i+2][0] === 0){
                if( ((i>=0 && i<=3) && (i+3)>3) || ((i>=4 && i<=7) && (i+3)>7) || ((i>=8 && i<=11) && (i+3)>11)  || ((i>=12 && i<=15) && (i+3)>15)){
                  temparr[i+2][0] = temparr[i][0];
                  temparr[i][0] = 0;
                  temparr[i][1] = 0;
                  cont = true;
                  tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'right', 'two');
                  let usedArr = removeFromArray(squaresNotUsed, i+2);
                  usedArr.push(parseInt(i));
                  setSquaresNotUsed(usedArr);
                }else{
                  if(temparr[i+3][0] === 0){
                    temparr[i+3][0] = temparr[i][0];
                    temparr[i][0] = 0;
                    temparr[i][1] = 0;
                    cont = true;
                    tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'right', 'three');
                    let usedArr = removeFromArray(squaresNotUsed, i+3);
                    usedArr.push(parseInt(i));
                    setSquaresNotUsed(usedArr);
                  }else if(temparr[i+3][0] === temparr[i][0]){
                    if(temparr[i+3][1] === 1){
                      temparr[i+2][0] = temparr[i][0];
                      temparr[i][0] = 0;
                      temparr[i][1] = 0;
                      cont = true;
                      tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'right', 'two');
                      let usedArr = removeFromArray(squaresNotUsed, i+2);
                      usedArr.push(parseInt(i));
                      setSquaresNotUsed(usedArr);
                    }else{
                      temparr[i+3][0] = temparr[i][0]+temparr[i][0];
                      temparr[i][0] = 0;
                      temparr[i][1] = 0;
                      temparr[i+3][1] = 1;
                      cont = true;
                      tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'right', 'three');
                      let usedArr = squaresNotUsed;
                      usedArr.push(parseInt(i));
                      setSquaresNotUsed(usedArr);
                    }
                  }else{
                    temparr[i+2][0] = temparr[i][0];
                    temparr[i][0] = 0;
                    temparr[i][1] = 0;
                    cont = true;
                    tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'right', 'two');
                    let usedArr = removeFromArray(squaresNotUsed, i+2);
                    usedArr.push(parseInt(i));
                    setSquaresNotUsed(usedArr);
                  }
                }
              }else if(temparr[i+2][0] === temparr[i][0]){
                if(temparr[i+2][1] === 1){
                  temparr[i+1][0] = temparr[i][0];
                  temparr[i][0] = 0;
                  temparr[i][1] = 0;
                  cont = true;
                  tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'right', 'one');
                  let usedArr = removeFromArray(squaresNotUsed, i+1);
                  usedArr.push(parseInt(i));
                  setSquaresNotUsed(usedArr);
                }else{
                  temparr[i+2][0] = temparr[i][0]+temparr[i][0];
                  temparr[i][0] = 0;
                  temparr[i][1] = 0;
                  temparr[i+2][1] = 1;
                  tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'right', 'two');
                  cont = true;
                  let usedArr = squaresNotUsed;
                  usedArr.push(parseInt(i));
                  setSquaresNotUsed(usedArr);
                }
              }else{
                temparr[i+1][0] = temparr[i][0];
                temparr[i][0] = 0;
                temparr[i][1] = 0;
                cont = true;
                tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'right', 'one');
                let usedArr = removeFromArray(squaresNotUsed, i+1);
                usedArr.push(parseInt(i));
                setSquaresNotUsed(usedArr);
              }
            }
          }else if(temparr[i+1][0] === temparr[i][0]){
            if(temparr[i+1][1] === 1){
            }else{
              temparr[i+1][0] = temparr[i][0]+temparr[i][0];
              temparr[i][0] = 0;
              temparr[i][1] = 0;
              temparr[i+1][1] = 1;
              cont = true;
              tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'right', 'one');
              let usedArr = removeFromArray(squaresNotUsed, i+1);
              usedArr.push(parseInt(i));
              setSquaresNotUsed(usedArr);
            }
          }else{
          }
        }
      }
    }

    if(cont === false){
      setSquaresNotUsed(tempUsedArr);
      if(squaresNotUsed.length === 0){
        gameOver();
      }
    }else{
      moveSquares(tempSquareMovArr, temparr);
    } 
  }

  function moveDown(){
    console.log('moved down-------------------------------------------------------------------------------------------------------');
    
    let temparr = [];
    let tempUsedArr = [];
    let cont =  false;    
    setSquaresMovement([['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],]);
    let tempSquareMovArr = [];

    for(let i in squaresMovement){
      tempSquareMovArr[i] = squaresMovement[i];
    }
    for(let i in squares){
      temparr[i] = [squares[i],0];
    }
    for(let i in squaresNotUsed){
      tempUsedArr[i] = squaresNotUsed[i];
    }
    for(let i in temparr){
      i = temparr.length-i-1;
      if(temparr[i][0] === 0){
      }else{
        if((i+4)>15){
        }else{
          if(temparr[i+4][0] === 0){
            if((i+8)>15){
              temparr[i+4][0] = temparr[i][0];
              temparr[i][0] = 0;
              temparr[i][1] = 0;
              cont = true;
              tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'down', 'one');
              let usedArr = removeFromArray(squaresNotUsed, i+4);
              usedArr.push(parseInt(i));
              setSquaresNotUsed(usedArr);
            }else{
              if(temparr[i+8][0] === 0){
                if((i+12)>15){
                  temparr[i+8][0] = temparr[i][0];
                  temparr[i][0] = 0;
                  temparr[i][1] = 0;
                  cont = true;
                  tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'down', 'two');
                  let usedArr = removeFromArray(squaresNotUsed, i+8);
                  usedArr.push(parseInt(i));
                  setSquaresNotUsed(usedArr);
                }else{
                  if(temparr[i+12][0] === 0){
                    temparr[i+12][0] = temparr[i][0];
                    temparr[i][0] = 0;
                    temparr[i][1] = 0;
                    cont = true;
                    tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'down', 'three');
                    let usedArr = removeFromArray(squaresNotUsed, i+12);
                    usedArr.push(parseInt(i));
                    setSquaresNotUsed(usedArr);
                  }else if(temparr[i+12][0] === temparr[i][0]){
                    if(temparr[i+12][1] === 1){
                      temparr[i+8][0] = temparr[i][0];
                      temparr[i][0] = 0;
                      temparr[i][1] = 0;
                      cont = true;
                      tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'down', 'two');
                      let usedArr = removeFromArray(squaresNotUsed, i+8);
                      usedArr.push(parseInt(i));
                      setSquaresNotUsed(usedArr);
                    }else{
                      temparr[i+12][0] = temparr[i][0]+temparr[i][0];
                      temparr[i][0] = 0;
                      temparr[i][1] = 0;
                      temparr[i+12][1] = 1;
                      cont = true;
                      tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'down', 'three');
                      let usedArr = squaresNotUsed;
                      usedArr.push(parseInt(i));
                      setSquaresNotUsed(usedArr);
                    }
                  }else{
                    temparr[i+8][0] = temparr[i][0];
                    temparr[i][0] = 0;
                    temparr[i][1] = 0;
                    cont = true;
                    tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'down', 'two');
                    let usedArr = removeFromArray(squaresNotUsed, i+8);
                    usedArr.push(parseInt(i));
                    setSquaresNotUsed(usedArr);
                  }
                }
              }else if(temparr[i+8][0] === temparr[i][0]){
                if(temparr[i+8][1] === 1){
                  temparr[i+4][0] = temparr[i][0];
                  temparr[i][0] = 0;
                  temparr[i][1] = 0;
                  cont = true;
                  tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'down', 'one');
                  let usedArr = removeFromArray(squaresNotUsed, i+4);
                  usedArr.push(parseInt(i));
                  setSquaresNotUsed(usedArr);
                }else{
                  temparr[i+8][0] = temparr[i][0]+temparr[i][0];
                  temparr[i][0] = 0;
                  temparr[i][1] = 0;
                  temparr[i+8][1] = 1;
                  cont = true;
                  tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'down', 'two');
                  let usedArr = squaresNotUsed;
                  usedArr.push(parseInt(i));
                  setSquaresNotUsed(usedArr);
                }
              }else{
                temparr[i+4][0] = temparr[i][0];
                temparr[i][0] = 0;
                temparr[i][1] = 0;
                cont = true;
                tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'down', 'one');
                let usedArr = removeFromArray(squaresNotUsed, i+4);
                usedArr.push(parseInt(i));
                setSquaresNotUsed(usedArr);
              }
            }
          }else if(temparr[i+4][0] === temparr[i][0]){
            if(temparr[i+4][1] === 1){
            }else{
              temparr[i+4][0] = temparr[i][0]+temparr[i][0];
              temparr[i][0] = 0;
              temparr[i][1] = 0;
              temparr[i+4][1] = 1;
              cont = true;
              tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'down', 'one');
              let usedArr = removeFromArray(squaresNotUsed, i+4);
              usedArr.push(parseInt(i));
              setSquaresNotUsed(usedArr);
            }
          }else{
          }
        }
      }
    }

    if(cont === false){
      setSquaresNotUsed(tempUsedArr);
      if(squaresNotUsed.length === 0){
        gameOver();
      }
    }else{
      moveSquares(tempSquareMovArr, temparr);
    } 
  }

  function moveLeft(){
    console.log('moved left-------------------------------------------------------------------------------------------------------');
    
    let temparr = [];
    let tempUsedArr = [];    
    setSquaresMovement([['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],]);
    let tempSquareMovArr = [];

    for(let i in squaresMovement){
      tempSquareMovArr[i] = squaresMovement[i];
    }
    for(let i in squares){
      temparr[i] = [squares[i],0];
    }
    for(let i in squaresNotUsed){
      tempUsedArr[i] = squaresNotUsed[i];
    }
    let cont =  false;
    for(let i in temparr){
      if(temparr[i][0] === 0){
      }else{
        if( ((i>=0 && i<=3) && (i-1)<0) || ((i>=4 && i<=7) && (i-1)<4) || ((i>=8 && i<=11) && (i-1)<8)  || ((i>=12 && i<=15) && (i-1)<12)){
        }else{
          if(temparr[i-1][0] === 0){
            if( ((i>=0 && i<=3) && (i-2)<0) || ((i>=4 && i<=7) && (i-2)<4) || ((i>=8 && i<=11) && (i-2)<8)  || ((i>=12 && i<=15) && (i-2)<12)){
              temparr[i-1][0] = temparr[i][0];
              temparr[i][0] = 0;
              temparr[i][1] = 0;
              cont = true;
              tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'left', 'one');
              let usedArr = removeFromArray(squaresNotUsed, i-1);
              usedArr.push(parseInt(i));
              setSquaresNotUsed(usedArr);
            }else{
              if(temparr[i-2][0] === 0){
                if( ((i>=0 && i<=3) && (i-3)<0) || ((i>=4 && i<=7) && (i-3)<4) || ((i>=8 && i<=11) && (i-3)<8)  || ((i>=12 && i<=15) && (i-3)<12)){
                  temparr[i-2][0] = temparr[i][0];
                  temparr[i][0] = 0;
                  temparr[i][1] = 0;
                  cont = true;
                  tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'left', 'two');
                  let usedArr = removeFromArray(squaresNotUsed, i-2);
                  usedArr.push(parseInt(i));
                  setSquaresNotUsed(usedArr);
                }else{
                  if(temparr[i-3][0] === 0){
                    temparr[i-3][0] = temparr[i][0];
                    temparr[i][0] = 0;
                    temparr[i][1] = 0;
                    cont = true;
                    tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'left', 'three');
                    let usedArr = removeFromArray(squaresNotUsed, i-3);
                    usedArr.push(parseInt(i));
                    setSquaresNotUsed(usedArr);
                  }else if(temparr[i-3][0] === temparr[i][0]){
                    if(temparr[i-3][1] === 1){
                      temparr[i-2][0] = temparr[i][0];
                      temparr[i][0] = 0;
                      temparr[i][1] = 0;
                      cont = true;
                      tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'left', 'two');
                      let usedArr = removeFromArray(squaresNotUsed, i-2);
                      usedArr.push(parseInt(i));
                      setSquaresNotUsed(usedArr);
                    }else{
                      temparr[i-3][0] = temparr[i][0]+temparr[i][0];
                      temparr[i][0] = 0;
                      temparr[i][1] = 0;
                      temparr[i-3][1] = 1;
                      cont = true;
                      tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'left', 'three');
                      let usedArr = squaresNotUsed;
                      usedArr.push(parseInt(i));
                      setSquaresNotUsed(usedArr);
                    }
                  }else{
                    temparr[i-2][0] = temparr[i][0];
                    temparr[i][0] = 0;
                    temparr[i][1] = 0;
                    cont = true;
                    tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'left', 'two');
                    let usedArr = removeFromArray(squaresNotUsed, i-2);
                    usedArr.push(parseInt(i));
                    setSquaresNotUsed(usedArr);
                  }
                }
              }else if(temparr[i-2][0] === temparr[i][0]){
                if(temparr[i-2][1] === 1){
                  temparr[i-1][0] = temparr[i][0];
                  temparr[i][0] = 0;
                  temparr[i][1] = 0;
                  cont = true;
                  tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'left', 'one');
                  let usedArr = removeFromArray(squaresNotUsed, i-1);
                  usedArr.push(parseInt(i));
                  setSquaresNotUsed(usedArr);
                }else{
                  temparr[i-2][0] = temparr[i][0]+temparr[i][0];
                  temparr[i][0] = 0;
                  temparr[i][1] = 0;
                  temparr[i-2][1] = 1;
                  cont = true;
                  tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'left', 'two');
                  let usedArr = squaresNotUsed;
                  usedArr.push(parseInt(i));
                  setSquaresNotUsed(usedArr);
                }
              }else{
                temparr[i-1][0] = temparr[i][0];
                temparr[i][0] = 0;
                temparr[i][1] = 0;
                cont = true;
                tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'left', 'one');
                let usedArr = removeFromArray(squaresNotUsed, i-1);
                usedArr.push(parseInt(i));
                setSquaresNotUsed(usedArr);
              }
            }
          }else if(temparr[i-1][0] === temparr[i][0]){
            if(temparr[i-1][1] === 1){
            }else{
              temparr[i-1][0] = temparr[i][0]+temparr[i][0];
              temparr[i][0] = 0;
              temparr[i][1] = 0;
              temparr[i-1][1] = 1;
              cont = true;
              tempSquareMovArr = setMoveArray(tempSquareMovArr, i, 'left', 'one');
              let usedArr = removeFromArray(squaresNotUsed, i-1);
              usedArr.push(parseInt(i));
              setSquaresNotUsed(usedArr);
            }
          }else{
          }
        }
      }
    }

    if(cont === false){
      setSquaresNotUsed(tempUsedArr);
      if(squaresNotUsed.length === 0){
        gameOver();
      }
    }else{
      moveSquares(tempSquareMovArr, temparr);
    } 
  }

  function gameOver(){
    console.log('<div style="font-size:50px;">GAME OVER!</div>')
  }


  function moveSquares(tempSquareMovArr, temparr){
    setSquaresMovement(tempSquareMovArr);  
    setTimeout(function() {
      let newnumb =  newNumbers();
      let usedArr = removeFromArray(squaresNotUsed, newnumb[0]);
      setSquaresNotUsed(usedArr);
      temparr[newnumb[0]] = [newnumb[1],0];
      setNewNumber(newnumb[0]);
  
      for(let i in squares){
        temparr[i] = temparr[i][0];
      }    
      setSquaresMovement([['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],['null', 'null'],]);
      setSquares(temparr);
    }
      , 300);    
  }

  function setMoveArray(arr, location, movement, speed){
    
    arr[location] = [movement, speed];
    //setSquaresMovement(arr);
    return arr;
  }

  function removeFromArray(arr, number){
    const index = arr.indexOf(number);
    if (index > -1) { 
      arr.splice(index, 1); 
    }
    return arr;
  }

  

  function getNumbers(isStart){
    let num1 = Math.floor(Math.random() * 10)+1;
    let location1 = 0;
    isStart ? location1 = Math.floor(Math.random() * 16) : location1 = squaresNotUsed[Math.floor(Math.random() * squaresNotUsed.length)];
    num1 > 7 ? num1 = 4 : num1 = 2;
    return([location1, num1]);
  }

  function newNumbers(){
    let locationAndNumber = getNumbers(false);
    return locationAndNumber;

  }

  return (
    <div className="App">

      <h1>2048 Clone</h1>

      <div className='boards-container'>
        <div className='board'>
          { 
            squares.map((row, i) => { 
                return <NumberSquare key={i} number={row} plain={true} />; 
            })      
          }
        </div>
        <div className='board blank'>
          {  
            squares.map((row, i) => { 
                return <NumberSquare key={i} number={row} movedirection={squaresMovement[i][0]} movespeed={squaresMovement[i][1]} fadein={i===newNumber ? true : false}  />; 
            }) 
          }
        </div>

      </div>
      

      
      


      <div className='button-wrapper' >
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div className='main-button' onClick={() => moveUp()}>  	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V6M5 12l7-7 7 7"/></svg> </div>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div className='main-button' onClick={() => moveLeft()}>  	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg> </div>
          <div className='main-button' onClick={() => moveDown()} > 	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v13M5 12l7 7 7-7"/></svg> </div>
          <div className='main-button' onClick={() => moveRight()} >  	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg> </div>
        </div>
      </div>

      

    </div>
  );
}

export default App;
