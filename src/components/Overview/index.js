import {Component} from 'react'

import Cookies from 'js-cookie'

import {GoThreeBars} from 'react-icons/go'

import {AiOutlineSearch, AiOutlineBell} from 'react-icons/ai'

import {HiOutlineChat} from 'react-icons/hi'

import {BsThreeDotsVertical} from 'react-icons/bs'

import './index.css'

class Overview extends Component {
  state = {showActions: false}

  onClickActions = () => {
    this.setState({showActions: true})
  }

  onClickAddPolicy = () => {
    const {history} = this.props
    history.replace('/addPolicy')
  }

  render() {
    const {showActions} = this.state
    const policyName = Cookies.get('policyName')
    const leaveDays = Cookies.get('leaveDays')
    const isCreatedNewPolicy = Cookies.get('isCreated')

    return (
      <div className="overview-container">
        <nav className="nav-container">
          <div className="nav-bar">
            <div className="first-block">
              <h1>PROJECT</h1>
              <GoThreeBars className="icons" />
            </div>
            <div>
              <AiOutlineSearch className="icons" />
              <HiOutlineChat className="icons" />
              <AiOutlineBell className="icons" />
            </div>
          </div>
          <h1>Overview</h1>
        </nav>
        <div className="policy-info-block">
          <div className="main-heading">
            <p>Time Off</p>
            <button
              type="button"
              className="new-policy"
              onClick={this.onClickAddPolicy}
            >
              + Add Leave Policy
            </button>
          </div>
          <div className="sub-heading">
            <p className="heading">Name</p>
            <p className="heading">Day</p>
            <p className="heading">Create On</p>
            <p className="heading">Action</p>
          </div>
          <div className="policy-details">
            <p>Sick Leave</p>
            <p>8 </p>
            <p>10 Jul 2020</p>

            {showActions ? (
              <select className="select-block">
                <option>Edit</option>
                <option>Delete</option>
              </select>
            ) : (
              <BsThreeDotsVertical onClick={this.onClickActions} />
            )}
          </div>
          <div className="policy-details">
            <p>Plan Leave</p>
            <p>8</p>
            <p>09 Jul 2020</p>
            {showActions ? (
              <select className="select-block">
                <option>Edit</option>
                <option>Delete</option>
              </select>
            ) : (
              <BsThreeDotsVertical onClick={this.onClickActions} />
            )}
          </div>
          <div className="policy-details">
            <p>Casual Leave</p>
            <p>8</p>
            <p>12 Jul 2020</p>
            {showActions ? (
              <select className="select-block">
                <option>Edit</option>
                <option>Delete</option>
              </select>
            ) : (
              <BsThreeDotsVertical onClick={this.onClickActions} />
            )}
          </div>
          <div className="policy-details">
            <p>Casual Leave</p>
            <p>2</p>
            <p>09 Nov 2020</p>
            {showActions ? (
              <select className="select-block">
                <option>Edit</option>
                <option>Delete</option>
              </select>
            ) : (
              <BsThreeDotsVertical onClick={this.onClickActions} />
            )}
          </div>
          <div className="policy-details">
            <p>Sick Leave</p>
            <p>1</p>
            <p>09 Nov 2020</p>
            {showActions ? (
              <select className="select-block">
                <option>Edit</option>
                <option>Delete</option>
              </select>
            ) : (
              <BsThreeDotsVertical onClick={this.onClickActions} />
            )}
          </div>
          {isCreatedNewPolicy && (
            <div className="policy-details">
              <p>{policyName}</p>
              <p>{leaveDays}</p>
              <p>16 Aug 2021</p>
              {showActions ? (
                <select className="select-block">
                  <option>Edit</option>
                  <option>Delete</option>
                </select>
              ) : (
                <BsThreeDotsVertical onClick={this.onClickActions} />
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Overview
