window.App || (window.App =  {});

App.init = function() {
  query = document.querySelector.bind(document)
  queryAll = document.querySelectorAll.bind(document)
}

document.addEventListener('DOMContentLoaded', App.init(), false);
