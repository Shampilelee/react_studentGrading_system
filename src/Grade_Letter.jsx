import React from "react";

function GradeLetter(props) {

    let totMark = props.myProp;
    let grade_Letter;

    if ( totMark >= 90) {
        grade_Letter = 'A'
    } else if (totMark >= 80){
        grade_Letter = 'B'
    } else if (totMark >= 70){
        grade_Letter = 'C'
    } else if (totMark >= 50){
        grade_Letter = 'D'
    } else if (totMark < 50){
        grade_Letter = 'F'
    } else {
        grade_Letter = ''
    }

    
    return(
        <div>
            <h1>{grade_Letter}</h1>
        </div>
    );
}

export default GradeLetter;