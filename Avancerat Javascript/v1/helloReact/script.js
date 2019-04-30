class MyFirstComponent extends React.Component{
  render(){
    return React.createElement('p',{},'Hello World!');
  }
}
ReactDOM.render(React.createElement(MyFirstComponent),
document.querySelector('#target'));
