import React from "react";
import styles from "./styles.module.css";

export function Block({ segmentId, handleSegmentClick, playerValue }) {
  return (
    <>
      <div
        className={styles.block}
        onClick={(e) => handleSegmentClick(e, segmentId)}
      >
        {playerValue?.playerKey}
      </div>
    </>
  );
}

export default Block;
