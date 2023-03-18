import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react-swc";
import civetPlugin from "vite-plugin-civet";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactPlugin(),
    civetPlugin({
      stripTypes: true,

      // Civet plugin needs to be made aware of the plugin
      // that will support typescript compilation
      outputTransformerPlugin: "vite:react-swc",

      // Currently vite-plugin-react will not perform
      // any transformations unless file extension is js/jsx etc.
      //
      // So we need to change extension before passing
      // result of civet transformation to the plugin
      outputExtension: "jsx",
    }),
  ],
});
