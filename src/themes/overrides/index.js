import { merge } from 'lodash';
import Button from './button'
import TextField from './textfield';
import Helpertext from './helpertext';
import Autocomplete from './autocomplete';

const ComponentsOverrides = (theme) => {
  return merge(
    Button(theme),
    TextField(theme),
    Helpertext(theme),
    Autocomplete(theme),
  );
}

export default ComponentsOverrides