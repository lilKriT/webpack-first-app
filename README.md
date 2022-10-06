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
