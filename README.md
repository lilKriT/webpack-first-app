# webpack-first-app

My first app with WebPack. Following the official guide.
Created by lilKriT.

# notes

# getting started

npm init -y
npm i -D webpack webpack cli

create stuff in /src

in package.json:
remove main line
add private: true

index.html in /dist
npm i lodash

instead of adding <script> in index.html,
import in index.js
then just import main.js in index.html

create webpack.config.js

# asset management

rename output from main.js to bundle.js
npm i -D style-loader css-loader

add module rule testing for css, using style loader and css loader (order matters!)
create style.css in /src

import the style.css from index.js!

images: module rule testing for png, jpg etc. type: "asset/resource"
same with fonts and most data...
csv and xml will require installing loaders

example:
module: {
rules: [
{
test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
type: "asset/resource",
},
{
test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
use: ["csv-loader"],
},
{
test: /\.xml$/i,
use: ["xml-loader"],
},
],
},

# output management

add some js files with functions in them
rename script imports in index.html from name.js to name.bundle.js
add entry points
output: '[name].bundle.js'

but this way, if you change the name of a file, it will be lost from index.
npm i -D html-webpack-plugin

add import and plugin to webpack config

clean the /dist:
output: clean: true

# development

add mode: development to config

to track errors:
add devtool: "inline-source-map"

instead of running npm run build manually you have 3 options:
webpack watch mode
webpack-dev-server - probably the best
webpack-dev-middleware

watch mode:
package.json add script watch: "webpack --watch"
(doesn't reload automatically)

webpack-dev-server:
npm i -D webpack-dev-server
in webpack config:
devServer: {
static: ./dist
}
tells webpack where to look for files

optimization: {
runtimeChunk: 'single'
}
required when you have more than one entry points

add script:
start: "webpack serve --open"

webpack-dev-middleware:
(this is actually used by webpack dev server anyway)

npm i -D express webpack-dev-middleware
add publicPatch: "/" to webpack config

# code splitting

3 ways:
entry points - easiest. has issues
prevent duplication
dynamic imports

entry points
have array of entry points
and output is dynamic

prevent duplication:
every entry point needs dependOn: "shared"
and later defined shared
it also needs optimization chunk single

you can use SplitChunksPlugin too

optimization: {
splitChunks: {
chunks: "all",
},
},

dynamic imports
recommended
no need for the optimization part
or "dependOn"
just make async functions

prefetch / preload
prefetch - something might be useful later
preload - will be needed now
you can use it by adding a comment:
import(/\* webpackPrefetch: true \*/ "./path/to/something.js");

# caching

use [contenthash] as a substition on your dist files.

code that's not yours can be stored separately (using cacheGroups), as it is not as likely to change.
(like lodash)

use moduleIds: deterministic to avoid rebuilding vendor modules

# authoring libraries

install deps as dev dependencies (to make less bloat)
bundle it normally

exposing the library
output: library: "somename"
type: "umd" - this way it will work in multiple ways (amd, commonjs, script tag)
then you can reference it using the url in <script>

to make other libraries "peer dependancies":
`externals: { lodash: { commonjs: 'lodash', commonjs2: 'lodash', amd: 'lodash', root: '\_', } }`
if you use more than one file:
either use a regex, or specify array of externals

finally:
add the proper file as package.json main
or add it as a module `module: "src/index.js"`
then you can publish as npm package on unpkg.com
if it has css, you can add it using MiniCssExtractPlugin

# Enviromental Variables

you can pass them using the `--env` flag
no value means it's `true`
you can use them in webpack.config
to use env vars you need to convert module.exports into a function

# Build performance

Stay up to date

## Loaders

Use minimal number of loaders.
(for example only use babel loader with `include: path.resolve(_.join(__dirname, 'src'))`)

## Bootstrap (not the styling tool)

Use as few as possible.

## Resolving

Minimize the number of items in `resolve.modules`, `resolve.extensions`, `resolve.mainFiles`, `resolve.descriptionFiles`.
Set `resolve.symlinks` to `false` if you don't use symlinks like `npm link` or `yarn link`.
Set `resolve.cacheWithContext: false` if you use custom resolving plugins.

## DLL

Use DllPlugin to move code that doesn't change as often.

## Smaller == faster

Use less libraries
SplitChunksPlugin
Remove unused code
Only compile what you are changing

## Worker Pool

You can offload loaders to worker pools using `thread-loader`

## Persistent cache

Use `cache` option.
Clear cache on `postinstall`

## Profile custom plugins and loaders

## Remove progress plugin

## In development

### Incremental Builds

Use watch mode.

### Compile in memory

Use `webpack-dev-server`, `webpack-hot-middleware` and `webpack-dev-middleware`.

### Devtool

eval is the fastest
cheap-source-map and eval-source-map are also good

### Avoid production specific tools

Don't use in development: -`terser-plugin` -`[fullhash]/[chunkhash]/[contenthash]` - `AggressiveSplittingPlugin` - AggressiveMergingPlugin - ModuleConcatenationPlugin

### Minimal Entry Chunk

Use optimization: runtimeChunk: true

### Avoid Extra Optimization steps

Avoid optimization: removeAvailableModules, removeEmptyChunks, splitChunks

### Don't generate path

output: {
pathinfo: false,
}

### TypeScript Loader

If using `ts-loader`, use `transpile-only` option. This way you will lose type checking though.
So add `ForkTsCheckerWebpackPlugin`

## Production

Think if you really need source maps.
Minimize number of babel plugins.
Careful with TS.

# Security

## Nonces

You add one to the ENTRY FILE. Not config.
Example: `__webpack_nonce__ = 'c29tZSBjb29sIHN0cmluZyB3aWxsIHBvcCB1cCAxMjM=';`

## CSP

Content security policy

## Trusted types

# Development - Vagrant

Vagrant is a virtual machine
Vagrant should have a static IP
Install `webpack`, `webpack-cli`, `@webpack-cli/serve` and `webpack-dev-server`
make webpack config
create index.html and app.js
Run the server
`webpack serve --host 0.0.0.0 --client-web-socket-url ws://10.10.10.61:8080/ws --watch-options-poll`
