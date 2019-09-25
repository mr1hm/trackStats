$(document).ready(init);

function init() {
  var csgoTeams = new Pandascore();
  csgoTeams.getData();
  $('.proTeams').click(csgoTeams.clickHandler);
}
