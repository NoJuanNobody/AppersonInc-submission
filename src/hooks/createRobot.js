import { useState, useEffect, useRef } from 'react';

const useCustomForm = ({ initialValues, onSubmit}) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});


  const formRendered = useRef(true);

  useEffect(() => {
    if (formRendered.current){
      setValues(initialValues);
      setErrors({});
      setTouched({});

    }
    formRendered.current = false;
  }, [initialValues])

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    event.persist()
    setValues({...values, [name]:value})
  }

  const handleSubmit= (event) =>{
    //  todo: handle duplicates
    if(event) event.preventDefault();
    setErrors({...errors});
    onSubmit({values, errors});
  }
  return {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
  }
}

export default useCustomForm;