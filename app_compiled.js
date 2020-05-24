var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Avatar = function (_React$Component) {
	_inherits(Avatar, _React$Component);

	function Avatar() {
		_classCallCheck(this, Avatar);

		return _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
	}

	_createClass(Avatar, [{
		key: 'render',
		value: function render() {
			var size = this.props.size;
			var no_pic = React.createElement('i', { className: 'fas fa-user-astronaut avatar-default' });
			var statusDot = this.props.status === 'online' ? React.createElement('span', { className: 'avatar__status avatar__status--online' }) : React.createElement('span', { className: 'avatar__status avatar__status--offline' });

			return React.createElement(
				'div',
				{ className: 'avatar avatar--default',
					style: { width: size + 'px',
						height: size + 'px',
						fontSize: size / 2 + 'px' } },
				no_pic,
				statusDot
			);
		}
	}]);

	return Avatar;
}(React.Component);

var ContactBox = function (_React$Component2) {
	_inherits(ContactBox, _React$Component2);

	function ContactBox() {
		_classCallCheck(this, ContactBox);

		return _possibleConstructorReturn(this, (ContactBox.__proto__ || Object.getPrototypeOf(ContactBox)).apply(this, arguments));
	}

	_createClass(ContactBox, [{
		key: 'render',
		value: function render() {
			var bg = this.props.theme;
			var latestMessages = this.props.latestMessages;
			var status = this.props.status;
			return React.createElement(
				'div',
				{ className: 'contact-box',
					style: { backgroundColor: bg } },
				React.createElement(Avatar, { size: '40', status: status }),
				React.createElement(
					'p',
					{ className: 'contact-box__msg' },
					latestMessages
				)
			);
		}
	}]);

	return ContactBox;
}(React.Component);

var Contacts = function (_React$Component3) {
	_inherits(Contacts, _React$Component3);

	function Contacts() {
		_classCallCheck(this, Contacts);

		return _possibleConstructorReturn(this, (Contacts.__proto__ || Object.getPrototypeOf(Contacts)).apply(this, arguments));
	}

	_createClass(Contacts, [{
		key: 'render',
		value: function render() {
			var list = this.props.list;
			var contacts = [];
			list.forEach(function (val) {
				contacts.push(React.createElement(ContactBox, { theme: '#5ED2D2',
					latestMessages: val.latestMessages,
					key: val.id,
					status: val.status }));
			});
			return React.createElement(
				'div',
				{ className: 'contacts' },
				contacts
			);
		}
	}]);

	return Contacts;
}(React.Component);

var VidCallBtn = function (_React$Component4) {
	_inherits(VidCallBtn, _React$Component4);

	function VidCallBtn() {
		_classCallCheck(this, VidCallBtn);

		return _possibleConstructorReturn(this, (VidCallBtn.__proto__ || Object.getPrototypeOf(VidCallBtn)).apply(this, arguments));
	}

	_createClass(VidCallBtn, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'button',
				{ className: 'btn btn--circle' },
				React.createElement('i', { className: 'fas fa-video' })
			);
		}
	}]);

	return VidCallBtn;
}(React.Component);

var VoiceCallBtn = function (_React$Component5) {
	_inherits(VoiceCallBtn, _React$Component5);

	function VoiceCallBtn() {
		_classCallCheck(this, VoiceCallBtn);

		return _possibleConstructorReturn(this, (VoiceCallBtn.__proto__ || Object.getPrototypeOf(VoiceCallBtn)).apply(this, arguments));
	}

	_createClass(VoiceCallBtn, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'button',
				{ className: 'btn btn--circle' },
				React.createElement('i', { className: 'fas fa-phone-alt' })
			);
		}
	}]);

	return VoiceCallBtn;
}(React.Component);

var InfoBtn = function (_React$Component6) {
	_inherits(InfoBtn, _React$Component6);

	function InfoBtn() {
		_classCallCheck(this, InfoBtn);

		return _possibleConstructorReturn(this, (InfoBtn.__proto__ || Object.getPrototypeOf(InfoBtn)).apply(this, arguments));
	}

	_createClass(InfoBtn, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'button',
				{ className: 'btn btn--circle' },
				React.createElement('i', { className: 'fas fa-info' })
			);
		}
	}]);

	return InfoBtn;
}(React.Component);

var SideBar = function (_React$Component7) {
	_inherits(SideBar, _React$Component7);

	function SideBar() {
		_classCallCheck(this, SideBar);

		return _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).apply(this, arguments));
	}

	_createClass(SideBar, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'sidebar' },
				React.createElement(
					'div',
					{ className: 'sidebar__head' },
					React.createElement(Avatar, { size: '60', status: 'online' }),
					' '
				),
				React.createElement(Contacts, { list: CONTACTS })
			);
		}
	}]);

	return SideBar;
}(React.Component);

var Room = function (_React$Component8) {
	_inherits(Room, _React$Component8);

	function Room() {
		_classCallCheck(this, Room);

		return _possibleConstructorReturn(this, (Room.__proto__ || Object.getPrototypeOf(Room)).apply(this, arguments));
	}

	_createClass(Room, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'room' },
				React.createElement(RoomHead, null),
				React.createElement(ChatZone, null)
			);
		}
	}]);

	return Room;
}(React.Component);

var RoomHead = function (_React$Component9) {
	_inherits(RoomHead, _React$Component9);

	function RoomHead() {
		_classCallCheck(this, RoomHead);

		return _possibleConstructorReturn(this, (RoomHead.__proto__ || Object.getPrototypeOf(RoomHead)).apply(this, arguments));
	}

	_createClass(RoomHead, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'room__head' },
				React.createElement(Avatar, { size: '40', status: 'offline' }),
				React.createElement(
					'div',
					{ className: 'trioBtn' },
					React.createElement(VidCallBtn, null),
					React.createElement(VoiceCallBtn, null),
					React.createElement(InfoBtn, null)
				)
			);
		}
	}]);

	return RoomHead;
}(React.Component);

var ChatZone = function (_React$Component10) {
	_inherits(ChatZone, _React$Component10);

	function ChatZone() {
		_classCallCheck(this, ChatZone);

		return _possibleConstructorReturn(this, (ChatZone.__proto__ || Object.getPrototypeOf(ChatZone)).apply(this, arguments));
	}

	_createClass(ChatZone, [{
		key: 'render',
		value: function render() {

			return React.createElement(
				'div',
				{ className: 'chatzone' },
				React.createElement(ChatLine, null)
			);
		}
	}]);

	return ChatZone;
}(React.Component);

var ChatLine = function (_React$Component11) {
	_inherits(ChatLine, _React$Component11);

	function ChatLine() {
		_classCallCheck(this, ChatLine);

		return _possibleConstructorReturn(this, (ChatLine.__proto__ || Object.getPrototypeOf(ChatLine)).apply(this, arguments));
	}

	_createClass(ChatLine, [{
		key: 'render',
		value: function render() {
			var type = 1;{/*1: their chat, 2 your chat*/}
			var content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis, sapien quis maximus ultricies, libero leo pellentesque mi, et rutrum eros massa id tortor.';

			return React.createElement(
				'div',
				{ className: 'chatline' },
				React.createElement(ChatBox, { content: content, type: type })
			);
		}
	}]);

	return ChatLine;
}(React.Component);

var ChatBox = function (_React$Component12) {
	_inherits(ChatBox, _React$Component12);

	function ChatBox() {
		_classCallCheck(this, ChatBox);

		return _possibleConstructorReturn(this, (ChatBox.__proto__ || Object.getPrototypeOf(ChatBox)).apply(this, arguments));
	}

	_createClass(ChatBox, [{
		key: 'render',
		value: function render() {
			var type = this.props.type;
			var content = this.props.content;
			var temp = type === 1 ? React.createElement(
				'div',
				{ className: 'chatbox chattype' + type },
				React.createElement(Avatar, { size: '30', status: 'offline' }),
				React.createElement(ChatBubble, { content: content })
			) : React.createElement(
				'div',
				{ className: 'chatbox chattype' + type },
				React.createElement(ChatBubble, { content: content })
			);
			return React.createElement(
				React.Fragment,
				null,
				temp
			);
		}
	}]);

	return ChatBox;
}(React.Component);

var ChatBubble = function (_React$Component13) {
	_inherits(ChatBubble, _React$Component13);

	function ChatBubble() {
		_classCallCheck(this, ChatBubble);

		return _possibleConstructorReturn(this, (ChatBubble.__proto__ || Object.getPrototypeOf(ChatBubble)).apply(this, arguments));
	}

	_createClass(ChatBubble, [{
		key: 'render',
		value: function render() {
			var content = this.props.content;
			return React.createElement(
				'div',
				{ className: 'chatbubble' },
				content
			);
		}
	}]);

	return ChatBubble;
}(React.Component);

var THEME = 'light';

var CONTACTS = [{
	id: 10039,
	latestMessages: 'Donec eu euismod leo...',
	status: 'offline'
}, {
	id: 5,
	latestMessages: 'Nam ullamcorper...',
	status: 'online'
}, {
	id: 109,
	latestMessages: 'Donec eu euismod leo...',
	status: 'offline'
}, {
	id: 500,
	latestMessages: 'Nam ullamcorper...',
	status: 'online'
}, {
	id: 39,
	latestMessages: 'Donec eu euismod leo...',
	status: 'offline'
}, {
	id: 201,
	latestMessages: 'Nam ullamcorper...',
	status: 'online'
}, {
	id: 100,
	latestMessages: 'Donec eu euismod leo...',
	status: 'online'
}, {
	id: 4,
	latestMessages: 'Nam ullamcorper...',
	status: 'online'
}, {
	id: 9,
	latestMessages: 'Donec eu euismod leo...',
	status: 'offline'
}, {
	id: 69,
	latestMessages: 'Nam ullamcorper...',
	status: 'offline'
}, {
	id: 19,
	latestMessages: 'Donec eu euismod leo...',
	status: 'offline'
}, {
	id: 269,
	latestMessages: 'Nam ullamcorper...',
	status: 'online'
}, {
	id: 99,
	latestMessages: 'Donec eu euismod leo...',
	status: 'offline'
}, {
	id: 609,
	latestMessages: 'Nam ullamcorper...',
	status: 'offline'
}];

var App = function (_React$Component14) {
	_inherits(App, _React$Component14);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'project-chat' },
				React.createElement(SideBar, null),
				React.createElement(Room, null)
			);
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
