### Craete Project Using the help of the React.

1.Create a react Project using 

```
npm create react@letast
```
or

```
npx create-react-app my-app
```
### Install the Tailwind
1. Install tailwind
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
2. Update the `tailwind.config.js` file content

```
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

3. Add the Tailwind directives to your CSS
   Add the @tailwind directives for each of Tailwind’s layers to your `./src/index.css` file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Start your project using the command

```
npm run dev
```
