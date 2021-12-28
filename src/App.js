import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';


import Header from './component/Header';
import Story1 from './component/Stories/Story1';
import Experience1 from './component/Experience/Experience1';
import Experience2 from './component/Experience/Experience2';
import Story2 from './component/Stories/Story2';
import Footer from './component/Footer';

import Share from './component/Share/Share';
import Share2 from './component/Share/Share';

import SharedPage from './component/Share/SharedPage';

const homePage = (
	<React.Fragment>
		<Header />
		<Experience1 />
		<Story1 />
		<Experience2 />
		<Story2 />
		<Footer />
	</React.Fragment>
);

function App() {
  return (
		<Switch>
			<Route path="/" exact>
				<Redirect to="/homepage" />
			</Route>
			<Route path="/homepage" exact>
				{homePage}
			</Route>
			<Route path="/share1" exact>
				<Share right={true}/>
			</Route>
			<Route path="/share2" exact>
				<Share right={false}/>
			</Route>
			<Route path="/sharePage" exact>
				<SharedPage />
			</Route>
		</Switch>
	);
}

export default App;
