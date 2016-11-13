'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('../lib/jquery.knob.min.js');

require('../lib/excanvas.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var options = ['min', 'max', 'step', 'angleOffset', 'angleArc', 'stopper', 'readOnly', 'rotation', 'cursor', 'thickness', 'lineCap', 'width', 'height', 'displayInput', 'displayPrevious', 'fgColor', 'inputColor', 'font', 'fontWeight', 'bgColor', 'release', 'change', 'draw', 'cancel', 'format'];

var Knob = function (_React$Component) {
  _inherits(Knob, _React$Component);

  function Knob(props) {
    _classCallCheck(this, Knob);

    return _possibleConstructorReturn(this, (Knob.__proto__ || Object.getPrototypeOf(Knob)).call(this, props));
  }

  _createClass(Knob, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var mountOptions = {};
      Object.keys(this.props).forEach(function (opt) {
        if (options.indexOf(opt) !== -1) {
          mountOptions[opt] = _this2.props[opt];
        }
      });
      (0, _jquery2.default)(this.knobRef).knob(mountOptions);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var updateOptions = {};
      Object.keys(nextProps).forEach(function (opt) {
        if (options.indexOf(opt) !== -1) {
          updateOptions[opt] = nextProps[opt];
        }
      });
      (0, _jquery2.default)(this.knobRef).trigger('configure', updateOptions);
      if (nextProps.value) {
        (0, _jquery2.default)(this.knobRef).val(nextProps.value).trigger('change');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        {
          style: this.props.style
        },
        _react2.default.createElement('input', {
          type: 'text',
          ref: function ref(input) {
            return _this3.knobRef = input;
          },
          value: this.props.value || this.props.min || 0,
          onChange: function onChange() {}
        })
      );
    }
  }]);

  return Knob;
}(_react2.default.Component);

Knob.propTypes = {
  min: _react.PropTypes.number,
  max: _react.PropTypes.number,
  step: _react.PropTypes.number,
  angleOffset: _react.PropTypes.number,
  angleArc: _react.PropTypes.number,
  stopper: _react.PropTypes.bool,
  readOnly: _react.PropTypes.bool,
  rotation: _react.PropTypes.oneOf(['clockwise', 'anticlockwise']),
  cursor: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool]),
  thickness: _react.PropTypes.number,
  lineCap: _react.PropTypes.oneOf(['butt', 'round']),
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  displayInput: _react.PropTypes.bool,
  displayPrevious: _react.PropTypes.bool,
  fgColor: _react.PropTypes.string,
  inputColor: _react.PropTypes.string,
  font: _react.PropTypes.string,
  fontWeight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  bgColor: _react.PropTypes.string,
  release: _react.PropTypes.func,
  change: _react.PropTypes.func,
  draw: _react.PropTypes.func,
  cancel: _react.PropTypes.func,
  format: _react.PropTypes.func
};

exports.default = Knob;
