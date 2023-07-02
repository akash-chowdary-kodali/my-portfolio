import { useEffect } from "react";

export function ScrollToTopEffect() {

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  });

  // const path = document.getElementById("afternav");
  // path.scrollIntoView();

}
