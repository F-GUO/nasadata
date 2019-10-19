let ftpClient = require('ftp-client');
let fits = require('FITS');
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

module.exports.FTPProcessor = function() {

  processDocs = function() {
    //TODO: use a loop to generate all the file name based on pattern
    client.download('/public_html/test2', 'test2/', {
      overwrite: 'all'
    }, function (result) {
      fits.readFile(file, function(err, FITS){
        if(err) return console.error(err);
        console.log(FITS.HDU.primary);

      });

    });
  }

  process = function () {
    const config = {
      host: 'ftp://ftp.asc-csa.gc.ca/users/OpenData_DonneesOuvertes/pub/NEOSSAT/ASTRO/2019/292/',
      port: 21,
      user: 'Guest'
    }
    let client = new ftpClient(config, options);
    client.connect(processDocs)
  }
}
