import { TextField, Typography, useTheme } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import Button from '../../../components/button/customizeButton'

const Information = ({setActive}) => {
  const theme = useTheme();

  const validationSchema = Yup.object().shape({
    organization_name: Yup.string().required("Organization is required"),
    project_name: Yup.string().required("Project name is required"),
    project_description: Yup.string().required(
      "Project description is required"
    ),
  });

  const initialValues = {
    organization_name: "",
    project_name: "",
    project_description: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: () => setActive(1),
  });

  return (
    <>
      <Typography variant='h5' fontWeight={500}>
        Basic Information
      </Typography>
      <div className='p-1'>
        <div className='flex'>
          <Typography variant='h6' pr={0.2}>
            Organization Name
          </Typography>
          <Typography variant='h6' color={theme?.palette?.error?.light}>
            *
          </Typography>
        </div>
        <TextField
          id='organization_name'
          name='organization_name'
          size='small'
          placeholder='Enter here'
          focused={false}
          fullWidth
          value={formik?.values?.organization_name}
          onChange={formik?.handleChange}
          error={Boolean(
            formik.errors.organization_name && formik.touched.organization_name
          )}
          helperText={
            formik.errors.organization_name && formik.touched.organization_name
              ? formik.errors.organization_name
              : ""
          }
          sx={{
            marginBlockEnd: "8px",
            marginInlineStart: "1px",
          }}
        />

        <div className='flex'>
          <Typography variant='h6' pr={0.2}>
            Project Name
          </Typography>
          <Typography variant='h6' color={theme?.palette?.error?.light}>
            *
          </Typography>
        </div>
        <TextField
          id='project_name'
          name='project_name'
          size='small'
          placeholder='Enter here'
          focused={false}
          fullWidth
          value={formik?.values?.project_name}
          onChange={formik?.handleChange}
          error={Boolean(
            formik.errors.project_name && formik.touched.project_name
          )}
          helperText={
            formik.errors.project_name && formik.touched.project_name
              ? formik.errors.project_name
              : ""
          }
          sx={{
            marginBlockEnd: "8px",
            marginInlineStart: "1px",
          }}
        />

        <div className='flex'>
          <Typography variant='h6' pr={0.2}>
            Project Description
          </Typography>
          <Typography variant='h6' color={theme?.palette?.error?.light}>
            *
          </Typography>
        </div>
        <TextField
          id='project_description'
          name='project_description'
          size='small'
          multiline
          placeholder='Enter here'
          focused={false}
          rows={4}
          fullWidth
          value={formik?.values?.project_description}
          onChange={formik?.handleChange}
          error={Boolean(
            formik.errors.project_description &&
              formik.touched.project_description
          )}
          helperText={
            formik.errors.project_description &&
            formik.touched.project_description
              ? formik.errors.project_description
              : ""
          }
          sx={{
            marginBlockEnd: "8px",
            marginInlineStart: "1px",
          }}
        />
      </div>

      <div className="flex justify-end">
      <Button
        isLoader={false}
        title='Next'
        styleOne={{ paddingBlock: "10.1px" , width:'120px', borderRadius:'25px'}}
        btnStyle={{ paddingBlock: "4px", width:'90px', borderRadius:'25px'}}
        onClick={formik?.handleSubmit}
      />
      </div>
    </>
  );
};

export default Information;
