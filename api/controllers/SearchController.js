const searchServie = require('../service/SearchService')

module.export.SearchController = function() {
  search = function(req, res) {
      let query = req.params;
      return searchServie.search(query);
  }
}
