import React from 'react';

type ClockState = {
    time: Date
}

type AcceptedPops = {
    testProp: string,
    optionalProp?: string,
}

                                //@ 1    // 2 
class Clock extends React.Component<AcceptedPops, ClockState> { //@ 1. Props passed to component 2. State passed to component
    constructor(props: AcceptedPops){
        super(props)
        this.state = {
            time: new Date()
        }
    }

    tick() {
        this.setState({
            time: new Date()
        })
    };

    // componentWillMount() {
    //     this.tick();
    // };

    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }

    render(){
        return(
            <div>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
                <p>{this.props.testProp}</p>
                <p>{this.props.optionalProp}</p>
            </div>
        )
    }
}

export default Clock;

//@ CURRENTLY TO START THE APP --> START APP --> CHANGE JSX FLAG TO REACT --> OPEN ANOTHER TERMINAL WINDOW FOR PROJECT AND RUN NPM UPDATE