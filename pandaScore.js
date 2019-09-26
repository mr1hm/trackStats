class Pandascore {
  constructor() {
    this.teams = null;
    this.stats = null;
    this.clickHandler = this.clickHandler.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.upcomingMatches = null;
  }

  getTeamData() {
    var ajaxConfig = {
      url: './pandaScoreTeams.php',
      dataType: 'json',
      method: 'get',
      headers: {
        Authorization: `Bearer bZHwdBze71eTDAcMfKzZrv56P5Bh4D7JCqyfuY7yM9KnyRPbDz4`,
      },
      success: this.onSuccess,
      error: (response) => {
        console.log(response);
      },
    }
    $.ajax(ajaxConfig);
  }

  onSuccess(response) {
    console.log(response);
    this.teams = response;
    this.clickHandler();
    this.appendTeamImages();
  }

  clickHandler() {
    for (let i = 0; i < this.teams.length; i++) {
      var teamName = this.teams[i].name;
      var teamDiv = $('<div>').addClass('team').text(teamName);
      teamDiv.attr('id', 'team' + i);
      $('.teams').append(teamDiv);
    }
  }

  appendTeamImages() {
    for (let i = 0; i < this.teams.length; i++) {
      var teamImg = this.teams[i]['image_url'];
      // var newImg = $('<img>').attr('src', teamImg).addClass('img');
      $('#team' + i).css({
        'background-image': 'url(' + teamImg + ')',
      });
    }
  }

  getMatchData() {
    var ajaxConfig = {
      url: './pandaScoreMatch.php',
      dataType: 'json',
      method: 'get',
      headers: {
        Authorization: `Bearer bZHwdBze71eTDAcMfKzZrv56P5Bh4D7JCqyfuY7yM9KnyRPbDz4`,
      },
      success: (response) => {
        this.upcomingMatches = response;
        console.log('Match data: ', this.upcomingMatches);
        var upcomingMatches = new Matches(this.upcomingMatches);
        upcomingMatches.appendMatches();
        upcomingMatches.getDate();
      },
      error: (response) => {
        console.log('Match data error:', response);
      },
    }
    $.ajax(ajaxConfig);
  }

}
