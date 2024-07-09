import { Card, Col, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Бункеровка флота',
    description:
      'Услуги по комплексному обслуживанию флота – прием и утилизацию отходов согласно категориям MARPOL – нефтеостатков (шлам)',
    navigateUrl: '/fleet-maintenance',
  },
  {
    title: 'Аренда причальной стенки',
    description:
      'Мы осуществляем доставку нефтепродуктов, в том числе экспортных видов грузов, от крупнейших нефтеперерабатывающих заводов',
    navigateUrl: '/transportation-of-oil-cargo',
  },
  {
    title: 'Перевозка нефтепродуктов',
    description:
      'Перевозка нефтепродуктов',
    navigateUrl: '/transportation-of-petroleum-products',
  },
  {
    title: 'Погрузочно-разгрузочные работы НСМ',
    description:
      'Погрузочно-разгрузочные работы НСМ',
    navigateUrl: '/loading-and-unloading-works-of-nsm',
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
          <Typography.Title className="!text-7xl ">Услуги</Typography.Title>
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
              className="bg-white/30 backdrop-blur-3xl cursor-default w-full"
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
