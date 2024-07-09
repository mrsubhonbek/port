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
    label: 'Название компании:',
    children: 'Акционерное общество Терминал Кирельское',
    span: 12,
  },
  {
    key: '2',
    label: 'Телефон',
    children: '1810000000',
    span: 12,
  },

  {
    key: '5',
    label: 'Адрес:',
    children:
      ' Республика Татарстан, Камско-Устьинский р-н, пгт Куйбышевский Затон, ул. Набережная 1П',
    span: 12,
  },
  {
    key: '6',
    label: 'Почта',
    children: 'tk550805@gmail.com',
    span: 12,
  },
  {
    key: '4',
    label: 'Примечание',
    children: '-',
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
              className="gap-0"
              shape="circle">
              <a href="mailto:tk550805@gmail.com">
                <MailOutlined />
              </a>
            </Button>
          </Tooltip>
          <Tooltip title="phone">
            <Button
              className="gap-0"
              shape="circle">
              <a href="tel:1810000000">
                <PhoneOutlined />
              </a>
            </Button>
          </Tooltip>
        </Flex>
      </Col>
    </Row>
  </Space>
);
