class Pandascore {
  constructor() {
    this.teams = null;
    this.stats = null;
    this.clickHandler = this.clickHandler.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }

  getData() {
    var ajaxConfig = {
      url: './pandaScore.php',
      dataType: 'json',
      method: 'get',
      headers: {
        Authorization: `Bearer bZHwdBze71eTDAcMfKzZrv56P5Bh4D7JCqyfuY7yM9KnyRPbDz4`,
      },
      data: {

      },
      success: this.onSuccess,
      error: (response) => {
        console.log(response);
      },
    }
    $.ajax(ajaxConfig);
  }

  onSuccess(response) {
    debugger;
    console.log(response);
    this.teams = response;
  }

  clickHandler() {
      for (let i = 0; i < this.teams.length; i++) {
        var teamName = this.teams[i].name;
        var teamDiv = $('<div>').addClass(teamName).text(teamName);
        $('.teams').append(teamDiv);
      }
    }
  }

// var csgoTeams = new Pandascore();
// csgoTeams.getData();
