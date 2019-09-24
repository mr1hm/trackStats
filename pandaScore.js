class Pandascore {
  constructor() {
    this.team = null;
    this.stats = null;
  }

  getData() {
    var ajaxConfig = {
      url: 'https://api.pandascore.co/csgo/teams',
      dataType: 'json',
      method: 'get',
      headers: {
        Authorization: `Bearer bZHwdBze71eTDAcMfKzZrv56P5Bh4D7JCqyfuY7yM9KnyRPbDz4`,
      },
      data: {
        game: 'csgo',
        search: 'teams',
      },
      success: (response) => {
        console.log(response);
      },
      error: (response) => {
        console.log(response);
      },
    }
    $.ajax(ajaxConfig);
  }
}
