import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";

const Counter = ({counter, inc, dec, res, download}) => {
    return (
        <section className="main">
            <div className="main-block">
                <div className="counter-block">
                    <span className="counter">{counter}</span>
                </div>
                <div className="buttons-block">
                    <button className="plus-btn button" onClick={inc}>
                        <img src="img/Plus.svg" alt="plus" />
                    </button>
                    <button className="minus-btn button" onClick={dec}>
                        <img src="img/Minus.svg" alt="minus" />
                    </button>
                    <button className="reset-btn button" onClick={res}>
                        <img src="img/Reset.svg" alt="reset" />
                    </button>
                </div>
                {/* <div className="extra-buttons-block">
                    <button className="download-btn button" onClick={download}>
                        <img src="img/Download_Icon.svg" alt="download" />
                    </button>
                    <button className="upload-btn button">
                        <img src="img/Upload_Icon.svg" alt="upload" />
                    </button>
                </div> */}
            </div>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        counter: state
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
