import React from "react";
class MyClassApi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }

    getData(){
        var url = 'https://jsonplaceholder.typicode.com/todos';
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json())
        .then(myjson => {
            this.setState({
                todos: myjson
            });
        });
    }

    componentDidMount(){
        this.getData();
    }

    render() {
        return (
            <div>
                <h2>List of Todo Items by Class Component</h2>
                <ul>
                    {this.state.todos.map((each) => (
                        <li key={each.id}> {each.title} </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default MyClassApi;