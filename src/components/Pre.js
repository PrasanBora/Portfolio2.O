import React from "react";

export default function Pre({ load }) {
  return (
    <div
      id={load ? "preloader" : "preloader-none"}
      role="status"
      aria-label="Loading Prasan Bora's portfolio"
    />
  );
}
