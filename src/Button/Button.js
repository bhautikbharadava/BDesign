import React from 'react';
import { Button as AntButton } from 'antd';
import styled from 'styled-components';

const CustomButton = styled(AntButton)`
  background-color: #1DA57A;
  border-color: #1DA57A;

  &:hover {
	background-color: #1890ff;
	border-color: #1890ff;
  }
`;

const Button = ({ label }) => {
  return <CustomButton>{label}</CustomButton>;
};

export default Button;