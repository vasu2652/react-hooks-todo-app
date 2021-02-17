import { Button, Container } from '@material-ui/core';
import React from 'react';
import { changeCounter, getCounterValue } from '../store/reducers/counter';
import { connect } from 'react-redux';

const Counter = (props)=>{
    return(
        <Container>
            <Button onClick={()=>props.increment()}>+</Button>
            <div>{props.value}</div>
            <Button onClick={()=>props.decrement()}>-</Button>
        </Container>
    )
}
const mapStateToProps = (state)=>{
    return {
        value: getCounterValue(state)
    }
}
const mapDispatchToProps = (dispatch)=>({
    increment:  ()=>dispatch(changeCounter("increment")),
    decrement: ()=>dispatch(changeCounter("decrement")),
    reset: ()=>dispatch(changeCounter("reset")),
})
const connectToStore = connect(mapStateToProps, mapDispatchToProps);
export default connectToStore(Counter);