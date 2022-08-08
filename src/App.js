import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BiCog } from 'react-icons/bi';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
	Ecommerce,
	Orders,
	Calendar,
	Employees,
	Stacked,
	Pyramid,
	Customers,
	Kanban,
	Line,
	Area,
	Bar,
	Pie,
	Financial,
	ColorMapping,
	Editor,
} from './pages';
import { useStateContext } from './contexts/ContextProvider';

export default function App() {
	const {
		activeMenu,
		themeSettings,
		setThemeSettings,
		currentColor,
		setCurrentColor,
		setCurrentMode,
		currentMode,
	} = useStateContext();

	useEffect(() => {
		const localColor = localStorage.getItem('colorMode');
		const localMode = localStorage.getItem('themeMode');
		if (localColor && localMode) {
			setCurrentColor(localColor);
			setCurrentMode(localMode);
		}
	}, []);

	return (
		<div className={currentMode === 'Dark' ? 'dark' : ''}>
			<BrowserRouter>
				<div className='flex relative dark:bg-main-dark-bg'>
					<div
						className='fixed right-4 bottom-4'
						style={{ zIndex: '1000' }}
					>
						<button
							style={{ color: currentColor }}
							onClick={() => setThemeSettings(!themeSettings)}
							type='button'
							className={`text-5xl p-3 mr-1 hover:motion-safe:animate-spin-slow`}
						>
							<BiCog />
						</button>
					</div>
					{activeMenu ? (
						<div className='w-72 sidebar fixed drop-shadow-md dark:bg-secondary-dark-bg bg-main-bg '>
							<Sidebar />
						</div>
					) : (
						<div className='w-0 dark:bg-secondary-dark-bg'>
							<Sidebar />
						</div>
					)}

					<div
						className={`bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen 
                ${activeMenu ? 'md:ml-72' : 'flex-2'} `}
					>
						<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
							<Navbar />
						</div>
						<div>
							{themeSettings && <ThemeSettings />}

							<Routes>
								{/* DASHBOARD */}
								<Route path='/' element={<Ecommerce />} />
								<Route
									path='/ecommerce'
									element={<Ecommerce />}
								/>

								{/* PAGES */}
								<Route path='/orders' element={<Orders />} />
								<Route
									path='/employees'
									element={<Employees />}
								/>
								<Route
									path='/customers'
									element={<Customers />}
								/>

								{/* APPS */}
								<Route path='/kanban' element={<Kanban />} />
								<Route path='/editor' element={<Editor />} />
								<Route
									path='/calendar'
									element={<Calendar />}
								/>

								{/* CHARTS */}
								<Route path='/line' element={<Line />} />
								<Route path='/area' element={<Area />} />
								<Route path='/bar' element={<Bar />} />
								<Route path='/pie' element={<Pie />} />
								<Route
									path='/financial'
									element={<Financial />}
								/>
								<Route
									path='/color-mapping'
									element={<ColorMapping />}
								/>
								<Route path='/pyramid' element={<Pyramid />} />
								<Route path='/stacked' element={<Stacked />} />
							</Routes>
						</div>
						{/* <Footer /> */}
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}
