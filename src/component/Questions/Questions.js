import React from 'react';

const Questions = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h2>Answer to questions</h2>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <strong>Props VS State</strong>
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Data are passed from one component to another using props. States are data that change within the same component. Props are immutable or Read-only. They can not be changed. But states can change depending on event listeners or it can be overwritten explicitly. </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <strong>How useState Works</strong>
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">useState is a react hook, a special function that implements some react functionalites and provides optimization. useState is used to detect changes in a react component. It returns two things - a state variable and a dispatcher function. The dispatcher function is asynchronous in nature. The initial value passed in useState is assigned to the variable. Later when the state changes, the value is passed through the dispather function and it sets the new value for the variable. If state does not change, the variable retains its value. The function of the dispatcher is abstract from the user. This is how useState works.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;