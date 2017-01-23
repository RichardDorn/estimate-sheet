import React from "react";
import styles from "../styles";

function MaterialItem(props) {
    return (
        <div className="row" style={styles.space}>    
            {props.children}
        </div>
        );
};

module.exports = MaterialItem;