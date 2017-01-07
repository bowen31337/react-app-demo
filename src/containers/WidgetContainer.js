import { connect } from 'react-redux'
import Widget from '../components/Widget'

import * as action from '../actions/fetchContents'

const mapStateToProps = state => ({
  		data:state.fetchContents.payload || [],
      error:state.fetchContents.error,
      loading:state.fetchContents.loading
})

const mapDispatchToProps = (dispatch, ownPros) => {
  return {
   	fetchContents:() => {
      let result = dispatch(action.fetchContents()).payload
      result.then(response => {
          if (response.status === 200) {
              dispatch(action.fetchContentsSuccess(response.data))
          } else {
            dispatch(action.fetchContentsFailture(response.statusText))
          }
        },
        error => {
          dispatch(action.fetchContentsFailture(error))
        }
      ).catch( error => dispatch(action.fetchContentsFailture("network error")))

   	}
  }
}


const WidgetContainer = connect(mapStateToProps, mapDispatchToProps)(Widget)

export default WidgetContainer
