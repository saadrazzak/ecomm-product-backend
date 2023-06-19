const productsRoutes = (app, fs) => {
    // variables
    const dataPath = './data/productData.json';
  
    // READ
    app.get('/products', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  module.exports = productsRoutes;