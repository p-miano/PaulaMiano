# My Portfolio Website

## Development steps

* Created React project

```console
npx create-react-app .
```

`npx` is a package runner tool that comes with Node.js, used to run packages without having to globally install them.
`create-react-app` is a command that sets up a new React project with all the necessary boilerplate and configurations (Webpack, Babel, etc.).
`.` indicates the current directory, so the React project files are created in the folder you're already in.

* Installed Bootstrap.

```console
npm install bootstrap
```

* Imported Bootstrap by adding the following code to src/index.jsx.

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

* Started the React development server on <http://localhost:3000>.

```console
`npm start` 
```

* Installed the gh-pages package to deploy to GitHub Pages.

```console
npm install gh-pages --save-dev
```

* Added the homepage name to package.json file.

```json
"homepage": "https://p-miano.github.io/PaulaMiano",
```

* Added predeploy and deploy scripts to the scripts section of package.json.

```json
"scripts": {
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

* Built and deployed app.

```console
npm run deploy
```
