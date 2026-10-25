// vite.config.js
import { defineConfig } from "file:///C:/Users/Serega/Documents/it/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/browka/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Serega/Documents/it/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/browka/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/Serega/Documents/it/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/browka/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///C:/Users/Serega/Documents/it/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/browka/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import path from "path";
import { fileURLToPath } from "url";
import svgLoader from "file:///C:/Users/Serega/Documents/it/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/browka/node_modules/vite-svg-loader/index.js";
import { imagetools } from "file:///C:/Users/Serega/Documents/it/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/browka/node_modules/vite-imagetools/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Serega/Documents/it/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/browka/vite.config.js";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = path.dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    imagetools(),
    svgLoader(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, "src/assets/icons")],
      symbolId: "icon-[name]"
    })
  ],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTZXJlZ2FcXFxcRG9jdW1lbnRzXFxcXGl0XFxcXFx1MDQxRlx1MDQ0MFx1MDQzRVx1MDQzNVx1MDQzQVx1MDQ0Mlx1MDQ0QlxcXFxicm93a2FcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFNlcmVnYVxcXFxEb2N1bWVudHNcXFxcaXRcXFxcXHUwNDFGXHUwNDQwXHUwNDNFXHUwNDM1XHUwNDNBXHUwNDQyXHUwNDRCXFxcXGJyb3drYVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvU2VyZWdhL0RvY3VtZW50cy9pdC8lRDAlOUYlRDElODAlRDAlQkUlRDAlQjUlRDAlQkElRDElODIlRDElOEIvYnJvd2thL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcclxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnXHJcbmltcG9ydCBzdmdMb2FkZXIgZnJvbSAndml0ZS1zdmctbG9hZGVyJ1xyXG5pbXBvcnQgeyBpbWFnZXRvb2xzIH0gZnJvbSAndml0ZS1pbWFnZXRvb2xzJztcclxuXHJcblxyXG5jb25zdCBfX2ZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpXHJcbmNvbnN0IF9fZGlybmFtZSA9IHBhdGguZGlybmFtZShfX2ZpbGVuYW1lKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIHZ1ZUpzeCgpLFxyXG4gICAgaW1hZ2V0b29scygpLFxyXG4gICAgc3ZnTG9hZGVyKCksXHJcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XHJcbiAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9hc3NldHMvaWNvbnMnKV0sXHJcbiAgICAgIHN5bWJvbElkOiAnaWNvbi1bbmFtZV0nLFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBiYXNlOiAnLi8nLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1csU0FBUyxvQkFBb0I7QUFDalksT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLFVBQVU7QUFDakIsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxlQUFlO0FBQ3RCLFNBQVMsa0JBQWtCO0FBUGdMLElBQU0sMkNBQTJDO0FBVTVQLElBQU0sYUFBYSxjQUFjLHdDQUFlO0FBQ2hELElBQU0sWUFBWSxLQUFLLFFBQVEsVUFBVTtBQUV6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxXQUFXO0FBQUEsSUFDWCxVQUFVO0FBQUEsSUFDVixxQkFBcUI7QUFBQSxNQUNuQixVQUFVLENBQUMsS0FBSyxRQUFRLFdBQVcsa0JBQWtCLENBQUM7QUFBQSxNQUN0RCxVQUFVO0FBQUEsSUFDWixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsV0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
