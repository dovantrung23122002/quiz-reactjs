import React from "react"


class MyComponent extends React.Component {
    state = {
        name: 'eric',
        address: 'Ha Noi',
        age: 26
    }
    render(){
        return (
            <div>
                <p>My name is {this.state.name} and I'm from {this.state.address}</p>
                <button>Click me</button>

            </div>
        )
    }
}

export default MyComponent