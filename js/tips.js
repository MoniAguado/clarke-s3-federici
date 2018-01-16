var wa = document.querySelectorAll('.wp');

for (var i=0; i< wa.length; i++) {
  makeLink(wa[i]);
}

function makeLink(el) {
  var url = location.href;
  var link = 'whatsapp://send?text=' + encodeURIComponent(url);
  el.setAttribute('href', link);
  el.classList.remove('hidden');
}
console.log(encodeURIComponent(location.href))
