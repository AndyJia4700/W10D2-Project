import React from 'react';

const Obj = [
    {title: "one", content:"I am the first"},
    { title: "two", content: "Second pane here"},
    { title: "three", content: "Third pane here"}
];

class Tabs extends React.Component {
    constructor (props) {
        super(props);
        this.state = Obj[0];
        // [{obj1}, {obj2}, {obj3}]
    }

    render () {
        // const titles = Obj.map(title, index) => { return }
        return (
            <div>
                <ul>
                    <h1 key="xxx">{this.state}</h1>
                </ul>
            </div>
        )
    }
}

export default Tabs;