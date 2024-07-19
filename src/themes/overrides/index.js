import { merge } from 'lodash';
import Button from './button'
import TextField from './textfield';

const ComponentsOverrides = (theme) => {
  return merge(
    Button(theme),
    TextField(theme)
  );
}

export default ComponentsOverrides