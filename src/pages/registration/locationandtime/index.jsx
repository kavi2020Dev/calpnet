import { Autocomplete, Button, TextField, Typography, useTheme } from "@mui/material";
import { useFormik } from "formik";
import React, { memo } from "react";
import * as Yup from "yup";
import CustomizeButton from "../../../components/button/customizeButton";
import CusDatePicker from '../../../components/datepicker/datepicker'

const LocationAndTime = ({ setActive }) => {
  const theme = useTheme();

  const validationSchema = Yup.object().shape({
    country: Yup.object().required("Country is required"),
    place: Yup.object().required("Place is required"),   
    startDate : Yup.date().required('start date is required'), 
    finishDate : Yup.date().required('finish date is required'), 
  });

  const initialValues = {
    place: null,
    country: null,
    startDate: null,
    finishDate: null,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: () => setActive(2),
  });


  return (
    <>
      <Typography variant='h5' fontWeight={500}>
        Location and Time
      </Typography>

      <div className='p-1'>
        <div className='flex'>
          <Typography variant='h6' pr={0.2}>
            Place
          </Typography>
          <Typography variant='h6' color={theme?.palette?.error?.light}>
            *
          </Typography>
        </div>

        <Autocomplete
          id='place'
          size='small'
          disableClearable
          value={formik?.values?.place}
          onChange={(_, newValue) => formik?.setFieldValue("place", newValue)}
          options={[
            { name: "Coimbatore", id: 1 },
            {name: "Chennai", id: 2 },
            { name: "Madurai", id: 3 },
          ]}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              focused={false}
              size='small'
              placeholder='Choose here'
              error={Boolean(formik.errors.place && formik.touched.place)}
              helperText={
                formik.errors.place && formik.touched.place
                  ? formik.errors.place
                  : ""
              }
            />
          )}
        />
      </div>

      <div className='p-1'>
        <div className='flex'>
          <Typography variant='h6' pr={0.2}>
            Country
          </Typography>
          <Typography variant='h6' color={theme?.palette?.error?.light}>
            *
          </Typography>
        </div>

        <Autocomplete
          id='country'
          size='small'
          disableClearable
          value={formik?.values?.country}
          onChange={(_, newValue) => formik?.setFieldValue("country", newValue)}
          options={[
            { name: "India", id: 1 },
            { id: 2, name: "Australia", id: 2 },
            { name: "China", id: 3 },
          ]}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              focused={false}
              size='small'
              placeholder='Choose here'
              error={Boolean(formik.errors.country && formik.touched.country)}
              helperText={
                formik.errors.country && formik.touched.country
                  ? formik.errors.country
                  : ""
              }
            />
          )}
        />

        <div className='w-full flex justify-between pt-2 '>
          <div className='w-1/2 pr-1'>
            <div className='flex'>
              <Typography variant='h6' pr={0.2}>
                Start Date
              </Typography>
              <Typography variant='h6' color={theme?.palette?.error?.light}>
                *
              </Typography>
            </div>
            <CusDatePicker
            name="startDate"
            value={formik.values.startDate}
            onChange={(value) => formik.setFieldValue('startDate', value)}
            error={formik.touched.startDate && !!formik.errors.startDate}
            errorMessage={formik.errors.startDate}
          />
             
          </div>

          <div className='w-1/2 pl-1'>
            <div className='flex'>
              <Typography variant='h6' pr={0.2}>
                Finish Date
              </Typography>
              <Typography variant='h6' color={theme?.palette?.error?.light}>
                *
              </Typography>
            </div>
            <CusDatePicker
            name="finishDate"
            value={formik.values.finishDate}
            onChange={(value) => formik.setFieldValue('finishDate', value)}
            error={formik.touched.finishDate && !!formik.errors.finishDate}
            errorMessage={formik.errors.finishDate}
          />
          </div>
        </div>

        <div className='flex justify-between' style={{marginBlockStart: true ? '74px' : '0px'}}>

          <Button style={{
             paddingBlock:'3px', borderRadius:'25px',
             fontSize:'0.75rem', color: theme?.palette?.common?.black,
             borderStyle:'solid', 
             borderWidth:'1px', 
             width:'80px',
             borderColor:theme?.palette?.grey[300]}} onClick={()=>setActive(0)}>Back</Button>
      

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
      </div>
    </>
  );
};

export default memo(LocationAndTime);
