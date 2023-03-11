import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

export default class FormTemplate extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='발전소명' placeholder='홍길동 발전소' />
          <Form.Input fluid label='대표자' placeholder='홍길동' />
        </Form.Group>
        
        <Form.Group inline>
          <label>수정 유형</label>
          <Form.Radio
            label='전체'
            value='sm'
            checked={value === 'sm'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='소재지 변경'
            value='md'
            checked={value === 'md'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='전화번호 변경'
            value='lg'
            checked={value === 'lg'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='설비규모 변경'
            value='lg'
            checked={value === 'lg'}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Input fluid label='서류명' />
        </Form.Group>
      </Form>

      
    )
  }
};
