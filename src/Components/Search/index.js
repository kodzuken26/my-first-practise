import { connect } from "react-redux"
import { setMainState } from "../../store/actions"
import Search from './Search'

const mapStateToProps = (state) => ({ ...state })
const mapDispatchToProps = (dispatch) => ({
    setMainState: (payload) => dispatch(setMainState(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)