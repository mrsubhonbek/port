import React from 'react';
import {
  Button,
  Col,
  Descriptions,
  Flex,
  Row,
  Space,
  Tooltip,
  Typography,
} from 'antd';
import type { DescriptionsProps } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Company Name',
    children: 'Zhou Maomao',
    span: 12,
  },
  {
    key: '2',
    label: 'Telephone',
    children: '1810000000',
    span: 12,
  },
  {
    key: '4',
    label: 'Remark',
    children: 'empty',
    span: 12,
  },
  {
    key: '5',
    label: 'Address',
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    span: 12,
  },
  {
    key: '6',
    label: 'Email',
    children: 'Email@mail.com',
    span: 12,
  },
];

export const Contacts: React.FC = () => (
  <Space direction="horizontal">
    <Row>
      <Col
        className="bg-white/30 backdrop-blur-xl p-10"
        sm={24}
        md={12}>
        <Typography.Title level={1}>Контактная информация</Typography.Title>
        <Descriptions
          title=""
          items={items}
        />
        <Flex
          wrap
          gap="small">
          <Tooltip title="email">
            <Button
              shape="circle"
              icon={<MailOutlined />}
            />
          </Tooltip>
          <Tooltip title="phone">
            <Button
              shape="circle"
              icon={<PhoneOutlined />}
            />
          </Tooltip>
        </Flex>
      </Col>
    </Row>
  </Space>
);
