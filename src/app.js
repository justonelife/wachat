class Avatar extends React.Component {
	render() {
		var size = this.props.size + 'px';
		var no_pic = <i className="fas fa-user-astronaut avatar-default"></i>;
		return (
			<div className='avatar avatar--default'
				 style={{width: size,
						 height: size}}>

				{no_pic}
			</div>
		);
	}
}

class ContactBox extends React.Component {
	render() {
		var type = this.props.type;
		var bg = this.props.theme;

		var box = type === 'blank' ?
			(
				<div className='contact-box' 
					 style={{backgroundColor: bg}}>

					<button className='contact-box__addBtn'>
						<i className="fas fa-user-plus"></i>
					</button>
				</div>
			) :
			( 
				<h1>wrong</h1>
			);

		return (
			<React.Fragment>
				{box}
			</React.Fragment>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Avatar size='60' /> {/*add pic property*/}
				<ContactBox theme='#5ED2D2' type='blank' />
			</React.Fragment>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);