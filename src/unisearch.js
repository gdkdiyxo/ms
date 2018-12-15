import React, { Component } from 'react'
import Select from 'react-select'
import { unis } from "../data"
import { addSearchQuery} from "./actions"
import { connect } from 'react-redux';

const MyComponent = () => (
  <Select options={unis} />
)


export default connect()((props) => (
    <div>
    <div>UniSearch</div>
  <Select

    isMulti
    name="colors"
    options={unis}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange = {e => (props.dispatch(addSearchQuery("unis", e)))}
  />
  </div>
));