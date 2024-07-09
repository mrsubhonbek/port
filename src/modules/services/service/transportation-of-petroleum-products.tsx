/* eslint-disable @typescript-eslint/no-explicit-any */
import { Breadcrumb, Col, Divider, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    title: 'Услуги',
    href: '/services',
  },
  {
    title: 'Перевозка нефтепродуктов',
    href: '',
  },
];

function itemRender(currentRoute: any) {
  return currentRoute.href ? (
    <Link to={`${currentRoute.href}`}>{currentRoute.title}</Link>
  ) : (
    <span>{currentRoute.title}</span>
  );
}

export function TransportationPetroleumProducts() {
  return (
    <Space
      direction="vertical"
      size="small">
      <Breadcrumb
        separator=">"
        items={items}
        itemRender={itemRender}
      />
      <Typography.Title level={1}>Перевозка нефтепродуктов</Typography.Title>
      <Typography.Title level={3}>Перевозка нефтепродуктов</Typography.Title>
      <Row gutter={[20, 20]}>
        <Col
          sm={24}
          md={18}>
          <Typography.Paragraph>
            <blockquote className="bg-white/30 backdrop-blur-3xl h-full">
              Наша компания осуществляет{' '}
              <Typography.Text strong>бункеровку судов</Typography.Text> речного
              и смешанного «река-море» класса топливом и горюче-смазочными
              материалами различных видов самого лучшего качества.
              <Divider className="m-2" />
              <Typography.Paragraph>
                Также мы предлагаем нашим клиентам услуги по комплексному
                обслуживанию флота – прием и утилизацию отходов согласно
                категориям MARPOL – нефтеостатков (шлам), льяльных и сточных
                вод, пластмасс, пищевых и бытовых отходов, кулинарных масел и
                прочих эксплуатационных отходов.
              </Typography.Paragraph>
              <Divider className="m-2" />
              <Typography.Paragraph>
                Можем осуществлять услуги по{' '}
                <Typography.Text strong>
                  перевалке топлива и паузке танкеров
                </Typography.Text>{' '}
                при прохождении участков с ограничениями по проходной осадке.
              </Typography.Paragraph>
              <Divider className="m-2" />
              <Typography.Paragraph>
                Предлагаем услуги{' '}
                <Typography.Text strong>
                  накопления и хранения топлива
                </Typography.Text>{' '}
                на нашей собственной нефтебазе в г. Болгар, Спасского района
                Республики Татарстан, потенциальный объем резервуарного парка
                которой составляет порядка 18 тысяч кубометров.
              </Typography.Paragraph>
            </blockquote>
          </Typography.Paragraph>
        </Col>
      </Row>
    </Space>
  );
}
