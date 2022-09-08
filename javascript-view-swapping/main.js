var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

// check to see if event.target matches('.tab')
// if yes loop through .tab nodelist and compare to event.target
// update class name to active

function changeTab(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      $tab[i].className = 'tab';
      if (event.target === $tab[i]) {
        $tab[i].className = 'tab active';
      }
    }

    var $dataView = event.target.getAttribute('data-view');

    for (var j = 0; j < $view.length; j++) {
      var viewData = $view[j].getAttribute('data-view');
      $view[j].className = 'view hidden';
      if (viewData === $dataView) {
        $view[j].className = 'view';
      }
    }
  }
}

$tabContainer.addEventListener('click', changeTab);
