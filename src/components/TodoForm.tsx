import * as React from 'react';
import { Todo } from '../models/Todo'

interface TodoFormProps {
  onSubmit(todo: Todo) : void;
}

interface TodoFormStatus {
  title: string;
}

class TodoForm extends React.Component<TodoFormProps, TodoFormStatus> {
  titleInput: React.RefObject<HTMLInputElement>;

  constructor(props: TodoFormProps) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: ''
    };

    this.titleInput = React.createRef<HTMLInputElement>();
  }
  componentDidMount() {
    this.titleInput.current.focus();
  }
  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const { onSubmit } = this.props;
    let { title } = this.state;
    title = title.trim();

    if (!title) {
      return
    }

    onSubmit({
      title,
      id: Date.now(),
      completed: false,
    });

    this.setState({
      title: '',
    });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="할일을 입력하세요" 
            value={title} 
            ref={this.titleInput}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              this.setState({
                title: e.currentTarget.value
              })
            }}/>
          <button type="submit">추가</button>
        </form>
    );
  }
}

export default TodoForm;
