var FormView = {

  $form: $('form'),
  $refresh: $('.refresh'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$refresh.on('click', FormView.refresh);
  },

  refresh: function() {
    window.location.reload(true);

  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // user text submetted
    var message = {
      username: window.location.search.substring(10),
      text: $('#message').val(),
      roomname: 'testing'
    };

    // send msg in server(POST)
    Parse.create(message);

    console.log('submit click!');

    // receive the updated data
    App.fetch();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};