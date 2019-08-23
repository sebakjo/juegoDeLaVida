import React from 'react';
import Box from './box'
import './stylesheet.css'

export default ({ cols, rows, gridFull, selectBox }) => {
    const width = cols * 14
    var rowsArr = [];
    var boxClass = "";
    for (let i = 0; i < rows; i++) {
        for (let x = 0; x < cols; x++) {
            let boxId = i + "_" + x
            boxClass = gridFull[i][x] ? "box on" : "box off"
            rowsArr.push(<Box
                boxClass={boxClass}
                key={boxId}
                boxId={boxId}
                row={i}
                col={x}
                selectBox={selectBox}
            />)
        }
    }

    return (
        <div className="grid" style={{ width: width }}>
            {rowsArr}
        </div>
    );
}


