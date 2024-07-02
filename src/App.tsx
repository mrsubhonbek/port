import { Layout } from 'antd';
import { RouterProvider } from 'react-router-dom';

import { HeaderPage } from './modules/header';
import { FooterPage } from './modules/footer';
import { router } from './modules/route';

function App() {
  return (
    <Layout className="min-h-svh max-h-svh bg-transparent container px-3 mx-auto">
      <HeaderPage />
      <Layout.Content className='my-20'>
        <RouterProvider router={router} />
      </Layout.Content>
      <FooterPage />
    </Layout>
  );
}

export default App;
