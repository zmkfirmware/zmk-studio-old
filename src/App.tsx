import React from 'react';
import './App.scss';

import { Layout, Typography, Row } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function App() {
	return (
		<Layout className="App">
			<Header className="AppHeader">
				<img src="/zmk_logo.svg" alt="ZMK Logo"/>
				<Title level={3}>Studio</Title>
			</Header>
			<Layout className="AppContent"></Layout>
			<Footer>Copyright © {new Date().getFullYear()} ZMK Project Contributors</Footer>
		</Layout>
	);
}

export default App;
