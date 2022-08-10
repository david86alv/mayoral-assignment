// Importar estilos Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

// Importar estilos FontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

// Importar CSS custom
import '../css/styles.css'

import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />
}