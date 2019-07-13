console.log("I AM LINKED! ")

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
    var instance = M.Modal.getInstance(elem);
    instance.open();
    instance.close();
  });

