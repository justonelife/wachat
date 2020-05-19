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
			var size = this.props.size + 'px';
			var no_pic = React.createElement('i', { className: 'fas fa-user-astronaut avatar-default' });
			return React.createElement(
				'div',
				{ className: 'avatar avatar--default',
					style: { width: size,
						height: size } },
				no_pic
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
			var type = this.props.type;
			var bg = this.props.theme;

			var box = type === 'blank' ? React.createElement(
				'div',
				{ className: 'contact-box',
					style: { backgroundColor: bg } },
				React.createElement(
					'button',
					{ className: 'contact-box__addBtn' },
					React.createElement('i', { className: 'fas fa-user-plus' })
				)
			) : React.createElement(
				'h1',
				null,
				'wrong'
			);

			return React.createElement(
				React.Fragment,
				null,
				box
			);
		}
	}]);

	return ContactBox;
}(React.Component);

var App = function (_React$Component3) {
	_inherits(App, _React$Component3);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				React.Fragment,
				null,
				React.createElement(Avatar, { size: '60' }),
				' ',
				React.createElement(ContactBox, { theme: '#5ED2D2', type: 'blank' })
			);
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
