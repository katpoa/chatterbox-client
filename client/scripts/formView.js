var FormView = {

  $form: $('form'), // $('#send')
  $refresh: $('.refresh'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit); // not invoking (just reference)
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
      roomname: $('option:selected').val()
    };

    // send msg in server(POST)
    Parse.create(message);

    console.log('submit click!');

    // receive the updated data (GET)
    App.fetch();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};