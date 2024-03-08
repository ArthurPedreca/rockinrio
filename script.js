document.addEventListener('DOMContentLoaded', function () {
    var menu = document.getElementById('menu');
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
    var collapseList = collapseElementList.map(function (collapseEl) {
      return new bootstrap.Collapse(collapseEl, {
        toggle: false
      })
    });
  
    menu.addEventListener('show.bs.collapse', function () {
      menu.style.display = 'block';
    });
  
    menu.addEventListener('hidden.bs.collapse', function () {
      menu.style.display = '';
    });
  });
  