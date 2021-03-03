import React from "react";
import ReactDOM from "react-dom";

type OwnProps = {
    node: any,
    color: string
}
type PropsType = {
    allText: Array<string>,
    isInputAvailable: boolean,
    currentLetter: number,
}

export class Portal extends React.Component<PropsType, OwnProps> {
    state: OwnProps = {
        node: (document as any).createElement('div'),
        color: "#aaa"
    }

    componentDidUpdate(prevProps: PropsType) {
        if (prevProps.currentLetter === 0 && this.state.node.id === `form`) {
            this.setState({
                node: document.getElementById(`${this.props.currentLetter}`) || document.createElement('div')
            })
        }
         else this.state.node = document.getElementById(`${this.props.currentLetter}`) || document.createElement('div')
    }

    componentWillUpdate(nextProps: PropsType) {
        if (nextProps.currentLetter === nextProps.allText[0].length - 1) {
            if (document.getElementById("zoom") !== null) {
                document.getElementById("zoom")!.style.transform = "scale(0)"
            }
        }
        if (nextProps.currentLetter !== this.props.currentLetter) {
            this.state.node.style.color = this.state.color
        }
        if ((nextProps.currentLetter === 0) && nextProps.allText[0] !== this.props.allText[0]) {
            if (this.props.allText[0] !== "") {
                for (let step = 0; this.props.allText[0].length - 1 >= step; step++) {
                    document.getElementById(`${step}`)!.style.color = "#000"
                }
            }
            this.state.node = document.getElementById(`form`) || document.createElement('div')
        }

    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.state.node
        );
    }
}