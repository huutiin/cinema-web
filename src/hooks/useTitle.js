import React, { useEffect, Component } from "react";
export default function useTitle(title) {
  useEffect(() => {
    document.title = `${title} | Cinematic`;

    return () => {};
  });

  return title;
}
