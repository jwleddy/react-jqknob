import React, { PropTypes } from 'react';
import $ from 'jquery';
import '../lib/jquery.knob.min.js';
import '../lib/excanvas.js';

const options = [
  'min',
  'max',
  'step',
  'angleOffset',
  'angleArc',
  'stopper',
  'readOnly',
  'rotation',
  'cursor',
  'thickness',
  'lineCap',
  'width',
  'height',
  'displayInput',
  'displayPrevious',
  'fgColor',
  'inputColor',
  'font',
  'fontWeight',
  'bgColor',
  'release',
  'change',
  'draw',
  'cancel',
  'format'
];

class Knob extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mountOptions = {};
    Object.keys(this.props).forEach(opt => {
      if (options.indexOf(opt) !== -1) {
        mountOptions[opt] = this.props[opt];
      }
    });
    $(this.knobRef).knob(mountOptions);
  }

  componentWillReceiveProps(nextProps) {
    const updateOptions = {};
    Object.keys(nextProps).forEach(opt => {
      if (options.indexOf(opt) !== -1) {
        updateOptions[opt] = nextProps[opt];
      }
    });
    $(this.knobRef)
      .trigger('configure', updateOptions);
    if (nextProps.value) {
      $(this.knobRef)
        .val(nextProps.value)
        .trigger('change');
    }
  }

  render() {
    return(
    <div
      style={this.props.style}
    >
      <input
        type="text"
        ref={(input) => this.knobRef = input}
        value={this.props.value || this.props.min || 0}
        onChange={() => {}}
      />
    </div>
    );
  }
}

Knob.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  angleOffset: PropTypes.number,
  angleArc: PropTypes.number,
  stopper: PropTypes.bool,
  readOnly: PropTypes.bool,
  rotation: PropTypes.oneOf([
    'clockwise',
    'anticlockwise'
  ]),
  cursor: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool
  ]),
  thickness: PropTypes.number,
  lineCap: PropTypes.oneOf([
    'butt',
    'round'
  ]),
  width: PropTypes.number,
  height: PropTypes.number,
  displayInput: PropTypes.bool,
  displayPrevious: PropTypes.bool,
  fgColor: PropTypes.string,
  inputColor: PropTypes.string,
  font: PropTypes.string,
  fontWeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  bgColor: PropTypes.string,
  release: PropTypes.func,
  change: PropTypes.func,
  draw: PropTypes.func,
  cancel: PropTypes.func,
  format: PropTypes.func
};

export default Knob;
