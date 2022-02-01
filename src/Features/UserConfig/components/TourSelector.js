import styles from "../UserConfig.module.css"
import React, { Component } from 'react';


function TourSelector({ tourList }) {
    return (
        <select id="tours">
            {tourList.map((tour) => {
                return (
                    <option value={tour.Name}></option>
                )
            })
            }
        </select>
    );
}

export default TourSelector