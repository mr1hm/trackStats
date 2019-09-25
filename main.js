$(document).ready(init);

function init() {
  var csgoTeams = new Pandascore();
  csgoTeams.getTeamData();
  csgoTeams.getMatchData();
  $('.proTeams').click(function() {
    $('.modal').removeClass('hidden');
  });
  $('.modal').click(function() {
    $('.modal').addClass('hidden');
  })
}
