import React from 'react';
import '../styles/tab.css';
import *as classnames from 'classnames';


function Tab({text, onClick, selected}){
    return(
    <div className="tab-wrapper">
        <div className="tab" onClick={onClick}>
            <p className={classnames('tabText',{activeTab:selected})}>{text}</p>

        </div>
    </div>
    );
}

Tab.defaultProps={
    selected:false
};

export default Tab;