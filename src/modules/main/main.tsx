import { Col, Row, Typography } from 'antd';
import { Cell } from './_ui/Card';

const cards = [
  {
    title: 'Card title',
    description: 'This is the description',
    urlImage:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    navigateUrl: '',
  },
  {
    title: 'Card title',
    description: 'This is the description',
    urlImage:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    navigateUrl: '',
  },
  {
    title: 'Card title',
    description: 'This is the description',
    urlImage:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    navigateUrl: '',
  },
  {
    className: 'bg-neutral-100/10',
    title: 'Card title',
    description: 'This is the description',
    navigateUrl: '',
  },
];

export function MainPage() {
  return (
    <Row>
      <Col
        span={10}
        sm={24}
        md={10}>
        <Typography.Title
          level={1}
          className="flex items-center justify-center h-full max-h-96 min-h-96">
          Big Logo
        </Typography.Title>
      </Col>
      <Row
        className="grow max-w-[50%] max-md:max-w-full"
        gutter={[0, 16]}>
        <Row className="w-full">
          <Col flex="auto">
            <Cell
              className="w-full"
              title="Услуги"
              description="This is the description"
              navigateUrl='/services'
            />
          </Col>
        </Row>
        <Row
          gutter={[10, 10]}
          className="justify-around">
          {cards.map((card, index) => (
            <Col key={index}>
              <Cell {...card} />
            </Col>
          ))}
        </Row>
      </Row>
    </Row>
  );
}
