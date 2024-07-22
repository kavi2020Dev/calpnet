import { Button, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import CustomizeButton from '../../../components/button/customizeButton'
import Dropzone from "../../../components/dropzone/dropzone";
import { useNavigate } from "react-router-dom";

const Documatation = ({setActive}) => {
  const theme = useTheme();
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    total: Yup.string().required("Total cost is required"),
    initail: Yup.string().required("Intial cost name is required"),
    document: Yup.array().min(1, 'Document is required'),
  });

  const initialValues = {
    total: "",
    initail : "",
    document : [],
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: () => navigate('/dashboard') ,
  });

  return (
    <>
      <Typography variant='h5' fontWeight={500}>
        Financials and Documentation
      </Typography>
      <div className='p-1'>
        <div className='flex'>
          <Typography variant='h6' pr={0.2}>
           Total Cost
          </Typography>
          <Typography variant='h6' color={theme?.palette?.error?.light}>
            *
          </Typography>
        </div>
        <TextField
          id='total'
          name='total'
          size='small'
          placeholder='Enter here'
          focused={false}
          fullWidth
          value={formik?.values?.total}
          onChange={formik?.handleChange}
          error={Boolean(
            formik.errors.total && formik.touched.total
          )}
          helperText={
            formik.errors.total && formik.touched.total
              ? formik.errors.total
              : ""
          }
          sx={{
            marginBlockEnd: "8px",
            marginInlineStart: "1px",
          }}
        />

        <div className='flex'>
          <Typography variant='h6' pr={0.2}>
            Initial Cost
          </Typography>
          <Typography variant='h6' color={theme?.palette?.error?.light}>
            *
          </Typography>
        </div>
        <TextField
          id='initail'
          name='initail'
          size='small'
          placeholder='Enter here'
          focused={false}
          fullWidth
          value={formik?.values?.initail}
          onChange={formik?.handleChange}
          error={Boolean(
            formik.errors.initail && formik.touched.initail
          )}
          helperText={
            formik.errors.initail && formik.touched.initail
              ? formik.errors.initail
              : ""
          }
          sx={{
            marginBlockEnd: "8px",
            marginInlineStart: "1px",
          }}
        />

        <div className='flex'>
          <Typography variant='h6' pr={0.2}>
           Supported Documents
          </Typography>
          <Typography variant='h6' color={theme?.palette?.error?.light}>
            *
          </Typography>
        </div>
        <Dropzone
         files={formik?.values?.document}
         onDrop={(acceptedFiles) => formik?.setFieldValue('document', acceptedFiles)}
         error={Boolean(formik.errors.document && formik.touched.document)}
         helpertext={formik.errors.document && formik.touched.document ? formik.errors.document : ""}
        />
      </div>

      <div className='flex justify-between' style={{marginBlockStart:'10px'}}>

          <Button style={{
             paddingBlock:'3px', borderRadius:'25px',
             fontSize:'0.75rem', color: theme?.palette?.common?.black,
             borderStyle:'solid', 
             borderWidth:'1px', 
             width:'80px',
             borderColor:theme?.palette?.grey[300]}} onClick={()=>setActive(1)}>Back</Button>
      

          <CustomizeButton
            isLoader={false}
            title='Next'
            styleOne={{
              paddingBlock: "10.1px",
              width: "120px",
              borderRadius: "25px",
            }}
            btnStyle={{
              paddingBlock: "4px",
              width: "90px",
              borderRadius: "25px",
            }}
            onClick={formik?.handleSubmit}
          />
        </div>
    </>
  );
};

export default Documatation;
