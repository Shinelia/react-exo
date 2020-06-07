class App extends React.Component {

    state = {
        comments : []
    }


    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    }

    
    handleSubmit = event => {
        event.preventDefault();
        let comments = [...this.state.comments, this.state];
        delete comments[comments.length-1].comments;
        this.setState({
           comments: comments
        })
        console.log(comments);
    }


    render() {
        return(
            <div>
            <p>Say something</p>
               <form>
                    <input type="text" name="name" placeholder="Your Name" id="name" className="name" onChange={this.handleChange} />
                    <input type="text" name="text" placeholder="Your Comment" id="message" className="message" onChange={this.handleChange} />
                    <button type="submit" onClick={this.handleSubmit}>Comment &#x27A4;</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById("app"))

