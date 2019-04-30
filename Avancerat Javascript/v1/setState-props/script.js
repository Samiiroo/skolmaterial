class MyStatefulComponent extends React.Component {
 constructor(props) {
 super(props); // Det är viktigt att anropa superklassens konstruktor
 this.state = { color: 'black' };
 this.updateColor = this.updateColor.bind(this);
 }
 updateColor() {
     if (this.state.color === 'black'){
        this.setState({ color: 'red' });
     } else {
        this.setState({ color: 'black' });
     }
 }

 render() {
        return React.createElement('p', {style: { color: this.state.color }, onClick: this.updateColor,
    }, 'Click me!');
 }
}

const target = document.querySelector('#target'); // <-- peka på diven "target" i DOM:en
ReactDOM.render(React.createElement(MyStatefulComponent), target);
