import { Typography, useTheme } from '@mui/material'
import React from 'react'
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { showSnackBar } from '../../redux/reducer/snackbar';

const Dropzone = ({ onDrop, files, helpertext, error}) => {
 const theme = useTheme() 
 const dispatch = useDispatch()

 const handleDrop = (acceptedFiles, rejectedFiles) => {
  if (rejectedFiles.length > 0) {
    const file = rejectedFiles[0];
    if (file.errors) {
      file.errors.forEach((error) => {
        if (error.code === 'file-too-large') {
          dispatch(showSnackBar({message :'File is too large. Max size is 5MB', type:'error'}))
        } else if (error.code === 'file-invalid-type') {
          dispatch(showSnackBar({message :'Only PNG files are allowed', type:'error'}))
        }
      });
    }
  }
  console.log(rejectedFiles)
  onDrop(acceptedFiles);
};

 const { getRootProps, getInputProps } = useDropzone({
  onDrop: (acceptedFiles, fileRejections) => handleDrop(acceptedFiles, fileRejections),  
  accept: 'image/png', 
  maxSize: 5 * 1024 * 1024,
  multiple: false
 });


  return (
   <>
    <div
      className='w-full border-solid rounded-sm h-24 cursor-pointer flex justify-center items-center flex-col'
      style={{
        borderWidth: "1.4px",
        borderColor: error ? theme?.palette?.error?.main : theme?.palette?.grey[100],
        "&:hover": { borderColor: theme?.palette?.grey[200] },
      }} {...getRootProps()}
    >
      <input {...getInputProps()} />
      <svg
        width='65px'
        height='65px'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        fill='#000000'
      >
        <g id='SVGRepo_bgCarrier' strokeWidth={0} />
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <g id='SVGRepo_iconCarrier'>
          <title>{"Upload-1"}</title>
          <g
            id='Page-1'
            strokeWidth={0.8399999999999999}
            fill='none'
            fillRule='evenodd'
          >
            <g id='Upload-1'>
              <rect
                id='Rectangle'
                fillRule='nonzero'
                x={0}
                y={0}
                width={24}
                height={24}
              />
              <line
                x1={12}
                y1={11}
                x2={12}
                y2={20}
                id='Path'
                stroke='#7D7C7C'
                strokeWidth={0.8399999999999999}
                strokeLinecap='round'
              />
              <path
                d='M15,13 L12.7071,10.7071 C12.3166,10.3166 11.6834,10.3166 11.2929,10.7071 L9,13'
                id='Path'
                stroke='#7D7C7C'
                strokeWidth={0.8399999999999999}
                strokeLinecap='round'
              />
              <path
                d='M8,16 L6,16 C4.34315,16 3,14.6569 3,13 C3,11.3431 4.34315,10 6,10 C6,6.68629 8.68629,4 12,4 C15.3137,4 18,6.68629 18,10 C19.6569,10 21,11.3431 21,13 C21,14.6569 19.6569,16 18,16 L16,16'
                id='Path'
                stroke='#7D7C7C'
                strokeWidth={0.8399999999999999}
                strokeLinecap='round'
              />
            </g>
          </g>
        </g>
      </svg>
      <Typography variant='h6' color={theme?.palette.grey[200]}>
        {files?.length == 0 ? "Select a file to upload" : files[0]?.name}
      </Typography>
    </div>
    {error ? <Typography pl={2} variant='h6' fontWeight={400} color={theme?.palette?.error?.main}>{helpertext}</Typography> : null}
    </> 
  );
}

export default Dropzone