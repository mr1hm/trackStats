class Matches {
  constructor(upcomingMatches) {
    this.data = upcomingMatches;
    this.date = null;
  }

  appendMatches() {
    for (let i = 0; i < this.data.length; i++) {
      var scheduledTime = this.data[i]['begin_at'];
      var slicedDate = scheduledTime.slice(0, 10);
      var slicedTime = scheduledTime.slice(9, 19);
      if (slicedDate === this.date) {
        var matchDiv = $('<div>').addClass('match').attr('id', i).text(this.data[i].name);
        $('.upcomingMatches').append(matchDiv);
      }
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
