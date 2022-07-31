/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'db' : '#dbdbdb',
        '8e' : '#8e8e8e',
        '26' : '#262626',
        'a8' : '#a8a8a8',
        'd8' : '#d8d8d8',
        'ef' : '#efefef',
        'c7' : '#c7c7c7',
        'facebook' : '#385185',
        'link': '#00376b',
        'link-light': '#0095f6' 
      },
      backgroundImage: {
        'login-pattern': 'url(https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png)',
      }
    },
  },
  plugins: [],
}
