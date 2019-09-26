class Matches {
  constructor(upcomingMatches) {
    this.data = upcomingMatches;
    this.date = null;
  }

  appendMatches() {
    for (let i = 0; i < this.data.length; i++) {
      var matchDiv = $('<div>').addClass('match').attr('id', i);
      $('.upcomingMatches').append(matchDiv);
    }
  }

  getDate() {
    var date = new Date();
    var today = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    console.log(year + '-' + month + '-' + today);
  }
}
