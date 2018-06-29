import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../Profile.css'
import {Redirect} from 'react-router-dom'
import Sidebar from './Sidebar'
import { updateFlat } from '../../actions/flats'

class Description extends Component {


  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    const update = this.state
    this.props.updateFlat(update, this.props.match.params.id)
  }

  handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
      })
    }

  render() {
    const {user} = this.props
    if (!user) return (
      <Redirect to="/login" />
      )

    return (
      <div className='container'>
      <div className='row'>
      <div className='col-md-2'>
        <Sidebar/>
        </div>
      <div className='col-md-9'>
        <div className='panel'>
          <div className='panel-heading'>
            Description
          </div>
          <div className='panel-body'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'>
                  <form
                  className="form-group"
                  onSubmit={this.handleSubmit}>

                  <label>Listing Name</label>
                    <input
                    className="form-control"
                    value={this.state.value}
                    name='name'
                    onChange={this.handleChange}>
                    </input>

                    <label>Summary</label>
                      <input
                        className="form-control"
                        value={this.state.value}
                        name='summary'
                        onChange={this.handleChange}>
                      </input>

                    <div class="text-center">
                      <button
                        type="submit"
                        className="btn btn-normal">
                        Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  )}}

const mapStateToProps = state => {
  const user = state.user === null ? null : state.user.user
  const flat = state.flat === null ? null : state.flat
/*
  let flatName
  let flatSummary

  if (flat) {
    flatName = flat.name === null ? null : flat.name
    flatSummary = flat.summary === null ? null : flat.summary
  }
  */
  return {
    user,
  //  flatName,
  //  flatSummary
  }
}


export default connect(mapStateToProps, { updateFlat })(Description)