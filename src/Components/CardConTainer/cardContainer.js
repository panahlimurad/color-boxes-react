import React from "react";
import style from "./cardContainer.module.css"

export class CardContainer extends React.Component{

    constructor() {
        super()
        this.state = {
            colors: ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'pink', 'gray', 'brown', 'teal', 'navy', 'maroon', 'olive', 'lime', 'silver', 'black']
        }

        this.handleClick = this.handleClick.bind(this)

    }


    handleClick(index) {
        const { colors } = this.state

        const newColors = [...colors]

        const randomIndex = Math.floor(Math.random() * colors.length)

        newColors[index] = colors[randomIndex]

        this.setState({colors:newColors})
    }



    render() {

        const {colors} = this.state

        return (
            <div className={style.cardContainer}>
            {colors.map((color, index) => (
              <div
                key={index}
                style={{
                width: "100px",
                height: "100px",
                backgroundColor: color,
                margin: "5px",
                cursor: "pointer",
                }}
                onClick={() => this.handleClick(index)}
              >
                {color}
              </div>
            ))}
          </div>
        );
    }
}