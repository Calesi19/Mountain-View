import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { type IStaticMethods } from "preline/preline";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript(): null {
  const path = usePathname();

  useEffect(() => {
    import("preline/preline");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100);
  }, [path]);

  return null;
}
