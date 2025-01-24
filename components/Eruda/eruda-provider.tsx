"use client";

import { ReactNode, useEffect } from "react";

export const Eruda = (props: { children: ReactNode }) => {
  useEffect(() => {
    // No inicializar Eruda ni ejecutar ningún código relacionado
  }, []);

  return <>{props.children}</>;
};
