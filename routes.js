const routes = require("next-routes")();

routes
  .add("/projects/new", "/projects/new")
  .add("/projects/projectLists/:address", "/projects/show")
  .add("/projects/:address/requests", "/projects/requests/index")
  .add("/projects/:address/requests/new", "/projects/requests/new")
  .add("/projects/projectLists", "/projects/projectLists")
  .add("/projects/dashboard", "/projects/dashboard");

module.exports = routes;
