
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentVideo: this.props.videos[0],
      videos: this.props.videos
    }
    this.handleClick = this.handleClick.bind(this);
    this.callBack = this.callBack.bind(this);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }

  componentDidMount(){
    this.props.searchYouTube({max: 5, query: 'monopoly', key: window.YOUTUBE_API_KEY}, this.callBack)
  }

  callBack(data) {
    this.setState({videos: data, currentVideo: data[0]});
  }

  searchChangeHandler(query) {
    var options = {
      max: 5,
      q: query,
      key: window.YOUTUBE_API_KEY
    }
      window.searchYouTube(options, this.callBack);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchChangeHandler={this.searchChangeHandler} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList handleClick={this.handleClick} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    )
  }

  handleClick(video) {
    this.setState({currentVideo: video});
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
