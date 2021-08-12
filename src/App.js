import { Formik, Form, Field, FieldArray } from 'formik'
import FormikInput from './lib/components/formikInput'
import FormikSelect from './lib/components/formikSelect'
import FormikCheckBox from './lib/components/formikCheckBox'
import FormikRadioButton from './lib/components/formikRadioButton'
import * as Yup from 'yup'
import './lib/components/styles/main.scss'
import './App.scss'

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

const position = {
  name: 'position',
  items: ['Fron-end', 'Back-end', 'Full-stack'],
}

const categories = {
  name: 'categories',
  items: ['React', 'Vue', 'Angular', 'Svelt'],
}

const formSchema = Yup.object().shape({
  username: Yup.string().required('Username Required'),
  password: Yup.string()
    .max(10, 'Too Long! Max 10 Char')
    .min(5, 'Too Short! Min 5 Char')
    .required('Password Required'),
  count: Yup.number().required('Count Required'),
  message: Yup.string().required('message Required'),
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

const App = () => {
  return (
    <div className="app">
      <Formik
        initialValues={{
          username: '',
          password: '',
          message: '',
          count: '',
          job: {},
          jobs: [],
          categories: [],
          position: '',
        }}
        initialStatus={{
          username: '',
          password: '',
          message: '',
          count: '',
          job: '',
          jobs: '',
        }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          alert(`
            username: ${values.username},
            password: ${values.password},
            count: ${values.count},
            message: ${values.message},
            job: ${values.job.value},
            jobs: ${values.jobs.map((job) => job.value)},
            categories: ${values.categories.map((category) => category)}
            position: ${values.position}
          `)
          //set status
          actions.setStatus({})
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
            <FieldArray
              name={position.name}
              render={(arrayHelpers) =>
                position.items.map((item, index) => {
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
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default App
