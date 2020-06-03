class Avatar extends React.Component {
	render() {
		var size = this.props.size;
		var no_pic = <i className="fas fa-user-astronaut avatar-default"></i>;
		var statusDot = this.props.status === 'online' ?
			<span className='avatar__status avatar__status--online'></span> :
			<span className='avatar__status avatar__status--offline'></span>;

		return (
			<div className='avatar avatar--default'
				 style={{width: size + 'px',
						 height: size + 'px',
						 fontSize: size / 2 + 'px'}}>

				{no_pic}
				{statusDot}
			</div>
		);
	}
}

class ContactBox extends React.Component {
	render() {
		var latestMessages = this.props.latestMessages;
		var status = this.props.status;
		return (
			<div className='contact-box'>

				<Avatar size='40' status={status} />
				<p className='contact-box__msg'>{latestMessages}</p>
			</div>
		);
	}
}

class Contacts extends React.Component {
	render() {
		var list = this.props.list;
		var contacts = [];
		list.forEach((val) => {
			contacts.push(<ContactBox latestMessages={val.latestMessages}
									  key={val.id}
									  status={val.status} />);
		});
		return (
			<div className='contacts'>
				{/*<ContactBox theme='#5ED2D2' latestMessages={list[0].latestMessages} />*/}
				{contacts}
			</div>
		);
	}
}

class VidCallBtn extends React.Component {
	render() {
		return (
			<button className='btn btn--circle'>
				<i className="fas fa-video"></i>
			</button>
		);
	}
}

class VoiceCallBtn extends React.Component {
	render() {
		return (
			<button className='btn btn--circle'>
				<i className="fas fa-phone-alt"></i>
			</button>
		);
	}
}

class InfoBtn extends React.Component {
	render() {
		return(
			<button className='btn btn--circle'>
				<i className="fas fa-info"></i>
			</button>
		);
	}
}

class SideBar extends React.Component {
	render() {
		return (
			<div className='sidebar'>
				<div className='sidebar__head'>
					<Avatar size='60' status='online' /> {/*add pic property & _default property*/}
				</div>
				<Contacts list={CONTACTS} />
			</div>
		);
	}
}

class Room extends React.Component {
	render() {
		return (
			<div className='room'>
				<RoomHead />
				<ChatZone />
				<InputZone />
			</div>
		);
	}
}

class RoomHead extends React.Component {
	render() {
		return (
			<div className='room__head'>
				<Avatar size='40' status='offline' />
				<div className='trioBtn'>
					<VidCallBtn />
					<VoiceCallBtn />
					<InfoBtn />
				</div>
			</div>
		);	
	}
}

class ChatZone extends React.Component {
	render() {
		var messages = [
			{
				type: 1,
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis, sapien quis maximus ultricies, libero leo pellentesque mi, et rutrum eros massa id tortor.'
			},
			{
				type: 2,
				content: 'Aenean sollicitudin lorem at nulla consequat, eget porta arcu egestas.'
			},
			{
				type: 1,
				content: 'Mauris quis condimentum odio.'
			},
			{
				type: 1,
				content: 'Sed molestie ut ex id pharetra. Proin eu tincidunt sapien, a ultrices est. Praesent mattis ultricies dui tempus fringilla. Proin efficitur tincidunt tellus egestas consectetur.'
			},
			{
				type: 2,
				content: 'Curabitur condimentum felis quis eros imperdiet rutrum. Nullam accumsan vulputate tortor, sed fringilla ligula tempus at.'
			}
		];


		var chatlines = [];
		messages.forEach((val, id) => chatlines.push(<ChatLine type={val.type} 
															   content={val.content} 
															   key={id} />));
		return (
			<div className='chatzone'>
				{chatlines}
			</div>
		);
	}
}

class ChatLine extends React.Component {
	render() {
		var type = this.props.type;
		var content = this.props.content;
		return (
			<div className='chatline'>
				<ChatBox content={content} type={type} />
			</div>
		);
	}
}

class ChatBox extends React.Component {
	render() {
		var type = this.props.type;
		var content = this.props.content;
		var temp = type === 1 ? 
			(
				<div className={'chatbox chattype' + type}>
					<Avatar size='30' status='offline' />
					<ChatBubble content={content} />
				</div>
			) :
			(
				<div className={'chatbox chattype' + type}>
					<ChatBubble content={content} />
				</div>
			);
		return (
			<React.Fragment>
				{temp}
			</React.Fragment>
		);
	}
}

class ChatBubble extends React.Component {
	render() {
		var content = this.props.content;
		return (
			<div className='chatbubble'>
				{content}
			</div>
		);
	}
}

class InputZone extends React.Component {
	render() {
		return (
			<div className='inputzone'>
				<form>
					<div className='inputzone__input'>
						<input type='text'></input>
					</div>
					<button className='inputzone__sendbtn'>
						<i className="fas fa-paper-plane"></i>
					</button>
				</form>
			</div>
		);
	}
}


const THEME = 'light';

const CONTACTS = [
	{
		id: 10039,
		latestMessages: 'Donec eu euismod leo...',
		status: 'offline'
	},
	{
		id: 5,
		latestMessages: 'Nam ullamcorper...',
		status: 'online'
	},
	{
		id: 109,
		latestMessages: 'Donec eu euismod leo...',
		status: 'offline'
	},
	{
		id: 500,
		latestMessages: 'Nam ullamcorper...',
		status: 'online'
	},
	{
		id: 39,
		latestMessages: 'Donec eu euismod leo...',
		status: 'offline'
	},
	{
		id: 201,
		latestMessages: 'Nam ullamcorper...',
		status: 'online'
	},
	{
		id: 100,
		latestMessages: 'Donec eu euismod leo...',
		status: 'online'
	},
	{
		id: 4,
		latestMessages: 'Nam ullamcorper...',
		status: 'online'
	},
	{
		id: 9,
		latestMessages: 'Donec eu euismod leo...',
		status: 'offline'
	},
	{
		id: 69,
		latestMessages: 'Nam ullamcorper...',
		status: 'offline'
	},
	{
		id: 19,
		latestMessages: 'Donec eu euismod leo...',
		status: 'offline'
	},
	{
		id: 269,
		latestMessages: 'Nam ullamcorper...',
		status: 'online'
	},
	{
		id: 99,
		latestMessages: 'Donec eu euismod leo...',
		status: 'offline'
	},
	{
		id: 609,
		latestMessages: 'Nam ullamcorper...',
		status: 'offline'
	}
];

class App extends React.Component {
	render() {
		return (
			<div className='project-chat'>
				<SideBar />
				<Room />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);