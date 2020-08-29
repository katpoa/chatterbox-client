var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // API takes time to load data
    // starting state while data loads
  },

  render: function() {
    // how to render the messages
    var html = '';

    // iterate through Messages(data.results)
    for (let i = 0; i < Messages.length; i++) {
      // <%= key %> the key should match with the html
      html += MessageView.render({'username': Messages[i].username, 'text': Messages[i].text});
    }
    // we can define cbfunction

    $('#chats').append(html);
    // append....rendered template?
  },

  // renderMessage : render one message
  renderMessage: function(message) {
    // add message to Messages
    var obj = {'username': message.username, 'text': message.text};
    var html = MessageView.render(obj);

    $('#chats').append(html);

  }

};

