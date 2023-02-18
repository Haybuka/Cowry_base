import React, { useEffect, useState } from "react";
import styles from "../../styles/skeleton.module.css";

const SkeletonElement = ({ type }) => {
  const handleType = (type) => {
    switch (type) {
      case "title":
        return <div className={`${styles.skeleton} ${styles.title}`}></div>;
      case "text":
        return <div className={`${styles.skeleton} ${styles.text}`}></div>;
      case "img":
        return <div className={`${styles.skeleton} ${styles.img}`}></div>;
      case "thumbnail":
        return <div className={`${styles.skeleton} ${styles.thumbnail}`}></div>;
      case "date":
        return <div className={`${styles.skeleton} ${styles.date}`}></div>;
      default:
        break;
    }
    // return
  };
  return handleType(type);
};

export default SkeletonElement;
