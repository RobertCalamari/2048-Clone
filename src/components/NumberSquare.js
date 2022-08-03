import React from "react";

function NumberSquare({number, plain, fadein, movedirection, movespeed}){
    let numberclass = 'number-square visible';
    let plainclass = 'plain-square invisible';
    if(number === 0){
        plain = true
    }
    if(plain===true){
        numberclass = 'number-square invisible';
        plainclass = 'plain-square visible';
    }

    if(fadein===true){
        numberclass = 'number-square visible fade-in';
    }

    number === 2 ? numberclass += ' color-one' : number === 4 ? numberclass += ' color-two' : number === 8 ? numberclass += ' color-three' : number === 16 ? numberclass += ' color-four' : number === 32 ? numberclass += ' color-five' : number === 64 ? numberclass += ' color-six' : number === 128 ? numberclass += ' color-seven' : number === 256 ? numberclass += ' color-eight' : number === 512 ? numberclass += ' color-nine' : number === 1024 ? numberclass += ' color-ten' : number === 2048 ? numberclass += ' color-eleven' : numberclass += '';

    
    if(movedirection === 'null' || movedirection === undefined){
    }else{
        // console.log('we making this move ', movedirection, movespeed);
        numberclass += ' move-' + movedirection + '-' +  movespeed;
    }

    return(
        <>
            <div className={numberclass}>
                
                {number}
            </div>
            <div className={plainclass}>
            </div>
        </>
        
    );
}



export default NumberSquare;