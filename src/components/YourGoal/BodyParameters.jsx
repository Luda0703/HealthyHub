import React from 'react';
import image1 from '@/pages/SignUpPage/images/BodyParameters-diskt.png';
import image2 from '@/pages/SignUpPage/images/BodyParameters-diskt@2x.png';
import image3 from '@/pages/SignUpPage/images/BodyParameters-tab.png';
import image4 from '@/pages/SignUpPage/images/BodyParameters-tab@2x.png';
import image5 from '@/pages/SignUpPage/images/BodyParameters-mob.png';
import image6 from '@/pages/SignUpPage/images/BodyParameters-mob@2x.jpg';

import styles from './bodyParameters.module.scss';
import { Formik, Form, Field } from 'formik';
import { object, number, } from 'yup';

let userSchema = object({
  height: number().required(),
  weight: number().required(),
});

const initialValues = {
  height: '',
  weight: '',
}

const BodyParameters = () => {
  
  const handleSubmite = (values, {resetForm}) => {
    (JSON.stringify(values, null, 2));
    console.log(values);
    resetForm()
  };

  return (
    <div className={styles.container_your_goal}>
      <div className={styles.container_picture}>
        <picture className={styles.picture}>
          <source
            media="(min-width: 1440px)"
            srcSet={`${image1} 1x, ${image2} 2x`}
            width={592}
            height={594}
          />
          <source
            media="(min-width: 833px)"
            srcSet={`${image3} 1x, ${image4} 2x`}
            width={380}
            height={382}
          />
          <img
            srcSet={`${image5} 1x, ${image6} 2x`}
            width={300}
            height={302}
            src={image5}
            alt="Select Gender"
          />
        </picture>
      </div>
      <div className={styles.container_form}>
        <h1 className={styles.title}>Body parameters</h1>
        <Formik 
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleSubmite}>
          <Form 
          autoComplete='off'
          className={styles.form_checked}>
            <p className={styles.text}>
              Enter your parameters for correct performance tracking
            </p>
            <div className={styles.container_label}>
              <label className={styles.label}>
                Height
                <Field
                  className={styles.item_input}
                  type="number"
                  name="height"
                  placeholder="Enter your height"
                />
              </label>

              <label className={styles.label}>
                Weight
                <Field
                  className={styles.item_input}
                  type="number"
                  name="weight"
                  placeholder="Enter your weight"
                />
              </label>
            </div>
            <div className={styles.container_btn}>
              <button type="submit" className={styles.btn}>
                Next
              </button>
              <button type="submit" className={styles.btn_back}>
                Back
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default BodyParameters;
