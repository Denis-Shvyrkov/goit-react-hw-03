import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import fc from './ContactForm.module.css';
import { ErrorMessage } from 'formik';

const ContactForm = ({ onSubmit, initialValues, validationSchema }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
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
