const App = {
    data() {
        return {
            Zugriffsnachricht : "Welcome to Uniform-bestellen",
            zweitenachricht:"Auf dieser Webseite geht es darum, jedem Schülern die passende Schuluniform nach der Größeauswahl zu nähen. Beachten Sie bitte, dass das Einziehen eines Anzuges sowie ein Hemd/eine Bluse für jeden ein Pflicht ist"
              
        }
    },
    methods: {
     umleiten: function() {
        var selectvalue = $('input[name=genre]:checked', '#Form').vue();
        if(selectvalue == "M") {
            window.open('maennerwahl.html', '_self');
            return true;
        }
        if(selectvalue == "F") {
            window.open('frauenwahl.html', '_self');
            return true;
        }
      }
    }
}
Vue.createApp(App).mount("#app")