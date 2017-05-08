import React, {PropTypes} from 'react';

function JediForm({submit}) {
  return (
    <form onSubmit={submit}>
      Add new Jedi : <input name="jedi"/>
    </form>
  );
}

JediForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default JediForm;
