import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/')
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/')
      }
    }
    render() {
      return <ComposedComponent {...this.props} />
    }
  }
  function mapStateToProps(state) {
    return {authenticated: state.authenticated}
  }
  return connect(mapStateToProps)(Authentication)
}

/*
// In som other location..Not in this file...
// We want to use this HOC

// ↓ This is my Hight Order Component
import Authentication
// ↓ This is the component I want to wrap
import Resources

const ComposedComponent = Authentication(Resources)

// In some render method...
<ComposedComponent />
*/
