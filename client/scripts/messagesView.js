var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // API takes time to load data
    // starting state while data loads
  },

  render: function() {
    // how to render the messages
    // var html = '';
    // iterate through Messages(data.results)
    for (let i = 0; i < Messages.length; i++) {
      // if Messages[i].roomname matches selected roomname
      if (Messages[i].roomname === $( "#selectRoom option:selected" ).text()) {
        MessagesView.renderMessage(Messages[i]);
      }
    }
  },

  // renderMessage : render one message(when submitting new msg)
  renderMessage: function(message) {
    // add message to Messages
    var obj = {'username': message.username, 'text': message.text};
    var html = MessageView.render(obj);

    $('#chats').append(html);

  }

};

