class Matches {
  constructor(upcomingMatches) {
    this.data = upcomingMatches;
    this.date = null;
  }

  appendMatches() {
    for (let i = 0; i < this.data.length; i++) {
      var teamNames = this.data[i].name;
      var scheduledTime = this.data[i]['begin_at'];
      var slicedDate = scheduledTime.slice(0, 10);
      var slicedTime = scheduledTime.slice(11, 19);
      if (slicedDate === this.date) {
        var matchDiv = $('<div>').addClass('match').attr('id', 'match' + i).html(this.data[i].name);
        var matchP = $('<p>').addClass('time').text(slicedTime);
        $('.upcomingMatches').append(matchDiv);
        $('#match1').append(matchP);
      }
    }
    if (slicedDate !== this.date) {
      var noMatchesDiv = $('<div>').addClass('noMatches').text('Booooooo, no matches today :(');
      $('.upcomingMatches').append(noMatchesDiv);
    }
  }

  getDate() {
    var date = new Date();
    var today = date.getDate();
    var month = date.getMonth() + 1 + '';
    if (month.length === 1) {
      month = '0' + month;
    }
    var year = date.getFullYear();
    var fullDate = year + '-' + month + '-' + today;
    console.log(fullDate);
    this.date = fullDate;
  }
}
