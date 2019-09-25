$(document).ready(init);

function init() {
  var csgoTeams = new Pandascore();
  csgoTeams.getData();
  $('.proTeams').click(function () {
    debugger;
    csgoTeams.clickHandler();
  })
}
