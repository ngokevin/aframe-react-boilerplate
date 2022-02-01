import { useEffect, useState } from "react";
import React, { Component } from 'react';
import TourSelector from "./components/TourSelector";
import styles from "./UserConfig.module.css";



function UserConfig() {

  const tours = [
    { ID: "1", Name: "Headington", Location: "Headington Campus" },
    { ID: "2", Name: "Wheatly", Location: "Wheatly Campus" }
  ]
  return (
    <div className={styles["UserConfig"]}>
      <h1>Test</h1>
      <TourSelector tourList={tours}></TourSelector>
    </div>
  );
}

export default UserConfig;
