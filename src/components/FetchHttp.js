import React, { Component } from 'react'

export class FetchHttp extends Component {
    constructor(props){
        super(props);
        this.state={mydata:[]}
    }
    postData=()=>{
          const URL="https://jsonplaceholder.typicode.com/posts";
          fetch(URL)
          .then(res=> res.json())
          .then(data=>{
              console.log(data)
              this.setState({mydata:data})
          })
          .catch(err=> console.log("Error - "+err))
    }
    render() {
        return (
            <div className="container">
                <h2> Post</h2>
                <button onClick={this.postData}> Posts</button>
                {this.state.mydata.length>0 && 
                    <section>
                        {this.state.mydata.map(post=>
                            <div>
                                 <h4>{post.title}</h4>
                                 <article>{post.body}</article>
                                 <hr/>
                            </div>)}
                    </section>}

               
            </div>
        )
    }
}

export default FetchHttp
