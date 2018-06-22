import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Slider, Form, Radio } from 'antd';

const RadioGroup = Radio.Group;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const style = {
  display: 'flex',
  flexDirection: 'column'
}

class SettingsDisplay extends Component {
  constructor(props) {
    super(props);
    this.onChangeSlider = this.onChangeSlider.bind(this);
    this.onChangeMetric = this.onChangeMetric.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
  }
  onChangeSlider(value) {
    this.props.dispatch({
      type: 'DECIMAL_CHANGE',
      value
    });
  }
  onChangeMetric(e) {
    this.props.dispatch({
      type: 'METRIC_CHANGE',
      value: e.target.value
    });
  }
  onChangeType(e) {
    this.props.dispatch({
      type: 'BG_TYPE_CHANGE',
      value: e.target.value
    });
  }
  render() {
    return (
      <div style={style}>
        <Form.Item
          {...formItemLayout}
          label="Decimal Points"
        >
          <Slider min={1} max={12} onChange={this.onChangeSlider} value={this.props.progress.decimal} />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Progress Metric"
        >
          <RadioGroup value={this.props.progress.metric} onChange={this.onChangeMetric}>
            <Radio value="year">Year</Radio>
            <Radio value="month">Month</Radio>
            <Radio value="week">Week</Radio>
            <Radio value="day">Day</Radio>
          </RadioGroup>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Background"
          style={{ flexGrow: 1 }}
        >
          <RadioGroup value={this.props.imageUrl.type} onChange={this.onChangeType}>
            <Radio value="image">Daily Image</Radio>
            <Radio value="gradient">Random Gradient</Radio>
          </RadioGroup>
        </Form.Item>
        <a href="https://buymeacoff.ee/mubaris" target="_blank" rel="noopener noreferrer">
          <img src="bmc.png" alt="Buy Me A Coffee" />
        </a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsDisplay);