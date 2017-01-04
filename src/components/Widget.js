import React, {Component} from 'react'
import Pagination  from 'react-bootstrap/lib/Pagination'

import spinner from '../assets/images/infinity.gif'

class Widget extends Component{
  constructor(props) {
    super(props)
    this.state = {page: 1}
    this.selectPage = this.selectPage.bind(this)
  }
  selectPage = page => this.setState({page:page})

  componentWillMount(){
    this.props.fetchContents()
  }

  componentWillReceiveProps(nextProps) {
    // nextProps.fetchContents()
  }

  tableHead = () => (
    <thead>
      <tr>
        <th>albumId</th>
        <th>id</th>
        <th>title</th>
        <th>url</th>
        <th>thumbnailUrl</th>
      </tr>
    </thead>
  )

  tableBody = (data, limit, offset) => (
    <tbody>
      {
        data.map((item, index)=> (
          <tr key={index}>
            <td>{item.albumId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.url}</td>
            <td>{item.thumbnailUrl}</td>
          </tr>
        )).filter((item,index) => {
            return (offset <= index) && index < (offset + limit)
          })
      }
    </tbody>
  )
  render(){
    const { data, loading, error } = this.props
    let limit = 5
    let page = this.state.page
    let pagerLength = Math.ceil(data.length/limit)

    // const spinner = 'http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif'


    if(loading) {
      return <div className="loader"><img src={spinner} /></div>
    }

    if(error){
      return <p> {error} </p>
    }

    return (
      <div className="container">
      <h1>React Demo - rendering 5000 items in a list</h1>
      <table className="widget-wrapper table table-striped table-bordered table-condensed table-hover">
      {this.tableHead()}
      {this.tableBody(data, limit, (page - 1)*limit)}
      </table>
      <Pagination
				  prev
				  next
				  first
				  last
				  ellipsis
				  boundaryLinks
				  items={pagerLength}
				  maxButtons={5}
				  activePage={page}
				  onSelect={this.selectPage} />
      </div>
    )
  }

}


export default Widget
