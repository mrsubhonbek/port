import { Card, Col, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Бункеровка судов',
    description: 'Бункеровка судов речного и смешанного река-плавания',
    navigateUrl: '/bunkering-of-ships',
  },
  {
    title: 'Капитализация добычи',
    description:
      'Капитализация добычи сырья из речных и смешанных река-плавания',
    navigateUrl: '/comprehensive-service',
  },
];

export function ServicePage() {
  return (
    <Space
      direction="vertical"
      className="w-full">
      <Row>
        <Col
          span={24}
          className="mt-16">
          <Typography.Title className="!text-8xl">Услуги</Typography.Title>
        </Col>
      </Row>
      {services.map((service) => (
        <Row gutter={[16, 16]}>
          <Col
            className="w-full"
            md={13}
            sm={24}>
            <Card
              hoverable
              className="bg-black/10 backdrop-blur-xl cursor-default w-full"
              type="inner"
              title={service.title}
              extra={
                <Link to={service.navigateUrl}>
                  <Typography.Link href={service.navigateUrl}>
                    Еще
                  </Typography.Link>
                </Link>
              }>
              {service.description}
            </Card>
          </Col>
        </Row>
      ))}
    </Space>
  );
}
