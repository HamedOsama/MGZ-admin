import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import env from '../../API/ApiUrl';

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  listType: "picture",
  action: `${env.API_URL}/images`,

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },

};

interface DragAndDropProps {
  currentFiles?: any;
  setCurrentFiles?: any;
}

const DragAndDrop = ({ currentFiles, setCurrentFiles }: DragAndDropProps) => {
  return (
    <Dragger
      {...props}
      defaultFileList={
        currentFiles
          ? currentFiles.map((file: any) => {
              return {
                uid: file?.uid || file,
                name: file?.name || file,
                status: 'done',
                url: file?.url || `${env.ImageUrl}${file}`,
              };
            })
          : []
      }
      onRemove={(file) => {
        if (currentFiles) {
          const index = currentFiles.indexOf(file);
          const newFileList = currentFiles.slice();
          newFileList.splice(index, 1);
          setCurrentFiles && setCurrentFiles(newFileList);
        }
      }}
      onChange={
        (info) => {
          // console.log(info);
          const { status } = info.file;
          // console.log(info.fileList);
          // if (status !== 'uploading') {
          //   console.log(info.file, info.fileList);
          // }
          if (status === 'done') {
            setCurrentFiles && setCurrentFiles(info.fileList);
            message.success(`${info.file.name} file uploaded successfully.`);
          }
          // else if (status === 'error') {
          //   message.error(`${info.file.name} file upload failed.`);
          // }
        }
      }
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
        banned files.
      </p>
    </Dragger>
  );
};

export default DragAndDrop;