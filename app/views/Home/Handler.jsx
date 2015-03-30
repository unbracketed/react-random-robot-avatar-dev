var React = require('react')
var {Link} = require('react-router')
var {RandomBotAvatar, Rectangle, Eyes, Head, Ears, Top, Collar} = require('react-random-bot-avatar')


var MainHandler = React.createClass({
  render() {
    return (
      <div>
				<Link to="another-view">Another View</Link>
        <div>Main View</div>
        <RandomBotAvatar height="600" width="600">
          <Top/>
          <Head/>
          <Eyes/>
          <Ears/>
          <Collar/>
        </RandomBotAvatar>
        <RandomBotAvatar height="300" width="200">
          <Top/>
          <Head/>
          <Eyes/>
          <Ears/>
          <Collar/>
        </RandomBotAvatar>
        <RandomBotAvatar height="500" width="300">
          <Top/>
          <Head/>
          <Eyes/>
          <Ears/>
          <Collar/>
        </RandomBotAvatar>
      </div>
    )
  }
})

module.exports = MainHandler
