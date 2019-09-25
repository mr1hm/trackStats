class Pandascore {
  constructor() {
    this.team = null;
    this.stats = null;
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

      //   search: 'teams',
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
    for (let i = 0; i < response.length; i++) {
      var teamName = response[i].name;
      var teamDiv = $('<div>').addClass(teamName).text(teamName);
      $('.teams').append(teamDiv);
    }
  }
}

// var csgoTeams = new Pandascore();
// csgoTeams.getData();
