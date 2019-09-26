class Matches {
  constructor(upcomingMatches) {
    this.data = upcomingMatches;
  }

  appendMatches() {
    for (let i = 0; i < this.data.length; i++) {
      var matchDiv = $('<div>').addClass('match').attr('id', i);
      $('.upcomingMatches').append(matchDiv);
    }
  }
}
