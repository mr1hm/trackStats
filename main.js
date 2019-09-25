$(document).ready(init);

function init() {
  var csgoTeams = new Pandascore();
  csgoTeams.getData();
  $('.proTeams').click(function() {
    $('.modal').removeClass('hidden');
  });
  $('.modal').click(function() {
    $('.modal').addClass('hidden');
  })
}
