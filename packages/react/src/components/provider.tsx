import * as styles from "@openlab-ui/core/theme/default.css";
import { useEffect, type PropsWithChildren } from "react";

export function OpenLabUIProvider(props: PropsWithChildren) {
  useEffect(() => {
    document.body.classList.add(styles.defaultTheme);
    return () => {
      document.body.classList.remove(styles.defaultTheme);
    };
  }, []);

  return <div className={styles.defaultTheme}>{props.children}</div>;
}
