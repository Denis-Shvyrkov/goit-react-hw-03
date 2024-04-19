import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import fc from './ContactForm.module.css';
import { ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';

const ContactForm = ({ onAdd, initialValues, validationSchema }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = { id: nanoid(10), name: values.name, number: values.number };
    onAdd(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={fc.form}>
        <div className={fc.formInput}>
          <label className={fc.formLabel} htmlFor={nameFieldId}>
            Name
          </label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={fc.error} name="name" component="span" />
        </div>
        <div className={fc.formInput}>
          <label className={fc.formLabel} htmlFor={numberFieldId}>
            Number
          </label>
          <Field type="tel" name="number" id={numberFieldId} />
          <ErrorMessage className={fc.error} name="number" component="span" />
        </div>
        <button className={fc.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
