import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import { updateTime } from '../actions';

class Clock extends Component {
    componentWillMount() {
        setInterval(this.props.updateTime, 1000);
    }

    render() {
        return (
            <div className="text-center mt-5">
                <h1>{this.props.time}</h1>
            </div>
        )
    }
}

const mapStateTopProps = (state) => {
    return {
        time: state.clock.time
    }
}

export default connect(mapStateTopProps, { updateTime })(Clock);