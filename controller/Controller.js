const modules = {
    
    index: (req, res) => {
        res.render('about', { title: 'About Us' });
    },
    
    
    about: (req, res) => {
        res.render('about', { title: 'About Us' });
    },
    
   
    shop: (req, res) => {
        res.render('shop', { title: 'Shop' });
    },

    
    quality: (req, res) => {
        res.render('quality', { title: 'Quality of Honey' });
    },

   
    contact: (req, res) => {
        res.render('contact', { title: 'Contact Us' });
    },

    home: (req, res) => {
        res.render('home', { title: 'Home' });
    },
};

module.exports = modules;
