//CLass Component
class Counter extends React.Component{
    constructor(props) {
        super(props);

        //State Declaration
        this.state = {counter: 0 };

        console.log("Ini dari constructor()");
    }

    //Arrow Function
    handleButtonClick = (e) => {
        let val = parseInt(e.target.getAttribute("val"));

        //Change State Value
        this.setState({ counter: this.state.counter + val})
    }

    render () {
        console.log("ini dari render()");
        return (
            <div>
                <h1> {this.state.counter} </h1>
                <button val="+1" onClick={this.handleButtonClick}>Counter +1 </button>
                <button val="-1" onClick={this.handleButtonClick}>Counter -1 </button>
            </div>
        )
    }

    ComponentDidMount = () => {
        console.log("Ini dari componentDidMount");
    }

    ComponentDidUpdate = () => {
        console.log("Ini dari componentDidUpdate");
    }

    ComponentDidUnmount = () => {
        console.log("Ini dari componentDidUnmount");
    }
}

//Class Component
class MyApp extends React.Component {
    constructor(props) {
        super(props);

        //State Declaration
        this.state ={ showCounter: false };
    }

    handleButtonClick = () => {
        //Change State Value
        this.setState({
            showCounter: !this.state.showCounter
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>
                    {this.state.showCounter ? "Hide Counter" : "Show Counter"}
                </button>
                {this.state.showCounter && <Counter/>}
            </div>

        )
    }
}

const myElement = <MyApp />;

ReactDOM.createRoot(document.getElementById('root')).render(myElement);