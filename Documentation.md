# My Portfolio Website

## Initial Setup and Deploment to GitHub Pages

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

* Commited and pushed changes into GitHub repository.

```console
git add .
git commit -m "Set up React project and added Bootstrap"
git push origin main
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

## Development
### Components
#### Navbar
* Code Explanation
**scrollToSection(id) Function**
The scrollToSection function is responsible for scrolling the page smoothly to the section corresponding to the provided ID. It uses JavaScript's `document.getElementById` method and calls scrollIntoView with the `{ behavior: 'smooth' }` option.
* JSX Structure
The JSX structure is wrapped in a `<nav>` element with Bootstrap classes for styling and responsiveness.
* Branding: The brand name or logo is a link `(<a>)` with the navbar-brand class, set to redirect to the home section `(#home)`.
* Responsive Toggler Button: The button appears on smaller screens and collapses the navbar into a hamburger icon.
* Navigation Links: The navigation links have been replaced with `<button>` elements for better accessibility and use the scrollToSection function to scroll to different sections of the page.