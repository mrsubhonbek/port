/* eslint-disable @typescript-eslint/no-explicit-any */
import { Breadcrumb, Col, Divider, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    title: 'Услуги',
    href: '/services',
  },
  {
    title: 'Аренда причальной стенки',
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

export function TransportationCargo() {
  return (
    <Space
      direction="vertical"
      size="small">
      <Breadcrumb
        separator=">"
        items={items}
        itemRender={itemRender}
      />
      <Typography.Title level={1}>Аренда причальной стенки</Typography.Title>
      <Typography.Title level={3}>Аренда причальной стенки</Typography.Title>
      <Row gutter={[20, 20]}>
        <Col
          sm={24}
          md={18}>
          <Typography.Paragraph>
            <blockquote className="bg-white/30 backdrop-blur-3xl h-full">
              Мы осуществляем доставку нефтепродуктов, в том числе экспортных
              видов грузов, от крупнейших нефтеперерабатывающих заводов и
              нефтехранилищ, имеющих грузовые терминалы в портах рек внутренних
              водных путей России в морские порты и накопители.
              <Divider className="m-2" />
              <Typography.Paragraph>
                Общий потенциал объема грузов для перевозки в течении
                навигационного периода в европейской части ВВП России составляет
                500 тысяч тонн.
              </Typography.Paragraph>
              <Divider className="m-2" />
              <Typography.Paragraph>
                Объем груза, перевезенного в течение зимнего навигационного
                периода в южных морских портах, составил 100 тысяч тонн.
              </Typography.Paragraph>
              <Divider
                orientation="left"
                plain
                className="m-2">
                <Typography.Title level={5}>
                  Виды перевозимых грузов
                </Typography.Title>
              </Divider>
              <Typography.Paragraph>
                Мы перевозим сырую нефть и все темные и светлые виды
                нефтепродуктов нашими танкерами:{' '}
              </Typography.Paragraph>
              <Typography.Paragraph>
                <Typography.Text strong>
                  темные виды нефтепродуктов
                </Typography.Text>
                {' - '}
                сырая нефть, растворы битума и асфальта, различные масла,
                тяжелое нефтяное топливо (мазуты, мо­торное топливо и тяжелое
                дизельное топливо) и другое;
              </Typography.Paragraph>
              <Typography.Paragraph>
                <Typography.Text strong>
                  светлые виды нефтепродуктов (очищенные продукты)
                </Typography.Text>
                {' - '}
                экспортные виды топлива, дизельное топливо, керо­син, бензины и
                другие нефте­продукты;
              </Typography.Paragraph>
            </blockquote>
          </Typography.Paragraph>
        </Col>
      </Row>
    </Space>
  );
}
