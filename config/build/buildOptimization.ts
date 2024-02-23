import TerserPlugin from "terser-webpack-plugin";
import webpack, { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function buildOptimization({
  mode,
}: BuildOptions): Configuration["plugins"] {
  const isProd = mode === "production";

  const optimization: any = [];
  if (isProd) {
    optimization.push(new TerserPlugin());
  }

  return optimization;
}
