import React, { Component } from 'react';
import { Image, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import {connect} from 'react-redux'
import '../Profile.css'
import {Redirect, Link, withRouter} from 'react-router-dom'
import SidebarNew from './SidebarNew'
import { fetchAllFlats} from '../../actions/flats'


class Index extends Component {

  componentWillMount(props) {
    const {user} = this.props
    this.props.fetchAllFlats(user.id)
  }

  renderList = (item) => {
    const ind = item.id
    return (
      <div className='row'>
        <div className='col-md-2'>
          <img src='./R21.jpg' className="photoP"/>
        </div>
        <div class="col-md-7">
          <h4>{item.id} {item.name}</h4>
        </div>
        <div class="col-md-3 right">
              <Link to={`/edit/${item.id}`} className="btn btn-form">
                Update
              </Link>
        </div>
      </div>
    )
  }

  render() {
    const {flat} = this.props
    if (flat === null) return null

    return (
      <div className='container'>
      <div className='row'>
      <div className='col-md-2'>
        <SidebarNew />
      </div>

      <div className='col-md-9'>
        <div className='panel'>
          <div className="panel-heading">
            Your Listings
          </div>

          <div className='panel-body'>
            {flat.map(product => this.renderList(product))}
          </div>
        </div>
      </div>
    </div>
  </div>
)}}

const mapStateToProps = state => ({
  user: state.user === null ? null : state.user.user,
  flat: state.flat === null ? null : state.flat
})

export default connect(mapStateToProps, { fetchAllFlats})(Index)