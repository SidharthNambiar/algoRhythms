import React from 'react'
import AceEditor from 'react-ace'
import WebWorker from '../workers/WebWorker'
import twoSumWorker from '../workers/twoSumWorker'
import 'brace/ext/language_tools'
import 'brace/mode/javascript'
import 'brace/theme/solarized_dark'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
// Material UI Dependencies
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import {changeCodeThunk, updateResultThunk} from '../store/roomId'

class Room extends React.Component {
  constructor(props) {
    super(props)
    this.redirectToTarget = this.redirectToTarget.bind(this)
  }

  // this.handleOnRun = this.handleOnRun.bind(this)
  // this.onChange = this.onChange.bind(this)

  onChange = async newValue => {
    await this.props.changeCode(this.props.match.params.id, newValue)
  }

  handleOnRun = (e, code) => {
    this.worker = new WebWorker(twoSumWorker)
    this.worker.addEventListener('message', async e => {
      this.props.updateResult(this.props.match.params.id, e.data)
    })
    this.worker.postMessage(code)

    //Terminate worker after 10s
    setTimeout(() => this.worker.terminate(), 10000)
    // this.setState({
    //   worker: twoSumWorker,
    //   code:
    //     '//Write a function to sum two numbers\nfunction twoSum (a,b){\n \n}',
    //   result: ''
    // })
  }
  redirectToTarget = () => {
    this.props.history.push(`/home`)
  }

  render() {
    let name = this.props.match.params.name
    let id = this.props.match.params.id
    let results
    let code
    if (this.props.rooms && this.props.rooms[id]) {
      code = this.props.rooms[id].code
      results = this.props.rooms[id].result
    } else {
      code = 'loading'
      results = 'waiting... '
    }

    return (
      <Container>
        <div>
          <Typography component="h2" variant="h5">
            Get Into The Rhythm:
          </Typography>
          <Typography component="h1" variant="h5">
            {name}
          </Typography>
          <AceEditor
            mode="javascript"
            theme="solarized_dark"
            onChange={this.onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{$blockScrolling: true}}
            enableLiveAutocompletion={true}
            enableBasicAutocompletion={true}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            wrapEnabled={true}
            width="100%"
            height="200px"
            value={code}
          />
          <Button
            type="submit"
            name="action"
            onClick={e => this.handleOnRun(e, code)}
            variant="contained"
            color="primary"
          >
            RUN
          </Button>
          <Button
            type="button"
            onClick={this.redirectToTarget}
            variant="contained"
            color="primary"
          >
            BAIL
          </Button>
          <Typography component="h5" variant="h5">
            Results: {results}
          </Typography>
        </div>
      </Container>
    )
  }
}
const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
    rooms: state.firestore.data.rooms,
    users: state.firestore.data.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCode: (roomId, code) => dispatch(changeCodeThunk(roomId, code)),
    updateResult: (roomId, result) =>
      dispatch(updateResultThunk(roomId, result))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{collection: 'rooms'}])
)(Room)
