import React, { Component } from 'react';
import Input from '../presentational/Input.jsx';

class FormContainer extends Component {
  constructor() {
    super()

    this.state = {
      seo_title: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({seo_title: event.target.value})
  }

  render() {
    const {seo_title} = this.state

    return (
      <form id="article-form">
        <Input text="SEO title"
               label="seo_title"
               type="text"
               id="seo_title"
               value={seo_title}
               handleChange={this.handleChange}
        />
      </form>
    )
  }
}

export default FormContainer;
