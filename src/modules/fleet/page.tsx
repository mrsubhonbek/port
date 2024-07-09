import { Space, Row, Col, Typography, List } from 'antd';

const data = [{
  hrefImage: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
  title: 'Нефтеналивной танкер "СБ-405"',
  description:
    'Sub Title 0',
  content:
    'Content News 0',
},
{
  hrefImage: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
  title: 'Бункеровщик "Колонок-52"',
  description:
    'Sub Title 0',
  content:
    'Content News 0',
}];

export function FleetPage() {
  return (
    <Space
      direction="vertical"
      className="w-full">
      <Row>
        <Col
          span={24}
          className="mt-16">
          <Typography.Title className="!text-7xl ">Флот</Typography.Title>
        </Col>
      </Row>
      <List
        itemLayout="vertical"
        size="large"
        split
        className="bg-white/10 backdrop-blur-xl pb-2 pr-2"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item
            key={index}

            extra={
              <img
              className='w-80'
                alt="logo"
                src={item.hrefImage}
              />
            }>
            <List.Item.Meta
              title={item.title}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </Space>
  );
}
