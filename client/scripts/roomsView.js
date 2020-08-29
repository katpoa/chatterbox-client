var RoomsView = {

  $room: $('#rooms .room'),
  $select: $('select'),
  $addroom: $('.room'),
  // $roomform: $('#addRoom'),

  initialize: function() {
    RoomsView.$addroom.on('click', function() {return RoomsView.addRoom($('#roomText').val())}),
    // anonymous fn -> make addRoom invocation when clicking the button (n)
    RoomsView.$select.on('change', RoomsView.render)
    ;
  },

  render: function() {
    $('#chats').empty();
    for (let i = 0; i < Rooms.length; i++) {
      RoomsView.renderRoom(Rooms[i]);
    }
  },

  renderRoom: function(message) {
    // when we click the specific room in the select menu,
    //  should display specific room messages.

    // if roomname of message matches selected roomname $('option:selected').text()
    // var obj = {'username': message.username, 'text': message.text};

    if (message.roomname === $('option:selected').text()) {
      // append that message to the #chats html
      var obj = {'username': message.username, 'text': message.text};
      var html = MessageView.render(obj);
      $('#chats').append(html);
    }
  },

  //
  addRoom: function(roomname) {
    console.log('should be roomname:',roomname)
    // once the user types roomname and click add button,
    var optionTag = _.template(`<option value="<%= roomname %>"><%= roomname %></option>`);
    var obj = {roomname: roomname};
    console.log(obj);
    $('#rooms select').append(optionTag(obj));
    // var room = {
    //   messages:
    // };

      // render the roomname in the select io
  }
};


// handleSubmit: function(event) {
//   // Stop the browser from submitting the form
//   event.preventDefault();

//   // user text submetted
//   var message = {
//     username: window.location.search.substring(10),
//     text: $('#message').val(),
//     roomname: 'testing'
//   };

//   // send msg in server(POST)
//   Parse.create(message);

//   console.log('submit click!');

//   // receive the updated data
//   App.fetch();
// },
