/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'vampiro': ['Vampiro One', 'sans-serif'],


      },
      colors: {
        'mauve' : '#33264E',
        'twitter' : '#63CDF1',
        'facebook': '#507CBE',
        'instagram': '#D62976',
        'pinterest': '#EE3E52',
        'footer': '#362953',
        'liens': '#EE3E52',
        'button1': '#FF6071',
        'button2': '#FF7E8E',
        'cat1': '#673AB7',
        'cat2': '#5567DA',
        'cat3': '#1E88E5',
        'cat4': '#27CC81',
        'cat5': '#38C4D1',
        'cat6': '#E91E63',

        },
    spacing: {
        'containerpageL': '1200px',
        'containerpageArt': '800px',
        'sidebar': '332px',
        'carrouselL': '1600px',
        'carrouselH': '480px',
        'imageL': '786px',
        'imageH': '491px',


    },    

    },
  },
  plugins: [],
}

