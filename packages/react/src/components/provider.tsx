import * as styles from "@openlab-ui/core/theme/default.css";
import { useEffect, type PropsWithChildren } from "react";

export interface OpenLabUIProviderProps extends PropsWithChildren {
  dark?: boolean;
}

export function OpenLabUIProvider({ dark = false, children }: OpenLabUIProviderProps) {
  const theme = dark ? styles.darkTheme : styles.defaultTheme;

  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return <div className={theme}>{children}</div>;
}
