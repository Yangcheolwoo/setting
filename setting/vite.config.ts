import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "@svgr/rollup";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: { find: "@", replacement: resolve(__dirname, "src") },
	},
	plugins: [react(), svgr(), tsconfigPaths()],
	server: {
		port: 3000,
	},
});
