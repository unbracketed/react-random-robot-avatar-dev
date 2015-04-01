var React = require('react')
var {Link} = require('react-router')
var RandomBotAvatar = require('react-random-bot-avatar')


var MainHandler = React.createClass({
  render() {
    return (
      <div>
				<Link to="another-view">Another View</Link>
        <div>Main Viewz   gg</div>
        <RandomBotAvatar height="600" width="600"/>
        <RandomBotAvatar height="300" width="200"/>
        <RandomBotAvatar height="500" width="300"/>
      </div>
    )
  }
})

module.exports = MainHandler
