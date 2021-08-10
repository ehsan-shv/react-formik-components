# react-formik-components

[![npm version](https://badge.fury.io/js/react-formik-components.svg)](https://badge.fury.io/js/react-formik-components)

React reusable and customizable input components based on [formik](https://formik.org/docs/api/formik) library.

**include:**

- text input
- number input
- password input
- textarea input
- select (based on [react-select](https://github.com/JedWatson/react-select))
- checkbox
- radiobutton

## Getting Started:

**install formik:**

    $ npm install formik --save

**install react-formik-components:**

     $ npm i react-formik-components

**you can install [yup](https://github.com/jquense/yup) for value parsing and validation.**

**install yup:**

    $ npm install -S yup

## text input, number input, password input and textarea:

    import { Formik, Form, Field } from 'formik'
    import * as Yup from 'yup'
    import  {  FormikInput  }  from  'react-formik-components'

    const formSchema = Yup.object().shape({
      username: Yup.string().required('Username Required'),
      password: Yup.string()
        .max(10, 'Too Long! Max 10 Char')
        .min(5, 'Too Short! Min 5 Char')
        .required('Password Required'),
      count: Yup.number().required('Count Required'),
      message: Yup.string().required('message Required'),
    })

    const Form = () => {
      return (
        <div>
          <Formik
            initialValues={{
              username: '',
              password: '',
              message: '',
              number: undefined,
            }}
            initialStatus={{
              username: '',
              password: '',
              message: '',
              number: '',
            }}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
              console.log(values)
              actions.setStatus({ //set status })
            }}
          >
            {() => (
              <Form>
                <Field
                  name="username"
                  label="Username"
                  placeholder="username"
                  type="text"
                  component={FormikInput}
                />
                <Field
                  name="password"
                  label="Password"
                  placeholder="password"
                  type="password"
                  component={FormikInput}
                />
                <Field
                  name="count"
                  label="Count"
                  placeholder="count"
                  type="number"
                  component={FormikInput}
                />
                <Field
                  name="message"
                  label="Message"
                  placeholder="message"
                  type="textarea"
                  component={FormikInput}
                />
                <button type="submit">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )
    }

    export default Form

## select:

    import { Formik, Form } from 'formik'
    import * as Yup from 'yup'
    import { FormikSelect } from 'react-formik-components'

    const job = {
      name: 'job',
      items: [
        { value: 'developer', label: 'Software Developer' },
        { value: 'chef', label: 'Chef' },
        { value: 'enginner', label: 'Enginner' },
        { value: 'painter', label: 'Painter' },
      ],
    }

    const jobs = {
      name: 'jobs',
      items: [
        { value: 'developer', label: 'Developer' },
        { value: 'chef', label: 'Chef' },
        { value: 'enginner', label: 'Enginner' },
        { value: 'painter', label: 'Painter' },
      ],
    }

    const FormSchema = Yup.object().shape({
      job: Yup.object()
        .shape({
          label: Yup.string(),
          value: Yup.string(),
        })
        .nullable()
        .required('job is required'),
      jobs: Yup.array()
        .min(1, 'Select at least one field')
        .of(
          Yup.object()
            .shape({
              label: Yup.string(),
              value: Yup.string(),
            })
            .nullable()
        ),
    })

    const Form = () => {
      return (
        <div>
          <Formik
            initialValues={{
              job: {},
              jobs: [],
            }}
            initialStatus={{
              job: '',
              jobs: '',
            }}
            validationSchema={FormSchema}
            onSubmit={(values, actions) => {
              console.log(values)
              actions.setStatus({ //set status })
            }}
          >
            {({
              values,
              setFieldValue,
              setFieldTouched,
              touched,
              errors,
              status,
            }) => (
              <Form>
                <FormikSelect
                  name={job.name}
                  label={job.name}
                  id={job.name}
                  status={status.job}
                  options={job.items}
                  value={values.job}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
                  touched={touched.job}
                  error={errors.job}
                />
                <FormikSelect
                  name={jobs.name}
                  label={jobs.name}
                  id={jobs.name}
                  isMulti={true}
                  status={status.jobs}
                  options={jobs.items}
                  value={values.jobs}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
                  touched={touched.jobs}
                  error={errors.jobs}
                />
                <button type="submit">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )
    }

    export default Form

## checkbox:

    import { Formik, Form, Field, FieldArray } from 'formik'
    import * as Yup from 'yup'
    import { FormikCheckBox } from 'react-formik-components'

    const categories = {
      name: 'categories',
      items: ['React', 'Vue', 'Angular', 'Svelt'],
    }

    const Form = () => {
      return (
        <div>
          <Formik
            initialValues={{
              categories: []
            }}
            onSubmit={(values, actions) => {
              console.log(values)
              actions.setStatus({ //set status })
            }}
          >
            {() => (
              <Form>
                <FieldArray
                  name={categories.name}
                  render={(arrayHelpers) =>
                    categories.items.map((item, index) => {
                      return (
                        <Field
                          key={`${item}-${index}`}
                          name={item}
                          render={() => {
                            return (
                              <FormikCheckBox
                                id={`${categories.name}-${item}-${index}`}
                                name={item}
                                label={item}
                                arrayHelpers={arrayHelpers}
                              />
                            )
                          }}
                        />
                      )
                    })
                  }
                />
                <button type="submit">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )
    }

    export default Form

## radiobutton:

    import { Formik, Form, Field, FieldArray } from 'formik'
    import { FormikRadioButton } from 'react-formik-components'

    const position = {
      name: 'position',
      items: ['Fron-end', 'Back-end', 'Full-stack'],
    }

    const Form = () => {
      return (
        <div>
          <Formik
            initialValues={{
              position: '',
            }}
            onSubmit={(values, actions) => {
              console.log(values)
              actions.setStatus({ //set status })
            }}
          >
            {() => (
              <Form>
                <FieldArray
                  name={position.name}
                  render={(arrayHelpers) =>
                    radio.items.map((item, index) => {
                      return (
                        <Field
                          key={`${item}-${index}`}
                          name={item}
                          render={({ field }) => {
                            return (
                              <FormikRadioButton
                                {...field}
                                id={`${position.name}-${item}-${index}`}
                                name={position.name}
                                arrayHelpers={arrayHelpers}
                                label={item}
                                value={item}
                              />
                            )
                          }}
                        />
                      )
                    })
                  }
                />
                <button type="submit">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )
    }

    export default Form

## styles:

just change value or overwrite in your css.

    :root {

    // font size

    --react-formik-components-font-size: 1rem;

    // colors

    --react-formik-components-color-white: #ffffff;

    --react-formik-components-color: #212121;

    --react-formik-components-border-color: #bdbdbd;

    --react-formik-components-radio-button-fill-color: #1976d2;

    --react-formik-components-error-color: #d32f2f;

    // border-radius

    --react-formik-components-border-radius: 0;

    // label

    --react-formik-components-label-padding-x-start: 24px;

    --react-formik-components-label-before-position-x-start: 0;

    --react-formik-components-label-before-position-y-start: 2px;

    --react-formik-components-label-width: 16px;

    --react-formik-components-label-height: 16px;

    // checkbox label

    --react-formik-components-checkbox-label-background-size: 16px;

    --react-formik-components-checkbox-label-background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='%23ffffff'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z'/%3E%3C/svg%3E");

    // radiobutton

    --react-formik-components-radio-label-background-size: 12px;

    --react-formik-components-radio-label-background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cg%3E%3Ccircle cx='12' cy='12' r='12' fill='%231976d2'%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");

    // input

    --react-formik-components-input-height: 40px;

    --react-formik-components-input-textarea-height: 80px;

    --react-formik-components-input-margin-y: 8px 0;

    //select

    --react-formik-components-select-min-height: 40px;

    //inline

    --react-formik-components-inline-margin-x: 16px;

    }
