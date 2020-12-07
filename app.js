// TODO
// var App = () => (
//     <div>Some cliche salutation</div>
// );

// ReactDOM.render(<App />, document.getElementById("actual-dom-element-where-I-want-to-render-my-component"));


class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        }
    }
    onListItemHover() {
        this.setState({
            done: !this.state.done
        })
    }
    render() {
        var style = { fontWeight: this.state.done ? '900': 'normal' }
        return (
            <li key={this.props.key} onMouseOver={this.onListItemHover.bind(this)} style={style}>{this.props.item}</li>
        )
    }
}

var GroceryList = (props) =>
    <ul>
        {props.items.map((item, key) =>
            <GroceryListItem item={item} key={key} />
        )}
    </ul>



ReactDOM.render(<GroceryList items={['Strawberries', 'Almondos', 'Oranges']}/>, document.getElementById('app'));